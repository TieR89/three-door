<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Типы
interface SceneObjects {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  controls: OrbitControls
  door: THREE.Group
  cylinder: THREE.Mesh
  cubeCamera: THREE.CubeCamera
}

// Состояние
const container = ref<HTMLDivElement | null>(null)
const width = ref(2)
const height = ref(4)
let sceneObjects: SceneObjects | null = null
let animationFrameId: number | null = null

// Конфигурация
const CAMERA_CONFIG = {
  fov: 75,
  near: 0.1,
  far: 1000,
  position: new THREE.Vector3(0, 2, 5),
}

const CONTROLS_CONFIG = {
  enableDamping: true,
  dampingFactor: 0.25,
  screenSpacePanning: false,
  minDistance: 1,
  maxDistance: 1000,
  maxPolarAngle: Math.PI / 2,
}

// Функция для получения путей к текстурам
const getTexturePath = (filename: string): string => {
  const base = process.env.NODE_ENV === 'production' ? '/three-door' : ''
  return `${base}/textures/${filename}`
}

// Загрузчик текстур с кешированием
const textureLoader = new THREE.TextureLoader()
const textureCache = new Map<string, THREE.Texture>()

const loadTexture = async (filename: string): Promise<THREE.Texture> => {
  const path = getTexturePath(filename)
  if (textureCache.has(path)) {
    return textureCache.get(path)!
  }

  return new Promise((resolve, reject) => {
    textureLoader.load(
      path,
      (texture) => {
        textureCache.set(path, texture)
        resolve(texture)
      },
      undefined,
      (error) => {
        if (error instanceof Error) {
          reject(new Error(`Failed to load texture: ${path}. Error: ${error.message}`))
        } else {
          reject(new Error(`Failed to load texture: ${path}. Unknown error occurred.`))
        }
      },
    )
  })
}

// Создание двери с мемоизацией материалов
const createDoor = (() => {
  let frameMaterial: THREE.MeshPhongMaterial | null = null
  let handleMaterial: THREE.MeshPhongMaterial | null = null

  return (width: number, height: number): THREE.Group => {
    const doorGroup = new THREE.Group()
    const frameThickness = 0.1

    if (!frameMaterial) {
      frameMaterial = new THREE.MeshPhongMaterial({ color: 0x654321 })
    }
    if (!handleMaterial) {
      handleMaterial = new THREE.MeshPhongMaterial({ color: 0xcccccc })
    }

    // Центральная часть двери
    const centerGeometry = new THREE.BoxGeometry(
      width - 2 * frameThickness,
      height - 2 * frameThickness,
      0.05,
    )
    // const centerMaterial = new THREE.MeshPhongMaterial({
    //   map: textureCache.get(getTexturePath('wood.jpg')),
    // })
    // const center = new THREE.Mesh(centerGeometry, centerMaterial)
    // center.castShadow = true
    // center.receiveShadow = true
    // doorGroup.add(center)

    // Настройка UV-координат для центральной части
    const uvAttribute = centerGeometry.attributes.uv
    for (let i = 0; i < uvAttribute.count; i++) {
      const u = uvAttribute.getX(i)
      const v = uvAttribute.getY(i)
      // Масштабируем UV-координаты в зависимости от размеров двери
      uvAttribute.setXY(i, u * (width - 2 * frameThickness), v * (height - 2 * frameThickness))
    }
    uvAttribute.needsUpdate = true

    // Загрузка текстуры и настройка RepeatWrapping
    const woodTexture = textureCache.get(getTexturePath('wood.jpg'))!
    woodTexture.wrapS = THREE.RepeatWrapping
    woodTexture.wrapT = THREE.RepeatWrapping
    woodTexture.repeat.set(0.5, 0.5) // Текстура будет повторяться пропорционально размерам

    const centerMaterial = new THREE.MeshPhongMaterial({
      map: woodTexture,
    })
    const center = new THREE.Mesh(centerGeometry, centerMaterial)
    center.castShadow = true
    center.receiveShadow = true
    doorGroup.add(center)

    // Функция для создания частей рамки
    const createFrame = (geometry: THREE.BoxGeometry, position: THREE.Vector3): THREE.Mesh => {
      if (!frameMaterial) {
        throw new Error('Frame material is not initialized')
      }
      const frame = new THREE.Mesh(geometry, frameMaterial)
      frame.position.copy(position)
      frame.castShadow = true
      frame.receiveShadow = true
      return frame
    }

    // Создание рамки
    const frameGeometries = {
      horizontal: new THREE.BoxGeometry(width, frameThickness, 0.05),
      vertical: new THREE.BoxGeometry(frameThickness, height, 0.05),
    }

    doorGroup.add(
      createFrame(
        frameGeometries.horizontal,
        new THREE.Vector3(0, height / 2 - frameThickness / 2, 0),
      ),
      createFrame(
        frameGeometries.horizontal,
        new THREE.Vector3(0, -height / 2 + frameThickness / 2, 0),
      ),
      createFrame(
        frameGeometries.vertical,
        new THREE.Vector3(-width / 2 + frameThickness / 2, 0, 0),
      ),
      createFrame(
        frameGeometries.vertical,
        new THREE.Vector3(width / 2 - frameThickness / 2, 0, 0),
      ),
    )

    // Дверная ручка
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.2, 32), handleMaterial)
    handle.rotation.z = Math.PI / 2
    handle.position.set(width / 2 - frameThickness - 0.1, 0, 0.05)
    handle.castShadow = true
    handle.receiveShadow = true
    doorGroup.add(handle)

    doorGroup.position.y = height / 2 - 2
    return doorGroup
  }
})()

// Инициализация сцены
async function initScene() {
  if (!container.value) return

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(
    CAMERA_CONFIG.fov,
    window.innerWidth / window.innerHeight,
    CAMERA_CONFIG.near,
    CAMERA_CONFIG.far,
  )
  camera.position.copy(CAMERA_CONFIG.position)

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  container.value.appendChild(renderer.domElement)

  const controls = new OrbitControls(camera, renderer.domElement)
  Object.assign(controls, CONTROLS_CONFIG)

  // Загрузка всех текстур
  await Promise.all([loadTexture('wood.jpg'), loadTexture('marble.jpg'), loadTexture('wall.jpg')])

  // Кубическая камера для отражений
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(512, {
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  })
  const cubeCamera = new THREE.CubeCamera(1, 1000, cubeRenderTarget)
  scene.add(cubeCamera)

  // Отражающий цилиндр
  const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32)
  const cylinderMaterial = new THREE.MeshPhongMaterial({
    envMap: cubeRenderTarget.texture,
    reflectivity: 1,
    specular: new THREE.Color(0xffffff),
    shininess: 100,
  })
  const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial)
  cylinder.position.set(-1, -1, 2)
  cylinder.castShadow = true
  cylinder.receiveShadow = true
  scene.add(cylinder)

  // Дверь
  const door = createDoor(width.value, height.value)
  scene.add(door)

  // Пол
  // const floor = new THREE.Mesh(
  //   new THREE.PlaneGeometry(20, 20),
  //   new THREE.MeshPhongMaterial({
  //     map: textureCache.get(getTexturePath('marble.jpg')),
  //   }),
  // )
  // floor.rotation.x = -Math.PI / 2
  // floor.position.y = -2
  // floor.receiveShadow = true // Пол принимает тени
  // scene.add(floor)

  const createTiledFloor = (tileSize: number, texture: THREE.Texture): THREE.Mesh => {
    const floorGeometry = new THREE.PlaneGeometry(tileSize, tileSize)

    // Настройка RepeatWrapping для текстуры
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set(10, 10) // Текстура повторяется 5x5 раз

    const floorMaterial = new THREE.MeshPhongMaterial({
      map: texture,
    })

    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -2
    floor.receiveShadow = true

    return floor
  }

  // В initScene замените создание пола на:
  const floorTexture = textureCache.get(getTexturePath('marble.jpg'))!
  const floor = createTiledFloor(20, floorTexture) // Пол 20x20 с повторяющейся текстурой
  scene.add(floor)

  // Стена
  const wall = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 10),
    new THREE.MeshPhongMaterial({
      map: textureCache.get(getTexturePath('wall.jpg')),
    }),
  )
  wall.position.set(0, 3, -5)
  wall.receiveShadow = true // Стена принимает тени
  scene.add(wall)

  // Пирамида
  const pyramid = new THREE.Mesh(
    new THREE.ConeGeometry(0.75, 1.5, 4),
    new THREE.MeshPhongMaterial({ color: 0x0000ff }),
  )
  pyramid.position.set(1, -1.25, 2)
  pyramid.castShadow = true
  pyramid.receiveShadow = true
  scene.add(pyramid)

  // Освещение
  const ambientLight = new THREE.AmbientLight(0x404040)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 10, 7.5)
  directionalLight.castShadow = true
  directionalLight.shadow.mapSize.width = 1024
  directionalLight.shadow.mapSize.height = 1024
  directionalLight.shadow.camera.near = 0.5
  directionalLight.shadow.camera.far = 50
  scene.add(ambientLight, directionalLight)

  sceneObjects = { scene, camera, renderer, controls, door, cylinder, cubeCamera }
}

// Анимация
function animate() {
  if (!sceneObjects) return
  const { scene, camera, renderer, controls, cylinder, cubeCamera } = sceneObjects

  // Обновление отражений
  cylinder.visible = false
  cubeCamera.position.copy(cylinder.position)
  cubeCamera.update(renderer, scene)
  cylinder.visible = true

  controls.update()
  renderer.render(scene, camera)
  animationFrameId = requestAnimationFrame(animate)
}

// Обработчик изменения размера окна
const handleResize = () => {
  if (!sceneObjects) return
  const { camera, renderer } = sceneObjects
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// Обновление размеров двери
const updateDoor = (newWidth: number, newHeight: number) => {
  if (!sceneObjects) return
  const { scene, door } = sceneObjects
  scene.remove(door)
  const newDoor = createDoor(newWidth, newHeight)
  scene.add(newDoor)
  sceneObjects.door = newDoor
}

// Наблюдение за изменениями размеров
watch([width, height], ([newWidth, newHeight]) => {
  updateDoor(newWidth, newHeight)
})

// Жизненный цикл компонента
onMounted(async () => {
  await initScene()
  window.addEventListener('resize', handleResize)
  animate()
})

onBeforeUnmount(() => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  window.removeEventListener('resize', handleResize)

  // Очистка ресурсов
  textureCache.forEach((texture) => texture.dispose())
  textureCache.clear()

  if (sceneObjects) {
    const { renderer } = sceneObjects
    renderer.dispose()
  }
})
</script>

<template>
  <div ref="container">
    <div class="controls">
      <div class="control-group">
        <label for="width">Width:</label>
        <input type="range" id="width" v-model="width" min="1" max="5" step="0.1" />
        <span>{{ width }}m</span>
      </div>
      <div class="control-group">
        <label for="height">Height:</label>
        <input type="range" id="height" v-model="height" min="2" max="8" step="0.1" />
        <span>{{ height }}m</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.controls {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 5px;
}

.control-group {
  margin-bottom: 10px;
}

label {
  margin-right: 10px;
}

input {
  margin-right: 10px;
}
</style>
