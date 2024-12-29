(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Xa(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const se={},Qi=[],_n=()=>{},cf=()=>!1,Wr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ya=n=>n.startsWith("onUpdate:"),Ce=Object.assign,qa=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},uf=Object.prototype.hasOwnProperty,te=(n,t)=>uf.call(n,t),zt=Array.isArray,ts=n=>Xr(n)==="[object Map]",hu=n=>Xr(n)==="[object Set]",Vt=n=>typeof n=="function",ge=n=>typeof n=="string",si=n=>typeof n=="symbol",de=n=>n!==null&&typeof n=="object",fu=n=>(de(n)||Vt(n))&&Vt(n.then)&&Vt(n.catch),du=Object.prototype.toString,Xr=n=>du.call(n),hf=n=>Xr(n).slice(8,-1),pu=n=>Xr(n)==="[object Object]",ja=n=>ge(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Rs=Xa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yr=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},ff=/-(\w)/g,ei=Yr(n=>n.replace(ff,(t,e)=>e?e.toUpperCase():"")),df=/\B([A-Z])/g,Ci=Yr(n=>n.replace(df,"-$1").toLowerCase()),mu=Yr(n=>n.charAt(0).toUpperCase()+n.slice(1)),io=Yr(n=>n?`on${mu(n)}`:""),$n=(n,t)=>!Object.is(n,t),br=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},_u=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Yo=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ll;const qr=()=>Ll||(Ll=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ka(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=ge(i)?gf(i):Ka(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(ge(n)||de(n))return n}const pf=/;(?![^(]*\))/g,mf=/:([^]+)/,_f=/\/\*[^]*?\*\//g;function gf(n){const t={};return n.replace(_f,"").split(pf).forEach(e=>{if(e){const i=e.split(mf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function $a(n){let t="";if(ge(n))t=n;else if(zt(n))for(let e=0;e<n.length;e++){const i=$a(n[e]);i&&(t+=i+" ")}else if(de(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const vf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",xf=Xa(vf);function gu(n){return!!n||n===""}const vu=n=>!!(n&&n.__v_isRef===!0),qo=n=>ge(n)?n:n==null?"":zt(n)||de(n)&&(n.toString===du||!Vt(n.toString))?vu(n)?qo(n.value):JSON.stringify(n,xu,2):String(n),xu=(n,t)=>vu(t)?xu(n,t.value):ts(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[so(i,r)+" =>"]=s,e),{})}:hu(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>so(e))}:si(t)?so(t):de(t)&&!zt(t)&&!pu(t)?String(t):t,so=(n,t="")=>{var e;return si(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Mf{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].pause();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes)for(t=0,e=this.scopes.length;t<e;t++)this.scopes[t].resume();for(t=0,e=this.effects.length;t<e;t++)this.effects[t].resume()}}run(t){if(this._active){const e=Xe;try{return Xe=this,t()}finally{Xe=e}}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Sf(){return Xe}let oe;const ro=new WeakSet;class Mu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ro.has(this)&&(ro.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Eu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ul(this),yu(this);const t=oe,e=ln;oe=this,ln=!0;try{return this.fn()}finally{Tu(this),oe=t,ln=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qa(t);this.deps=this.depsTail=void 0,Ul(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ro.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jo(this)&&this.run()}get dirty(){return jo(this)}}let Su=0,Cs,Ps;function Eu(n,t=!1){if(n.flags|=8,t){n.next=Ps,Ps=n;return}n.next=Cs,Cs=n}function Za(){Su++}function Ja(){if(--Su>0)return;if(Ps){let t=Ps;for(Ps=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Cs;){let t=Cs;for(Cs=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function yu(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Tu(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Qa(i),Ef(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function jo(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(bu(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function bu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os))return;n.globalVersion=Os;const t=n.dep;if(n.flags|=2,t.version>0&&!n.isSSR&&n.deps&&!jo(n)){n.flags&=-3;return}const e=oe,i=ln;oe=n,ln=!0;try{yu(n);const s=n.fn(n._value);(t.version===0||$n(s,n._value))&&(n._value=s,t.version++)}catch(s){throw t.version++,s}finally{oe=e,ln=i,Tu(n),n.flags&=-3}}function Qa(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Qa(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function Ef(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let ln=!0;const Au=[];function ri(){Au.push(ln),ln=!1}function oi(){const n=Au.pop();ln=n===void 0?!0:n}function Ul(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=oe;oe=void 0;try{t()}finally{oe=e}}}let Os=0;class yf{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(t){if(!oe||!ln||oe===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==oe)e=this.activeLink=new yf(oe,this),oe.deps?(e.prevDep=oe.depsTail,oe.depsTail.nextDep=e,oe.depsTail=e):oe.deps=oe.depsTail=e,wu(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=oe.depsTail,e.nextDep=void 0,oe.depsTail.nextDep=e,oe.depsTail=e,oe.deps===e&&(oe.deps=i)}return e}trigger(t){this.version++,Os++,this.notify(t)}notify(t){Za();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{Ja()}}}function wu(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)wu(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ko=new WeakMap,Ti=Symbol(""),$o=Symbol(""),Bs=Symbol("");function Ae(n,t,e){if(ln&&oe){let i=Ko.get(n);i||Ko.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new tl),s.map=i,s.key=e),s.track()}}function Dn(n,t,e,i,s,r){const o=Ko.get(n);if(!o){Os++;return}const a=l=>{l&&l.trigger()};if(Za(),t==="clear")o.forEach(a);else{const l=zt(n),u=l&&ja(e);if(l&&e==="length"){const c=Number(i);o.forEach((h,d)=>{(d==="length"||d===Bs||!si(d)&&d>=c)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),u&&a(o.get(Bs)),t){case"add":l?u&&a(o.get("length")):(a(o.get(Ti)),ts(n)&&a(o.get($o)));break;case"delete":l||(a(o.get(Ti)),ts(n)&&a(o.get($o)));break;case"set":ts(n)&&a(o.get(Ti));break}}Ja()}function Li(n){const t=Qt(n);return t===n?t:(Ae(t,"iterate",Bs),cn(n)?t:t.map(Ie))}function el(n){return Ae(n=Qt(n),"iterate",Bs),n}const Tf={__proto__:null,[Symbol.iterator](){return oo(this,Symbol.iterator,Ie)},concat(...n){return Li(this).concat(...n.map(t=>zt(t)?Li(t):t))},entries(){return oo(this,"entries",n=>(n[1]=Ie(n[1]),n))},every(n,t){return En(this,"every",n,t,void 0,arguments)},filter(n,t){return En(this,"filter",n,t,e=>e.map(Ie),arguments)},find(n,t){return En(this,"find",n,t,Ie,arguments)},findIndex(n,t){return En(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return En(this,"findLast",n,t,Ie,arguments)},findLastIndex(n,t){return En(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return En(this,"forEach",n,t,void 0,arguments)},includes(...n){return ao(this,"includes",n)},indexOf(...n){return ao(this,"indexOf",n)},join(n){return Li(this).join(n)},lastIndexOf(...n){return ao(this,"lastIndexOf",n)},map(n,t){return En(this,"map",n,t,void 0,arguments)},pop(){return xs(this,"pop")},push(...n){return xs(this,"push",n)},reduce(n,...t){return Il(this,"reduce",n,t)},reduceRight(n,...t){return Il(this,"reduceRight",n,t)},shift(){return xs(this,"shift")},some(n,t){return En(this,"some",n,t,void 0,arguments)},splice(...n){return xs(this,"splice",n)},toReversed(){return Li(this).toReversed()},toSorted(n){return Li(this).toSorted(n)},toSpliced(...n){return Li(this).toSpliced(...n)},unshift(...n){return xs(this,"unshift",n)},values(){return oo(this,"values",Ie)}};function oo(n,t,e){const i=el(n),s=i[t]();return i!==n&&!cn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=e(r.value)),r}),s}const bf=Array.prototype;function En(n,t,e,i,s,r){const o=el(n),a=o!==n&&!cn(n),l=o[t];if(l!==bf[t]){const h=l.apply(n,r);return a?Ie(h):h}let u=e;o!==n&&(a?u=function(h,d){return e.call(this,Ie(h),d,n)}:e.length>2&&(u=function(h,d){return e.call(this,h,d,n)}));const c=l.call(o,u,i);return a&&s?s(c):c}function Il(n,t,e,i){const s=el(n);let r=e;return s!==n&&(cn(n)?e.length>3&&(r=function(o,a,l){return e.call(this,o,a,l,n)}):r=function(o,a,l){return e.call(this,o,Ie(a),l,n)}),s[t](r,...i)}function ao(n,t,e){const i=Qt(n);Ae(i,"iterate",Bs);const s=i[t](...e);return(s===-1||s===!1)&&rl(e[0])?(e[0]=Qt(e[0]),i[t](...e)):s}function xs(n,t,e=[]){ri(),Za();const i=Qt(n)[t].apply(n,e);return Ja(),oi(),i}const Af=Xa("__proto__,__v_isRef,__isVue"),Ru=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(si));function wf(n){si(n)||(n=String(n));const t=Qt(this);return Ae(t,"has",n),t.hasOwnProperty(n)}class Cu{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?Of:Uu:r?Lu:Du).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=zt(t);if(!s){let l;if(o&&(l=Tf[e]))return l;if(e==="hasOwnProperty")return wf}const a=Reflect.get(t,e,we(t)?t:i);return(si(e)?Ru.has(e):Af(e))||(s||Ae(t,"get",e),r)?a:we(a)?o&&ja(e)?a:a.value:de(a)?s?Iu(a):il(a):a}}class Pu extends Cu{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];if(!this._isShallow){const l=bi(r);if(!cn(i)&&!bi(i)&&(r=Qt(r),i=Qt(i)),!zt(t)&&we(r)&&!we(i))return l?!1:(r.value=i,!0)}const o=zt(t)&&ja(e)?Number(e)<t.length:te(t,e),a=Reflect.set(t,e,i,we(t)?t:s);return t===Qt(s)&&(o?$n(i,r)&&Dn(t,"set",e,i):Dn(t,"add",e,i)),a}deleteProperty(t,e){const i=te(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Dn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!si(e)||!Ru.has(e))&&Ae(t,"has",e),i}ownKeys(t){return Ae(t,"iterate",zt(t)?"length":Ti),Reflect.ownKeys(t)}}class Rf extends Cu{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const Cf=new Pu,Pf=new Rf,Df=new Pu(!0);const Zo=n=>n,tr=n=>Reflect.getPrototypeOf(n);function Lf(n,t,e){return function(...i){const s=this.__v_raw,r=Qt(s),o=ts(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...i),c=e?Zo:t?Jo:Ie;return!t&&Ae(r,"iterate",l?$o:Ti),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[c(h[0]),c(h[1])]:c(h),done:d}},[Symbol.iterator](){return this}}}}function er(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function Uf(n,t){const e={get(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);n||($n(s,a)&&Ae(o,"get",s),Ae(o,"get",a));const{has:l}=tr(o),u=t?Zo:n?Jo:Ie;if(l.call(o,s))return u(r.get(s));if(l.call(o,a))return u(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Ae(Qt(s),"iterate",Ti),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=Qt(r),a=Qt(s);return n||($n(s,a)&&Ae(o,"has",s),Ae(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Qt(a),u=t?Zo:n?Jo:Ie;return!n&&Ae(l,"iterate",Ti),a.forEach((c,h)=>s.call(r,u(c),u(h),o))}};return Ce(e,n?{add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear")}:{add(s){!t&&!cn(s)&&!bi(s)&&(s=Qt(s));const r=Qt(this);return tr(r).has.call(r,s)||(r.add(s),Dn(r,"add",s,s)),this},set(s,r){!t&&!cn(r)&&!bi(r)&&(r=Qt(r));const o=Qt(this),{has:a,get:l}=tr(o);let u=a.call(o,s);u||(s=Qt(s),u=a.call(o,s));const c=l.call(o,s);return o.set(s,r),u?$n(r,c)&&Dn(o,"set",s,r):Dn(o,"add",s,r),this},delete(s){const r=Qt(this),{has:o,get:a}=tr(r);let l=o.call(r,s);l||(s=Qt(s),l=o.call(r,s)),a&&a.call(r,s);const u=r.delete(s);return l&&Dn(r,"delete",s,void 0),u},clear(){const s=Qt(this),r=s.size!==0,o=s.clear();return r&&Dn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Lf(s,n,t)}),e}function nl(n,t){const e=Uf(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(te(e,s)&&s in i?e:i,s,r)}const If={get:nl(!1,!1)},Nf={get:nl(!1,!0)},Ff={get:nl(!0,!1)};const Du=new WeakMap,Lu=new WeakMap,Uu=new WeakMap,Of=new WeakMap;function Bf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function zf(n){return n.__v_skip||!Object.isExtensible(n)?0:Bf(hf(n))}function il(n){return bi(n)?n:sl(n,!1,Cf,If,Du)}function Hf(n){return sl(n,!1,Df,Nf,Lu)}function Iu(n){return sl(n,!0,Pf,Ff,Uu)}function sl(n,t,e,i,s){if(!de(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=zf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function Ds(n){return bi(n)?Ds(n.__v_raw):!!(n&&n.__v_isReactive)}function bi(n){return!!(n&&n.__v_isReadonly)}function cn(n){return!!(n&&n.__v_isShallow)}function rl(n){return n?!!n.__v_raw:!1}function Qt(n){const t=n&&n.__v_raw;return t?Qt(t):n}function Vf(n){return!te(n,"__v_skip")&&Object.isExtensible(n)&&_u(n,"__v_skip",!0),n}const Ie=n=>de(n)?il(n):n,Jo=n=>de(n)?Iu(n):n;function we(n){return n?n.__v_isRef===!0:!1}function lo(n){return Gf(n,!1)}function Gf(n,t){return we(n)?n:new kf(n,t)}class kf{constructor(t,e){this.dep=new tl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Qt(t),this._value=e?t:Ie(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||cn(t)||bi(t);t=i?t:Qt(t),$n(t,e)&&(this._rawValue=t,this._value=i?t:Ie(t),this.dep.trigger())}}function Wf(n){return we(n)?n.value:n}const Xf={get:(n,t,e)=>t==="__v_raw"?n:Wf(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return we(s)&&!we(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function Nu(n){return Ds(n)?n:new Proxy(n,Xf)}class Yf{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new tl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&oe!==this)return Eu(this,!0),!0}get value(){const t=this.dep.track();return bu(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function qf(n,t,e=!1){let i,s;return Vt(n)?i=n:(i=n.get,s=n.set),new Yf(i,s,e)}const nr={},Fr=new WeakMap;let xi;function jf(n,t=!1,e=xi){if(e){let i=Fr.get(e);i||Fr.set(e,i=[]),i.push(n)}}function Kf(n,t,e=se){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,u=E=>s?E:cn(E)||s===!1||s===0?Ln(E,1):Ln(E);let c,h,d,p,v=!1,y=!1;if(we(n)?(h=()=>n.value,v=cn(n)):Ds(n)?(h=()=>u(n),v=!0):zt(n)?(y=!0,v=n.some(E=>Ds(E)||cn(E)),h=()=>n.map(E=>{if(we(E))return E.value;if(Ds(E))return u(E);if(Vt(E))return l?l(E,2):E()})):Vt(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){ri();try{d()}finally{oi()}}const E=xi;xi=c;try{return l?l(n,3,[p]):n(p)}finally{xi=E}}:h=_n,t&&s){const E=h,U=s===!0?1/0:s;h=()=>Ln(E(),U)}const m=Sf(),f=()=>{c.stop(),m&&m.active&&qa(m.effects,c)};if(r&&t){const E=t;t=(...U)=>{E(...U),f()}}let w=y?new Array(n.length).fill(nr):nr;const b=E=>{if(!(!(c.flags&1)||!c.dirty&&!E))if(t){const U=c.run();if(s||v||(y?U.some((D,C)=>$n(D,w[C])):$n(U,w))){d&&d();const D=xi;xi=c;try{const C=[U,w===nr?void 0:y&&w[0]===nr?[]:w,p];l?l(t,3,C):t(...C),w=U}finally{xi=D}}}else c.run()};return a&&a(b),c=new Mu(h),c.scheduler=o?()=>o(b,!1):b,p=E=>jf(E,!1,c),d=c.onStop=()=>{const E=Fr.get(c);if(E){if(l)l(E,4);else for(const U of E)U();Fr.delete(c)}},t?i?b(!0):w=c.run():o?o(b.bind(null,!0),!0):c.run(),f.pause=c.pause.bind(c),f.resume=c.resume.bind(c),f.stop=f,f}function Ln(n,t=1/0,e){if(t<=0||!de(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),t--,we(n))Ln(n.value,t,e);else if(zt(n))for(let i=0;i<n.length;i++)Ln(n[i],t,e);else if(hu(n)||ts(n))n.forEach(i=>{Ln(i,t,e)});else if(pu(n)){for(const i in n)Ln(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ln(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qs(n,t,e,i){try{return i?n(...i):n()}catch(s){jr(s,t,e)}}function xn(n,t,e,i){if(Vt(n)){const s=qs(n,t,e,i);return s&&fu(s)&&s.catch(r=>{jr(r,t,e)}),s}if(zt(n)){const s=[];for(let r=0;r<n.length;r++)s.push(xn(n[r],t,e,i));return s}}function jr(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||se;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](n,l,u)===!1)return}a=a.parent}if(r){ri(),qs(r,null,10,[n,l,u]),oi();return}}$f(n,e,s,i,o)}function $f(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Ne=[];let fn=-1;const es=[];let Xn=null,qi=0;const Fu=Promise.resolve();let Or=null;function Zf(n){const t=Or||Fu;return n?t.then(this?n.bind(this):n):t}function Jf(n){let t=fn+1,e=Ne.length;for(;t<e;){const i=t+e>>>1,s=Ne[i],r=zs(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function ol(n){if(!(n.flags&1)){const t=zs(n),e=Ne[Ne.length-1];!e||!(n.flags&2)&&t>=zs(e)?Ne.push(n):Ne.splice(Jf(t),0,n),n.flags|=1,Ou()}}function Ou(){Or||(Or=Fu.then(zu))}function Qf(n){zt(n)?es.push(...n):Xn&&n.id===-1?Xn.splice(qi+1,0,n):n.flags&1||(es.push(n),n.flags|=1),Ou()}function Nl(n,t,e=fn+1){for(;e<Ne.length;e++){const i=Ne[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ne.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bu(n){if(es.length){const t=[...new Set(es)].sort((e,i)=>zs(e)-zs(i));if(es.length=0,Xn){Xn.push(...t);return}for(Xn=t,qi=0;qi<Xn.length;qi++){const e=Xn[qi];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}Xn=null,qi=0}}const zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zu(n){try{for(fn=0;fn<Ne.length;fn++){const t=Ne[fn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),qs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;fn<Ne.length;fn++){const t=Ne[fn];t&&(t.flags&=-2)}fn=-1,Ne.length=0,Bu(),Or=null,(Ne.length||es.length)&&zu()}}let Je=null,Hu=null;function Br(n){const t=Je;return Je=n,Hu=n&&n.type.__scopeId||null,t}function td(n,t=Je,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Xl(-1);const r=Br(t);let o;try{o=n(...s)}finally{Br(r),i._d&&Xl(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Fl(n,t){if(Je===null)return n;const e=Jr(Je),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=se]=t[s];r&&(Vt(r)&&(r={mounted:r,updated:r}),r.deep&&Ln(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ui(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ri(),xn(l,e,8,[n.el,a,n,t]),oi())}}const ed=Symbol("_vte"),nd=n=>n.__isTeleport;function al(n,t){n.shapeFlag&6&&n.component?(n.transition=t,al(n.component.subTree,t)):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Vu(n,t){return Vt(n)?Ce({name:n.name},t,{setup:n}):n}function Gu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function zr(n,t,e,i,s=!1){if(zt(n)){n.forEach((v,y)=>zr(v,t&&(zt(t)?t[y]:t),e,i,s));return}if(Ls(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&zr(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Jr(i.component):i.el,o=s?null:r,{i:a,r:l}=n,u=t&&t.r,c=a.refs===se?a.refs={}:a.refs,h=a.setupState,d=Qt(h),p=h===se?()=>!1:v=>te(d,v);if(u!=null&&u!==l&&(ge(u)?(c[u]=null,p(u)&&(h[u]=null)):we(u)&&(u.value=null)),Vt(l))qs(l,a,12,[o,c]);else{const v=ge(l),y=we(l);if(v||y){const m=()=>{if(n.f){const f=v?p(l)?h[l]:c[l]:l.value;s?zt(f)&&qa(f,r):zt(f)?f.includes(r)||f.push(r):v?(c[l]=[r],p(l)&&(h[l]=c[l])):(l.value=[r],n.k&&(c[n.k]=l.value))}else v?(c[l]=o,p(l)&&(h[l]=o)):y&&(l.value=o,n.k&&(c[n.k]=o))};o?(m.id=-1,We(m,e)):m()}}}qr().requestIdleCallback;qr().cancelIdleCallback;const Ls=n=>!!n.type.__asyncLoader,ku=n=>n.type.__isKeepAlive;function id(n,t){Wu(n,"a",t)}function sd(n,t){Wu(n,"da",t)}function Wu(n,t,e=Fe){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Kr(t,i,e),e){let s=e.parent;for(;s&&s.parent;)ku(s.parent.vnode)&&rd(i,t,e,s),s=s.parent}}function rd(n,t,e,i){const s=Kr(t,n,i,!0);qu(()=>{qa(i[t],s)},e)}function Kr(n,t,e=Fe,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{ri();const a=js(e),l=xn(t,e,n,o);return a(),oi(),l});return i?s.unshift(r):s.push(r),r}}const Bn=n=>(t,e=Fe)=>{(!Gs||n==="sp")&&Kr(n,(...i)=>t(...i),e)},od=Bn("bm"),Xu=Bn("m"),ad=Bn("bu"),ld=Bn("u"),Yu=Bn("bum"),qu=Bn("um"),cd=Bn("sp"),ud=Bn("rtg"),hd=Bn("rtc");function fd(n,t=Fe){Kr("ec",n,t)}const dd=Symbol.for("v-ndc"),Qo=n=>n?_h(n)?Jr(n):Qo(n.parent):null,Us=Ce(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Qo(n.parent),$root:n=>Qo(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Ku(n),$forceUpdate:n=>n.f||(n.f=()=>{ol(n.update)}),$nextTick:n=>n.n||(n.n=Zf.bind(n.proxy)),$watch:n=>Nd.bind(n)}),co=(n,t)=>n!==se&&!n.__isScriptSetup&&te(n,t),pd={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(co(i,t))return o[t]=1,i[t];if(s!==se&&te(s,t))return o[t]=2,s[t];if((u=n.propsOptions[0])&&te(u,t))return o[t]=3,r[t];if(e!==se&&te(e,t))return o[t]=4,e[t];ta&&(o[t]=0)}}const c=Us[t];let h,d;if(c)return t==="$attrs"&&Ae(n.attrs,"get",""),c(n);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==se&&te(e,t))return o[t]=4,e[t];if(d=l.config.globalProperties,te(d,t))return d[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return co(s,t)?(s[t]=e,!0):i!==se&&te(i,t)?(i[t]=e,!0):te(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!e[o]||n!==se&&te(n,o)||co(t,o)||(a=r[0])&&te(a,o)||te(i,o)||te(Us,o)||te(s.config.globalProperties,o)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:te(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function Ol(n){return zt(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let ta=!0;function md(n){const t=Ku(n),e=n.proxy,i=n.ctx;ta=!1,t.beforeCreate&&Bl(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:d,beforeUpdate:p,updated:v,activated:y,deactivated:m,beforeDestroy:f,beforeUnmount:w,destroyed:b,unmounted:E,render:U,renderTracked:D,renderTriggered:C,errorCaptured:I,serverPrefetch:T,expose:M,inheritAttrs:L,components:k,directives:H,filters:tt}=t;if(u&&_d(u,i,null),o)for(const et in o){const V=o[et];Vt(V)&&(i[et]=V.bind(e))}if(s){const et=s.call(e,e);de(et)&&(n.data=il(et))}if(ta=!0,r)for(const et in r){const V=r[et],ht=Vt(V)?V.bind(e,e):Vt(V.get)?V.get.bind(e,e):_n,Mt=!Vt(V)&&Vt(V.set)?V.set.bind(e):_n,Tt=sp({get:ht,set:Mt});Object.defineProperty(i,et,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:Pt=>Tt.value=Pt})}if(a)for(const et in a)ju(a[et],i,e,et);if(l){const et=Vt(l)?l.call(e):l;Reflect.ownKeys(et).forEach(V=>{Ed(V,et[V])})}c&&Bl(c,n,"c");function K(et,V){zt(V)?V.forEach(ht=>et(ht.bind(e))):V&&et(V.bind(e))}if(K(od,h),K(Xu,d),K(ad,p),K(ld,v),K(id,y),K(sd,m),K(fd,I),K(hd,D),K(ud,C),K(Yu,w),K(qu,E),K(cd,T),zt(M))if(M.length){const et=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(et,V,{get:()=>e[V],set:ht=>e[V]=ht})})}else n.exposed||(n.exposed={});U&&n.render===_n&&(n.render=U),L!=null&&(n.inheritAttrs=L),k&&(n.components=k),H&&(n.directives=H),T&&Gu(n)}function _d(n,t,e=_n){zt(n)&&(n=ea(n));for(const i in n){const s=n[i];let r;de(s)?"default"in s?r=Ar(s.from||i,s.default,!0):r=Ar(s.from||i):r=Ar(s),we(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function Bl(n,t,e){xn(zt(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function ju(n,t,e,i){let s=i.includes(".")?ch(e,i):()=>e[i];if(ge(n)){const r=t[n];Vt(r)&&wr(s,r)}else if(Vt(n))wr(s,n.bind(e));else if(de(n))if(zt(n))n.forEach(r=>ju(r,t,e,i));else{const r=Vt(n.handler)?n.handler.bind(e):t[n.handler];Vt(r)&&wr(s,r,n)}}function Ku(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(u=>Hr(l,u,o,!0)),Hr(l,t,o)),de(t)&&r.set(t,l),l}function Hr(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&Hr(n,r,e,!0),s&&s.forEach(o=>Hr(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=gd[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const gd={data:zl,props:Hl,emits:Hl,methods:bs,computed:bs,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:bs,directives:bs,watch:xd,provide:zl,inject:vd};function zl(n,t){return t?n?function(){return Ce(Vt(n)?n.call(this,this):n,Vt(t)?t.call(this,this):t)}:t:n}function vd(n,t){return bs(ea(n),ea(t))}function ea(n){if(zt(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function De(n,t){return n?[...new Set([].concat(n,t))]:t}function bs(n,t){return n?Ce(Object.create(null),n,t):t}function Hl(n,t){return n?zt(n)&&zt(t)?[...new Set([...n,...t])]:Ce(Object.create(null),Ol(n),Ol(t??{})):t}function xd(n,t){if(!n)return t;if(!t)return n;const e=Ce(Object.create(null),n);for(const i in t)e[i]=De(n[i],t[i]);return e}function $u(){return{app:null,config:{isNativeTag:cf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Md=0;function Sd(n,t){return function(i,s=null){Vt(i)||(i=Ce({},i)),s!=null&&!de(s)&&(s=null);const r=$u(),o=new WeakSet,a=[];let l=!1;const u=r.app={_uid:Md++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:rp,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&Vt(c.install)?(o.add(c),c.install(u,...h)):Vt(c)&&(o.add(c),c(u,...h))),u},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),u},component(c,h){return h?(r.components[c]=h,u):r.components[c]},directive(c,h){return h?(r.directives[c]=h,u):r.directives[c]},mount(c,h,d){if(!l){const p=u._ceVNode||Zn(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,c,d),l=!0,u._container=c,c.__vue_app__=u,Jr(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(xn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(c,h){return r.provides[c]=h,u},runWithContext(c){const h=ns;ns=u;try{return c()}finally{ns=h}}};return u}}let ns=null;function Ed(n,t){if(Fe){let e=Fe.provides;const i=Fe.parent&&Fe.parent.provides;i===e&&(e=Fe.provides=Object.create(i)),e[n]=t}}function Ar(n,t,e=!1){const i=Fe||Je;if(i||ns){const s=ns?ns._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Vt(t)?t.call(i&&i.proxy):t}}const Zu={},Ju=()=>Object.create(Zu),Qu=n=>Object.getPrototypeOf(n)===Zu;function yd(n,t,e,i=!1){const s={},r=Ju();n.propsDefaults=Object.create(null),th(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:Hf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Td(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Qt(s),[l]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=n.vnode.dynamicProps;for(let h=0;h<c.length;h++){let d=c[h];if($r(n.emitsOptions,d))continue;const p=t[d];if(l)if(te(r,d))p!==r[d]&&(r[d]=p,u=!0);else{const v=ei(d);s[v]=na(l,a,v,p,n,!1)}else p!==r[d]&&(r[d]=p,u=!0)}}}else{th(n,t,s,r)&&(u=!0);let c;for(const h in a)(!t||!te(t,h)&&((c=Ci(h))===h||!te(t,c)))&&(l?e&&(e[h]!==void 0||e[c]!==void 0)&&(s[h]=na(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!te(t,h))&&(delete r[h],u=!0)}u&&Dn(n.attrs,"set","")}function th(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Rs(l))continue;const u=t[l];let c;s&&te(s,c=ei(l))?!r||!r.includes(c)?e[c]=u:(a||(a={}))[c]=u:$r(n.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(r){const l=Qt(e),u=a||se;for(let c=0;c<r.length;c++){const h=r[c];e[h]=na(s,l,h,u[h],n,!te(u,h))}}return o}function na(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Vt(l)){const{propsDefaults:u}=s;if(e in u)i=u[e];else{const c=js(s);i=u[e]=l.call(null,t),c()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ci(e))&&(i=!0))}return i}const bd=new WeakMap;function eh(n,t,e=!1){const i=e?bd:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Vt(n)){const c=h=>{l=!0;const[d,p]=eh(h,t,!0);Ce(o,d),p&&a.push(...p)};!e&&t.mixins.length&&t.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}if(!r&&!l)return de(n)&&i.set(n,Qi),Qi;if(zt(r))for(let c=0;c<r.length;c++){const h=ei(r[c]);Vl(h)&&(o[h]=se)}else if(r)for(const c in r){const h=ei(c);if(Vl(h)){const d=r[c],p=o[h]=zt(d)||Vt(d)?{type:d}:Ce({},d),v=p.type;let y=!1,m=!0;if(zt(v))for(let f=0;f<v.length;++f){const w=v[f],b=Vt(w)&&w.name;if(b==="Boolean"){y=!0;break}else b==="String"&&(m=!1)}else y=Vt(v)&&v.name==="Boolean";p[0]=y,p[1]=m,(y||te(p,"default"))&&a.push(h)}}const u=[o,a];return de(n)&&i.set(n,u),u}function Vl(n){return n[0]!=="$"&&!Rs(n)}const nh=n=>n[0]==="_"||n==="$stable",ll=n=>zt(n)?n.map(dn):[dn(n)],Ad=(n,t,e)=>{if(t._n)return t;const i=td((...s)=>ll(t(...s)),e);return i._c=!1,i},ih=(n,t,e)=>{const i=n._ctx;for(const s in n){if(nh(s))continue;const r=n[s];if(Vt(r))t[s]=Ad(s,r,i);else if(r!=null){const o=ll(r);t[s]=()=>o}}},sh=(n,t)=>{const e=ll(t);n.slots.default=()=>e},rh=(n,t,e)=>{for(const i in t)(e||i!=="_")&&(n[i]=t[i])},wd=(n,t,e)=>{const i=n.slots=Ju();if(n.vnode.shapeFlag&32){const s=t._;s?(rh(i,t,e),e&&_u(i,"_",s,!0)):ih(t,i)}else t&&sh(n,t)},Rd=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=se;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:rh(s,t,e):(r=!t.$stable,ih(t,s)),o=t}else t&&(sh(n,t),o={default:1});if(r)for(const a in s)!nh(a)&&o[a]==null&&delete s[a]},We=Gd;function Cd(n){return Pd(n)}function Pd(n,t){const e=qr();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:d,setScopeId:p=_n,insertStaticContent:v}=n,y=(A,P,S,st=null,q=null,$=null,Z=void 0,rt=null,j=!!P.dynamicChildren)=>{if(A===P)return;A&&!Ms(A,P)&&(st=pt(A),Pt(A,q,$,!0),A=null),P.patchFlag===-2&&(j=!1,P.dynamicChildren=null);const{type:g,ref:_,shapeFlag:R}=P;switch(g){case Zr:m(A,P,S,st);break;case Hs:f(A,P,S,st);break;case ho:A==null&&w(P,S,st,Z);break;case Pn:k(A,P,S,st,q,$,Z,rt,j);break;default:R&1?U(A,P,S,st,q,$,Z,rt,j):R&6?H(A,P,S,st,q,$,Z,rt,j):(R&64||R&128)&&g.process(A,P,S,st,q,$,Z,rt,j,Ot)}_!=null&&q&&zr(_,A&&A.ref,$,P||A,!P)},m=(A,P,S,st)=>{if(A==null)i(P.el=a(P.children),S,st);else{const q=P.el=A.el;P.children!==A.children&&u(q,P.children)}},f=(A,P,S,st)=>{A==null?i(P.el=l(P.children||""),S,st):P.el=A.el},w=(A,P,S,st)=>{[A.el,A.anchor]=v(A.children,P,S,st,A.el,A.anchor)},b=({el:A,anchor:P},S,st)=>{let q;for(;A&&A!==P;)q=d(A),i(A,S,st),A=q;i(P,S,st)},E=({el:A,anchor:P})=>{let S;for(;A&&A!==P;)S=d(A),s(A),A=S;s(P)},U=(A,P,S,st,q,$,Z,rt,j)=>{P.type==="svg"?Z="svg":P.type==="math"&&(Z="mathml"),A==null?D(P,S,st,q,$,Z,rt,j):T(A,P,q,$,Z,rt,j)},D=(A,P,S,st,q,$,Z,rt)=>{let j,g;const{props:_,shapeFlag:R,transition:B,dirs:W}=A;if(j=A.el=o(A.type,$,_&&_.is,_),R&8?c(j,A.children):R&16&&I(A.children,j,null,st,q,uo(A,$),Z,rt),W&&ui(A,null,st,"created"),C(j,A,A.scopeId,Z,st),_){for(const ut in _)ut!=="value"&&!Rs(ut)&&r(j,ut,null,_[ut],$,st);"value"in _&&r(j,"value",null,_.value,$),(g=_.onVnodeBeforeMount)&&hn(g,st,A)}W&&ui(A,null,st,"beforeMount");const G=Dd(q,B);G&&B.beforeEnter(j),i(j,P,S),((g=_&&_.onVnodeMounted)||G||W)&&We(()=>{g&&hn(g,st,A),G&&B.enter(j),W&&ui(A,null,st,"mounted")},q)},C=(A,P,S,st,q)=>{if(S&&p(A,S),st)for(let $=0;$<st.length;$++)p(A,st[$]);if(q){let $=q.subTree;if(P===$||hh($.type)&&($.ssContent===P||$.ssFallback===P)){const Z=q.vnode;C(A,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},I=(A,P,S,st,q,$,Z,rt,j=0)=>{for(let g=j;g<A.length;g++){const _=A[g]=rt?Yn(A[g]):dn(A[g]);y(null,_,P,S,st,q,$,Z,rt)}},T=(A,P,S,st,q,$,Z)=>{const rt=P.el=A.el;let{patchFlag:j,dynamicChildren:g,dirs:_}=P;j|=A.patchFlag&16;const R=A.props||se,B=P.props||se;let W;if(S&&hi(S,!1),(W=B.onVnodeBeforeUpdate)&&hn(W,S,P,A),_&&ui(P,A,S,"beforeUpdate"),S&&hi(S,!0),(R.innerHTML&&B.innerHTML==null||R.textContent&&B.textContent==null)&&c(rt,""),g?M(A.dynamicChildren,g,rt,S,st,uo(P,q),$):Z||V(A,P,rt,null,S,st,uo(P,q),$,!1),j>0){if(j&16)L(rt,R,B,S,q);else if(j&2&&R.class!==B.class&&r(rt,"class",null,B.class,q),j&4&&r(rt,"style",R.style,B.style,q),j&8){const G=P.dynamicProps;for(let ut=0;ut<G.length;ut++){const ot=G[ut],ft=R[ot],Dt=B[ot];(Dt!==ft||ot==="value")&&r(rt,ot,ft,Dt,q,S)}}j&1&&A.children!==P.children&&c(rt,P.children)}else!Z&&g==null&&L(rt,R,B,S,q);((W=B.onVnodeUpdated)||_)&&We(()=>{W&&hn(W,S,P,A),_&&ui(P,A,S,"updated")},st)},M=(A,P,S,st,q,$,Z)=>{for(let rt=0;rt<P.length;rt++){const j=A[rt],g=P[rt],_=j.el&&(j.type===Pn||!Ms(j,g)||j.shapeFlag&70)?h(j.el):S;y(j,g,_,null,st,q,$,Z,!0)}},L=(A,P,S,st,q)=>{if(P!==S){if(P!==se)for(const $ in P)!Rs($)&&!($ in S)&&r(A,$,P[$],null,q,st);for(const $ in S){if(Rs($))continue;const Z=S[$],rt=P[$];Z!==rt&&$!=="value"&&r(A,$,rt,Z,q,st)}"value"in S&&r(A,"value",P.value,S.value,q)}},k=(A,P,S,st,q,$,Z,rt,j)=>{const g=P.el=A?A.el:a(""),_=P.anchor=A?A.anchor:a("");let{patchFlag:R,dynamicChildren:B,slotScopeIds:W}=P;W&&(rt=rt?rt.concat(W):W),A==null?(i(g,S,st),i(_,S,st),I(P.children||[],S,_,q,$,Z,rt,j)):R>0&&R&64&&B&&A.dynamicChildren?(M(A.dynamicChildren,B,S,q,$,Z,rt),(P.key!=null||q&&P===q.subTree)&&oh(A,P,!0)):V(A,P,S,_,q,$,Z,rt,j)},H=(A,P,S,st,q,$,Z,rt,j)=>{P.slotScopeIds=rt,A==null?P.shapeFlag&512?q.ctx.activate(P,S,st,Z,j):tt(P,S,st,q,$,Z,j):Q(A,P,j)},tt=(A,P,S,st,q,$,Z)=>{const rt=A.component=Jd(A,st,q);if(ku(A)&&(rt.ctx.renderer=Ot),Qd(rt,!1,Z),rt.asyncDep){if(q&&q.registerDep(rt,K,Z),!A.el){const j=rt.subTree=Zn(Hs);f(null,j,P,S)}}else K(rt,A,P,S,q,$,Z)},Q=(A,P,S)=>{const st=P.component=A.component;if(Hd(A,P,S))if(st.asyncDep&&!st.asyncResolved){et(st,P,S);return}else st.next=P,st.update();else P.el=A.el,st.vnode=P},K=(A,P,S,st,q,$,Z)=>{const rt=()=>{if(A.isMounted){let{next:R,bu:B,u:W,parent:G,vnode:ut}=A;{const _t=ah(A);if(_t){R&&(R.el=ut.el,et(A,R,Z)),_t.asyncDep.then(()=>{A.isUnmounted||rt()});return}}let ot=R,ft;hi(A,!1),R?(R.el=ut.el,et(A,R,Z)):R=ut,B&&br(B),(ft=R.props&&R.props.onVnodeBeforeUpdate)&&hn(ft,G,R,ut),hi(A,!0);const Dt=kl(A),at=A.subTree;A.subTree=Dt,y(at,Dt,h(at.el),pt(at),A,q,$),R.el=Dt.el,ot===null&&Vd(A,Dt.el),W&&We(W,q),(ft=R.props&&R.props.onVnodeUpdated)&&We(()=>hn(ft,G,R,ut),q)}else{let R;const{el:B,props:W}=P,{bm:G,m:ut,parent:ot,root:ft,type:Dt}=A,at=Ls(P);hi(A,!1),G&&br(G),!at&&(R=W&&W.onVnodeBeforeMount)&&hn(R,ot,P),hi(A,!0);{ft.ce&&ft.ce._injectChildStyle(Dt);const _t=A.subTree=kl(A);y(null,_t,S,st,A,q,$),P.el=_t.el}if(ut&&We(ut,q),!at&&(R=W&&W.onVnodeMounted)){const _t=P;We(()=>hn(R,ot,_t),q)}(P.shapeFlag&256||ot&&Ls(ot.vnode)&&ot.vnode.shapeFlag&256)&&A.a&&We(A.a,q),A.isMounted=!0,P=S=st=null}};A.scope.on();const j=A.effect=new Mu(rt);A.scope.off();const g=A.update=j.run.bind(j),_=A.job=j.runIfDirty.bind(j);_.i=A,_.id=A.uid,j.scheduler=()=>ol(_),hi(A,!0),g()},et=(A,P,S)=>{P.component=A;const st=A.vnode.props;A.vnode=P,A.next=null,Td(A,P.props,st,S),Rd(A,P.children,S),ri(),Nl(A),oi()},V=(A,P,S,st,q,$,Z,rt,j=!1)=>{const g=A&&A.children,_=A?A.shapeFlag:0,R=P.children,{patchFlag:B,shapeFlag:W}=P;if(B>0){if(B&128){Mt(g,R,S,st,q,$,Z,rt,j);return}else if(B&256){ht(g,R,S,st,q,$,Z,rt,j);return}}W&8?(_&16&&yt(g,q,$),R!==g&&c(S,R)):_&16?W&16?Mt(g,R,S,st,q,$,Z,rt,j):yt(g,q,$,!0):(_&8&&c(S,""),W&16&&I(R,S,st,q,$,Z,rt,j))},ht=(A,P,S,st,q,$,Z,rt,j)=>{A=A||Qi,P=P||Qi;const g=A.length,_=P.length,R=Math.min(g,_);let B;for(B=0;B<R;B++){const W=P[B]=j?Yn(P[B]):dn(P[B]);y(A[B],W,S,null,q,$,Z,rt,j)}g>_?yt(A,q,$,!0,!1,R):I(P,S,st,q,$,Z,rt,j,R)},Mt=(A,P,S,st,q,$,Z,rt,j)=>{let g=0;const _=P.length;let R=A.length-1,B=_-1;for(;g<=R&&g<=B;){const W=A[g],G=P[g]=j?Yn(P[g]):dn(P[g]);if(Ms(W,G))y(W,G,S,null,q,$,Z,rt,j);else break;g++}for(;g<=R&&g<=B;){const W=A[R],G=P[B]=j?Yn(P[B]):dn(P[B]);if(Ms(W,G))y(W,G,S,null,q,$,Z,rt,j);else break;R--,B--}if(g>R){if(g<=B){const W=B+1,G=W<_?P[W].el:st;for(;g<=B;)y(null,P[g]=j?Yn(P[g]):dn(P[g]),S,G,q,$,Z,rt,j),g++}}else if(g>B)for(;g<=R;)Pt(A[g],q,$,!0),g++;else{const W=g,G=g,ut=new Map;for(g=G;g<=B;g++){const dt=P[g]=j?Yn(P[g]):dn(P[g]);dt.key!=null&&ut.set(dt.key,g)}let ot,ft=0;const Dt=B-G+1;let at=!1,_t=0;const At=new Array(Dt);for(g=0;g<Dt;g++)At[g]=0;for(g=W;g<=R;g++){const dt=A[g];if(ft>=Dt){Pt(dt,q,$,!0);continue}let It;if(dt.key!=null)It=ut.get(dt.key);else for(ot=G;ot<=B;ot++)if(At[ot-G]===0&&Ms(dt,P[ot])){It=ot;break}It===void 0?Pt(dt,q,$,!0):(At[It-G]=g+1,It>=_t?_t=It:at=!0,y(dt,P[It],S,null,q,$,Z,rt,j),ft++)}const Lt=at?Ld(At):Qi;for(ot=Lt.length-1,g=Dt-1;g>=0;g--){const dt=G+g,It=P[dt],Bt=dt+1<_?P[dt+1].el:st;At[g]===0?y(null,It,S,Bt,q,$,Z,rt,j):at&&(ot<0||g!==Lt[ot]?Tt(It,S,Bt,2):ot--)}}},Tt=(A,P,S,st,q=null)=>{const{el:$,type:Z,transition:rt,children:j,shapeFlag:g}=A;if(g&6){Tt(A.component.subTree,P,S,st);return}if(g&128){A.suspense.move(P,S,st);return}if(g&64){Z.move(A,P,S,Ot);return}if(Z===Pn){i($,P,S);for(let R=0;R<j.length;R++)Tt(j[R],P,S,st);i(A.anchor,P,S);return}if(Z===ho){b(A,P,S);return}if(st!==2&&g&1&&rt)if(st===0)rt.beforeEnter($),i($,P,S),We(()=>rt.enter($),q);else{const{leave:R,delayLeave:B,afterLeave:W}=rt,G=()=>i($,P,S),ut=()=>{R($,()=>{G(),W&&W()})};B?B($,G,ut):ut()}else i($,P,S)},Pt=(A,P,S,st=!1,q=!1)=>{const{type:$,props:Z,ref:rt,children:j,dynamicChildren:g,shapeFlag:_,patchFlag:R,dirs:B,cacheIndex:W}=A;if(R===-2&&(q=!1),rt!=null&&zr(rt,null,S,A,!0),W!=null&&(P.renderCache[W]=void 0),_&256){P.ctx.deactivate(A);return}const G=_&1&&B,ut=!Ls(A);let ot;if(ut&&(ot=Z&&Z.onVnodeBeforeUnmount)&&hn(ot,P,A),_&6)ct(A.component,S,st);else{if(_&128){A.suspense.unmount(S,st);return}G&&ui(A,null,P,"beforeUnmount"),_&64?A.type.remove(A,P,S,Ot,st):g&&!g.hasOnce&&($!==Pn||R>0&&R&64)?yt(g,P,S,!1,!0):($===Pn&&R&384||!q&&_&16)&&yt(j,P,S),st&&$t(A)}(ut&&(ot=Z&&Z.onVnodeUnmounted)||G)&&We(()=>{ot&&hn(ot,P,A),G&&ui(A,null,P,"unmounted")},S)},$t=A=>{const{type:P,el:S,anchor:st,transition:q}=A;if(P===Pn){nt(S,st);return}if(P===ho){E(A);return}const $=()=>{s(S),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:rt}=q,j=()=>Z(S,$);rt?rt(A.el,$,j):j()}else $()},nt=(A,P)=>{let S;for(;A!==P;)S=d(A),s(A),A=S;s(P)},ct=(A,P,S)=>{const{bum:st,scope:q,job:$,subTree:Z,um:rt,m:j,a:g}=A;Gl(j),Gl(g),st&&br(st),q.stop(),$&&($.flags|=8,Pt(Z,A,P,S)),rt&&We(rt,P),We(()=>{A.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},yt=(A,P,S,st=!1,q=!1,$=0)=>{for(let Z=$;Z<A.length;Z++)Pt(A[Z],P,S,st,q)},pt=A=>{if(A.shapeFlag&6)return pt(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const P=d(A.anchor||A.el),S=P&&P[ed];return S?d(S):P};let Rt=!1;const Ut=(A,P,S)=>{A==null?P._vnode&&Pt(P._vnode,null,null,!0):y(P._vnode||null,A,P,null,null,null,S),P._vnode=A,Rt||(Rt=!0,Nl(),Bu(),Rt=!1)},Ot={p:y,um:Pt,m:Tt,r:$t,mt:tt,mc:I,pc:V,pbc:M,n:pt,o:n};return{render:Ut,hydrate:void 0,createApp:Sd(Ut)}}function uo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function hi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function Dd(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function oh(n,t,e=!1){const i=n.children,s=t.children;if(zt(i)&&zt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Yn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&oh(o,a)),a.type===Zr&&(a.el=o.el)}}function Ld(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const u=n[i];if(u!==0){if(s=e[e.length-1],n[s]<u){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<u?r=a+1:o=a;u<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function ah(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:ah(t)}function Gl(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}const Ud=Symbol.for("v-scx"),Id=()=>Ar(Ud);function wr(n,t,e){return lh(n,t,e)}function lh(n,t,e=se){const{immediate:i,deep:s,flush:r,once:o}=e,a=Ce({},e),l=t&&i||!t&&r!=="post";let u;if(Gs){if(r==="sync"){const p=Id();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=_n,p.resume=_n,p.pause=_n,p}}const c=Fe;a.call=(p,v,y)=>xn(p,c,v,y);let h=!1;r==="post"?a.scheduler=p=>{We(p,c&&c.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,v)=>{v?p():ol(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const d=Kf(n,t,a);return Gs&&(u?u.push(d):l&&d()),d}function Nd(n,t,e){const i=this.proxy,s=ge(n)?n.includes(".")?ch(i,n):()=>i[n]:n.bind(i,i);let r;Vt(t)?r=t:(r=t.handler,e=t);const o=js(this),a=lh(s,r.bind(i),e);return o(),a}function ch(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Fd=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ei(t)}Modifiers`]||n[`${Ci(t)}Modifiers`];function Od(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||se;let s=e;const r=t.startsWith("update:"),o=r&&Fd(i,t.slice(7));o&&(o.trim&&(s=e.map(c=>ge(c)?c.trim():c)),o.number&&(s=e.map(Yo)));let a,l=i[a=io(t)]||i[a=io(ei(t))];!l&&r&&(l=i[a=io(Ci(t))]),l&&xn(l,n,6,s);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,xn(u,n,6,s)}}function uh(n,t,e=!1){const i=t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Vt(n)){const l=u=>{const c=uh(u,t,!0);c&&(a=!0,Ce(o,c))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(de(n)&&i.set(n,null),null):(zt(r)?r.forEach(l=>o[l]=null):Ce(o,r),de(n)&&i.set(n,o),o)}function $r(n,t){return!n||!Wr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(n,t[0].toLowerCase()+t.slice(1))||te(n,Ci(t))||te(n,t))}function kl(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:d,setupState:p,ctx:v,inheritAttrs:y}=n,m=Br(n);let f,w;try{if(e.shapeFlag&4){const E=s||i,U=E;f=dn(u.call(U,E,c,h,p,d,v)),w=a}else{const E=t;f=dn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),w=t.props?a:Bd(a)}}catch(E){Is.length=0,jr(E,n,1),f=Zn(Hs)}let b=f;if(w&&y!==!1){const E=Object.keys(w),{shapeFlag:U}=b;E.length&&U&7&&(r&&E.some(Ya)&&(w=zd(w,r)),b=as(b,w,!1,!0))}return e.dirs&&(b=as(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(e.dirs):e.dirs),e.transition&&al(b,e.transition),f=b,Br(m),f}const Bd=n=>{let t;for(const e in n)(e==="class"||e==="style"||Wr(e))&&((t||(t={}))[e]=n[e]);return t},zd=(n,t)=>{const e={};for(const i in n)(!Ya(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function Hd(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,u=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Wl(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const d=c[h];if(o[d]!==i[d]&&!$r(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Wl(i,o,u):!0:!!o;return!1}function Wl(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(t[r]!==n[r]&&!$r(e,r))return!0}return!1}function Vd({vnode:n,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=t.vnode).el=e,t=t.parent;else break}}const hh=n=>n.__isSuspense;function Gd(n,t){t&&t.pendingBranch?zt(n)?t.effects.push(...n):t.effects.push(n):Qf(n)}const Pn=Symbol.for("v-fgt"),Zr=Symbol.for("v-txt"),Hs=Symbol.for("v-cmt"),ho=Symbol.for("v-stc"),Is=[];let Ye=null;function fh(n=!1){Is.push(Ye=n?null:[])}function kd(){Is.pop(),Ye=Is[Is.length-1]||null}let Vs=1;function Xl(n,t=!1){Vs+=n,n<0&&Ye&&t&&(Ye.hasOnce=!0)}function dh(n){return n.dynamicChildren=Vs>0?Ye||Qi:null,kd(),Vs>0&&Ye&&Ye.push(n),n}function Wd(n,t,e,i,s,r){return dh(rn(n,t,e,i,s,r,!0))}function Xd(n,t,e,i,s){return dh(Zn(n,t,e,i,s,!0))}function ph(n){return n?n.__v_isVNode===!0:!1}function Ms(n,t){return n.type===t.type&&n.key===t.key}const mh=({key:n})=>n??null,Rr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?ge(n)||we(n)||Vt(n)?{i:Je,r:n,k:t,f:!!e}:n:null);function rn(n,t=null,e=null,i=0,s=null,r=n===Pn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&mh(t),ref:t&&Rr(t),scopeId:Hu,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Je};return a?(cl(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=ge(e)?8:16),Vs>0&&!o&&Ye&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ye.push(l),l}const Zn=Yd;function Yd(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===dd)&&(n=Hs),ph(n)){const a=as(n,t,!0);return e&&cl(a,e),Vs>0&&!r&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(n)]=a:Ye.push(a)),a.patchFlag=-2,a}if(ip(n)&&(n=n.__vccOpts),t){t=qd(t);let{class:a,style:l}=t;a&&!ge(a)&&(t.class=$a(a)),de(l)&&(rl(l)&&!zt(l)&&(l=Ce({},l)),t.style=Ka(l))}const o=ge(n)?1:hh(n)?128:nd(n)?64:de(n)?4:Vt(n)?2:0;return rn(n,t,e,i,s,o,r,!0)}function qd(n){return n?rl(n)||Qu(n)?Ce({},n):n:null}function as(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,u=t?Kd(s||{},t):s,c={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&mh(u),ref:t&&t.ref?e&&r?zt(r)?r.concat(Rr(t)):[r,Rr(t)]:Rr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==Pn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&as(n.ssContent),ssFallback:n.ssFallback&&as(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&al(c,l.clone(c)),c}function jd(n=" ",t=0){return Zn(Zr,null,n,t)}function dn(n){return n==null||typeof n=="boolean"?Zn(Hs):zt(n)?Zn(Pn,null,n.slice()):ph(n)?Yn(n):Zn(Zr,null,String(n))}function Yn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:as(n)}function cl(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(zt(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),cl(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Qu(t)?t._ctx=Je:s===3&&Je&&(Je.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else Vt(t)?(t={default:t,_ctx:Je},e=32):(t=String(t),i&64?(e=16,t=[jd(t)]):e=8);n.children=t,n.shapeFlag|=e}function Kd(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=$a([t.class,i.class]));else if(s==="style")t.style=Ka([t.style,i.style]);else if(Wr(s)){const r=t[s],o=i[s];o&&r!==o&&!(zt(r)&&r.includes(o))&&(t[s]=r?[].concat(r,o):o)}else s!==""&&(t[s]=i[s])}return t}function hn(n,t,e,i=null){xn(n,t,7,[e,i])}const $d=$u();let Zd=0;function Jd(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||$d,r={uid:Zd++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:eh(i,s),emitsOptions:uh(i,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:i.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Od.bind(null,r),n.ce&&n.ce(r),r}let Fe=null,Vr,ia;{const n=qr(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Vr=t("__VUE_INSTANCE_SETTERS__",e=>Fe=e),ia=t("__VUE_SSR_SETTERS__",e=>Gs=e)}const js=n=>{const t=Fe;return Vr(n),n.scope.on(),()=>{n.scope.off(),Vr(t)}},Yl=()=>{Fe&&Fe.scope.off(),Vr(null)};function _h(n){return n.vnode.shapeFlag&4}let Gs=!1;function Qd(n,t=!1,e=!1){t&&ia(t);const{props:i,children:s}=n.vnode,r=_h(n);yd(n,i,r,t),wd(n,s,e);const o=r?tp(n,t):void 0;return t&&ia(!1),o}function tp(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,pd);const{setup:i}=e;if(i){ri();const s=n.setupContext=i.length>1?np(n):null,r=js(n),o=qs(i,n,0,[n.props,s]),a=fu(o);if(oi(),r(),(a||n.sp)&&!Ls(n)&&Gu(n),a){if(o.then(Yl,Yl),t)return o.then(l=>{ql(n,l)}).catch(l=>{jr(l,n,0)});n.asyncDep=o}else ql(n,o)}else gh(n)}function ql(n,t,e){Vt(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:de(t)&&(n.setupState=Nu(t)),gh(n)}function gh(n,t,e){const i=n.type;n.render||(n.render=i.render||_n);{const s=js(n);ri();try{md(n)}finally{oi(),s()}}}const ep={get(n,t){return Ae(n,"get",""),n[t]}};function np(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,ep),slots:n.slots,emit:n.emit,expose:t}}function Jr(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Nu(Vf(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Us)return Us[e](n)},has(t,e){return e in t||e in Us}})):n.proxy}function ip(n){return Vt(n)&&"__vccOpts"in n}const sp=(n,t)=>qf(n,t,Gs),rp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let sa;const jl=typeof window<"u"&&window.trustedTypes;if(jl)try{sa=jl.createPolicy("vue",{createHTML:n=>n})}catch{}const vh=sa?n=>sa.createHTML(n):n=>n,op="http://www.w3.org/2000/svg",ap="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,Kl=Cn&&Cn.createElement("template"),lp={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Cn.createElementNS(op,n):t==="mathml"?Cn.createElementNS(ap,n):e?Cn.createElement(n,{is:e}):Cn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Cn.createTextNode(n),createComment:n=>Cn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Cn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Kl.innerHTML=vh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Kl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},cp=Symbol("_vtc");function up(n,t,e){const i=n[cp];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const $l=Symbol("_vod"),hp=Symbol("_vsh"),fp=Symbol(""),dp=/(^|;)\s*display\s*:/;function pp(n,t,e){const i=n.style,s=ge(e);let r=!1;if(e&&!s){if(t)if(ge(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Cr(i,a,"")}else for(const o in t)e[o]==null&&Cr(i,o,"");for(const o in e)o==="display"&&(r=!0),Cr(i,o,e[o])}else if(s){if(t!==e){const o=i[fp];o&&(e+=";"+o),i.cssText=e,r=dp.test(e)}}else t&&n.removeAttribute("style");$l in n&&(n[$l]=r?i.display:"",n[hp]&&(i.display="none"))}const Zl=/\s*!important$/;function Cr(n,t,e){if(zt(e))e.forEach(i=>Cr(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const i=mp(n,t);Zl.test(e)?n.setProperty(Ci(i),e.replace(Zl,""),"important"):n[i]=e}}const Jl=["Webkit","Moz","ms"],fo={};function mp(n,t){const e=fo[t];if(e)return e;let i=ei(t);if(i!=="filter"&&i in n)return fo[t]=i;i=mu(i);for(let s=0;s<Jl.length;s++){const r=Jl[s]+i;if(r in n)return fo[t]=r}return t}const Ql="http://www.w3.org/1999/xlink";function tc(n,t,e,i,s,r=xf(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(Ql,t.slice(6,t.length)):n.setAttributeNS(Ql,t,e):e==null||r&&!gu(e)?n.removeAttribute(t):n.setAttribute(t,r?"":si(e)?String(e):e)}function ec(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?vh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=gu(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function ji(n,t,e,i){n.addEventListener(t,e,i)}function _p(n,t,e,i){n.removeEventListener(t,e,i)}const nc=Symbol("_vei");function gp(n,t,e,i,s=null){const r=n[nc]||(n[nc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=vp(t);if(i){const u=r[t]=Sp(i,s);ji(n,a,u,l)}else o&&(_p(n,a,o,l),r[t]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function vp(n){let t;if(ic.test(n)){t={};let i;for(;i=n.match(ic);)n=n.slice(0,n.length-i[0].length),t[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ci(n.slice(2)),t]}let po=0;const xp=Promise.resolve(),Mp=()=>po||(xp.then(()=>po=0),po=Date.now());function Sp(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;xn(Ep(i,e.value),t,5,[i])};return e.value=n,e.attached=Mp(),e}function Ep(n,t){if(zt(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const sc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,yp=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?up(n,i,o):t==="style"?pp(n,e,i):Wr(t)?Ya(t)||gp(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tp(n,t,i,o))?(ec(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tc(n,t,i,o,r,t!=="value")):n._isVueCE&&(/[A-Z]/.test(t)||!ge(i))?ec(n,ei(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),tc(n,t,i,o))};function Tp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&sc(t)&&Vt(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sc(t)&&ge(e)?!1:t in n}const rc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return zt(t)?e=>br(t,e):t};function bp(n){n.target.composing=!0}function oc(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const mo=Symbol("_assign"),ac={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n[mo]=rc(s);const r=i||s.props&&s.props.type==="number";ji(n,t?"change":"input",o=>{if(o.target.composing)return;let a=n.value;e&&(a=a.trim()),r&&(a=Yo(a)),n[mo](a)}),e&&ji(n,"change",()=>{n.value=n.value.trim()}),t||(ji(n,"compositionstart",bp),ji(n,"compositionend",oc),ji(n,"change",oc))},mounted(n,{value:t}){n.value=t??""},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[mo]=rc(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Yo(n.value):n.value,l=t??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l))}},Ap=Ce({patchProp:yp},lp);let lc;function wp(){return lc||(lc=Cd(Ap))}const Rp=(...n)=>{const t=wp().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=Pp(i);if(!s)return;const r=t._component;!Vt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,Cp(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Cp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Pp(n){return ge(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ul="171",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dp=0,cc=1,Lp=2,xh=1,Mh=2,Rn=3,ni=0,He=1,Un=2,Jn=0,ss=1,uc=2,hc=3,fc=4,Up=5,Si=100,Ip=101,Np=102,Fp=103,Op=104,Bp=200,zp=201,Hp=202,Vp=203,ra=204,oa=205,Gp=206,kp=207,Wp=208,Xp=209,Yp=210,qp=211,jp=212,Kp=213,$p=214,aa=0,la=1,ca=2,ls=3,ua=4,ha=5,fa=6,da=7,hl=0,Zp=1,Jp=2,Qn=0,Qp=1,tm=2,em=3,nm=4,im=5,sm=6,rm=7,Sh=300,cs=301,us=302,pa=303,ma=304,Qr=306,_a=1e3,yi=1001,ga=1002,un=1003,om=1004,ir=1005,mn=1006,_o=1007,Kn=1008,On=1009,Eh=1010,yh=1011,ks=1012,fl=1013,Ai=1014,In=1015,Ks=1016,dl=1017,pl=1018,hs=1020,Th=35902,bh=1021,Ah=1022,an=1023,wh=1024,Rh=1025,rs=1026,fs=1027,Ch=1028,ml=1029,Ph=1030,_l=1031,gl=1033,Pr=33776,Dr=33777,Lr=33778,Ur=33779,va=35840,xa=35841,Ma=35842,Sa=35843,Ea=36196,ya=37492,Ta=37496,ba=37808,Aa=37809,wa=37810,Ra=37811,Ca=37812,Pa=37813,Da=37814,La=37815,Ua=37816,Ia=37817,Na=37818,Fa=37819,Oa=37820,Ba=37821,Ir=36492,za=36494,Ha=36495,Dh=36283,Va=36284,Ga=36285,ka=36286,am=3200,lm=3201,Lh=0,cm=1,jn="",$e="srgb",ds="srgb-linear",Gr="linear",ne="srgb",Ui=7680,dc=519,um=512,hm=513,fm=514,Uh=515,dm=516,pm=517,mm=518,_m=519,pc=35044,mc="300 es",Nn=2e3,kr=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const Ns=Math.PI/180,Ws=180/Math.PI;function _s(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function Xt(n,t,e){return Math.max(t,Math.min(e,n))}function vl(n,t){return(n%t+t)%t}function gm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vm(n,t,e){return n!==t?(e-n)/(t-n):0}function Fs(n,t,e){return(1-e)*n+e*t}function xm(n,t,e,i){return Fs(n,t,1-Math.exp(-e*i))}function Mm(n,t=1){return t-Math.abs(vl(n,t*2)-t)}function Sm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Em(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ym(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Tm(n,t){return n+Math.random()*(t-n)}function bm(n){return n*(.5-Math.random())}function Am(n){n!==void 0&&(_c=n);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wm(n){return n*Ns}function Rm(n){return n*Ws}function Cm(n){return(n&n-1)===0&&n!==0}function Pm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Lm(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),u=r((t+i)/2),c=o((t+i)/2),h=r((t-i)/2),d=o((t-i)/2),p=r((i-t)/2),v=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*h,l*d,a*u);break;case"YZY":n.set(l*d,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*d,a*c,a*u);break;case"XZX":n.set(a*c,l*v,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*v,a*u);break;case"ZYZ":n.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Um={DEG2RAD:Ns,RAD2DEG:Ws,generateUUID:_s,clamp:Xt,euclideanModulo:vl,mapLinear:gm,inverseLerp:vm,lerp:Fs,damp:xm,pingpong:Mm,smoothstep:Sm,smootherstep:Em,randInt:ym,randFloat:Tm,randFloatSpread:bm,seededRandom:Am,degToRad:wm,radToDeg:Rm,isPowerOfTwo:Cm,ceilPowerOfTwo:Pm,floorPowerOfTwo:Dm,setQuaternionFromProperEuler:Lm,normalize:Le,denormalize:Ki};class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,o,a,l,u){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u)}set(t,e,i,s,r,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],v=i[8],y=s[0],m=s[3],f=s[6],w=s[1],b=s[4],E=s[7],U=s[2],D=s[5],C=s[8];return r[0]=o*y+a*w+l*U,r[3]=o*m+a*b+l*D,r[6]=o*f+a*E+l*C,r[1]=u*y+c*w+h*U,r[4]=u*m+c*b+h*D,r[7]=u*f+c*E+h*C,r[2]=d*y+p*w+v*U,r[5]=d*m+p*b+v*D,r[8]=d*f+p*E+v*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return e*o*c-e*a*u-i*r*c+i*a*l+s*r*u-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,d=a*l-c*r,p=u*r-o*l,v=e*h+i*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/v;return t[0]=h*y,t[1]=(s*u-c*i)*y,t[2]=(a*i-s*o)*y,t[3]=d*y,t[4]=(c*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(i*l-u*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),u=Math.sin(r);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-s*u,s*l,-s*(-u*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(go.makeScale(t,e)),this}rotate(t){return this.premultiply(go.makeRotation(-t)),this}translate(t,e){return this.premultiply(go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const go=new kt;function Ih(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Im(){const n=Xs("canvas");return n.style.display="block",n}const gc={};function $i(n){n in gc||(gc[n]=!0,console.warn(n))}function Nm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Fm(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Om(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const vc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bm(){const n={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ne&&(s.r=Fn(s.r),s.g=Fn(s.g),s.b=Fn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?Gr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ds]:{primaries:t,whitePoint:i,transfer:Gr,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:t,whitePoint:i,transfer:ne,toXYZ:vc,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}}),n}const Kt=Bm();function Fn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ii;class zm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Xs("canvas")),Ii.width=t.width,Ii.height=t.height;const i=Ii.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Fn(e[i]/255)*255):e[i]=Fn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hm=0;class Nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(vo(s[o].image)):r.push(vo(s[o]))}else r=vo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function vo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vm=0;class Oe extends Pi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,i=yi,s=yi,r=mn,o=Kn,a=an,l=On,u=Oe.DEFAULT_ANISOTROPY,c=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vm++}),this.uuid=_s(),this.name="",this.source=new Nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _a:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _a:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=Sh;Oe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,i=0,s=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],v=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(u+1)/2,E=(p+1)/2,U=(f+1)/2,D=(c+d)/4,C=(h+y)/4,I=(v+m)/4;return b>E&&b>U?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=D/i,r=C/i):E>U?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=D/s,r=I/s):U<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),i=C/r,s=I/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(h-y)/w,this.z=(d-c)/w,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gm extends Pi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Oe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Gm{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Fh extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class km extends Oe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],u=i[s+1],c=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=v,t[e+3]=y;return}if(h!==y||l!==d||u!==p||c!==v){let m=1-a;const f=l*d+u*p+c*v+h*y,w=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const U=Math.sqrt(b),D=Math.atan2(U,f*w);m=Math.sin(m*D)/U,a=Math.sin(a*D)/U}const E=a*w;if(l=l*m+d*E,u=u*m+p*E,c=c*m+v*E,h=h*m+y*E,m===1-a){const U=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=U,u*=U,c*=U,h*=U}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],u=i[s+2],c=i[s+3],h=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return t[e]=a*v+c*h+l*p-u*d,t[e+1]=l*v+c*d+u*h-a*p,t[e+2]=u*v+c*p+a*d-l*h,t[e+3]=c*v-a*h-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"YXZ":this._x=d*c*h+u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"ZXY":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h-d*p*v;break;case"ZYX":this._x=d*c*h-u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h+d*p*v;break;case"YZX":this._x=d*c*h+u*p*v,this._y=u*p*h+d*c*v,this._z=u*c*v-d*p*h,this._w=u*c*h-d*p*v;break;case"XZY":this._x=d*c*h-u*p*v,this._y=u*p*h-d*c*v,this._z=u*c*v+d*p*h,this._w=u*c*h+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],u=e[2],c=e[6],h=e[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(r-u)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-u)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,u=e._z,c=e._w;return this._x=i*c+o*a+s*u-r*l,this._y=s*c+o*l+r*a-i*u,this._z=r*c+o*u+i*l-s*a,this._w=o*c-i*a-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(t=0,e=0,i=0){z.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*s-a*i),c=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*u+o*h-a*c,this.y=i+l*c+a*u-r*h,this.z=s+l*h+r*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xo.copy(this).projectOnVector(t),this.sub(xo)}reflect(t){return this.sub(xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xo=new z,Mc=new Ri;class $s{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ss),rr.subVectors(this.max,Ss),Ni.subVectors(t.a,Ss),Fi.subVectors(t.b,Ss),Oi.subVectors(t.c,Ss),zn.subVectors(Fi,Ni),Hn.subVectors(Oi,Fi),fi.subVectors(Ni,Oi);let e=[0,-zn.z,zn.y,0,-Hn.z,Hn.y,0,-fi.z,fi.y,zn.z,0,-zn.x,Hn.z,0,-Hn.x,fi.z,0,-fi.x,-zn.y,zn.x,0,-Hn.y,Hn.x,0,-fi.y,fi.x,0];return!Mo(e,Ni,Fi,Oi,rr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,Ni,Fi,Oi,rr))?!1:(or.crossVectors(zn,Hn),e=[or.x,or.y,or.z],Mo(e,Ni,Fi,Oi,rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yn=[new z,new z,new z,new z,new z,new z,new z,new z],en=new z,sr=new $s,Ni=new z,Fi=new z,Oi=new z,zn=new z,Hn=new z,fi=new z,Ss=new z,rr=new z,or=new z,di=new z;function Mo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){di.fromArray(n,r);const a=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),l=t.dot(di),u=e.dot(di),c=i.dot(di);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Wm=new $s,Es=new z,So=new z;class xl{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Wm.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Es,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(So)),this.expandByPoint(Es.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new z,Eo=new z,ar=new z,Vn=new z,yo=new z,lr=new z,To=new z;class Oh{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Eo.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ar),a=Vn.dot(this.direction),l=-Vn.dot(ar),u=Vn.lengthSq(),c=Math.abs(1-o*o);let h,d,p,v;if(c>0)if(h=o*l-a,d=o*a-l,v=r*c,h>=0)if(d>=-v)if(d<=v){const y=1/c;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+u):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+u);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Eo).addScaledVector(ar,d),p}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);const i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,s=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,s=(t.min.x-d.x)*u),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,r){yo.subVectors(e,t),lr.subVectors(i,t),To.crossVectors(yo,lr);let o=this.direction.dot(To),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const l=a*this.direction.dot(lr.crossVectors(Vn,lr));if(l<0)return null;const u=a*this.direction.dot(yo.cross(Vn));if(u<0||l+u>o)return null;const c=-a*Vn.dot(To);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,i,s,r,o,a,l,u,c,h,d,p,v,y,m){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,u,c,h,d,p,v,y,m)}set(t,e,i,s,r,o,a,l,u,c,h,d,p,v,y,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=v,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Bi.setFromMatrixColumn(t,0).length(),r=1/Bi.setFromMatrixColumn(t,1).length(),o=1/Bi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),u=Math.sin(s),c=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*c,p=o*h,v=a*c,y=a*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=p+v*u,e[5]=d-y*u,e[9]=-a*l,e[2]=y-d*u,e[6]=v+p*u,e[10]=o*l}else if(t.order==="YXZ"){const d=l*c,p=l*h,v=u*c,y=u*h;e[0]=d+y*a,e[4]=v*a-p,e[8]=o*u,e[1]=o*h,e[5]=o*c,e[9]=-a,e[2]=p*a-v,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*c,p=l*h,v=u*c,y=u*h;e[0]=d-y*a,e[4]=-o*h,e[8]=v+p*a,e[1]=p+v*a,e[5]=o*c,e[9]=y-d*a,e[2]=-o*u,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*c,p=o*h,v=a*c,y=a*h;e[0]=l*c,e[4]=v*u-p,e[8]=d*u+y,e[1]=l*h,e[5]=y*u+d,e[9]=p*u-v,e[2]=-u,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*u,v=a*l,y=a*u;e[0]=l*c,e[4]=y-d*h,e[8]=v*h+p,e[1]=h,e[5]=o*c,e[9]=-a*c,e[2]=-u*c,e[6]=p*h+v,e[10]=d-y*h}else if(t.order==="XZY"){const d=o*l,p=o*u,v=a*l,y=a*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=d*h+y,e[5]=o*c,e[9]=p*h-v,e[2]=v*h-p,e[6]=a*c,e[10]=y*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xm,t,Ym)}lookAt(t,e,i){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Gn.crossVectors(i,Ge),Gn.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Gn.crossVectors(i,Ge)),Gn.normalize(),cr.crossVectors(Ge,Gn),s[0]=Gn.x,s[4]=cr.x,s[8]=Ge.x,s[1]=Gn.y,s[5]=cr.y,s[9]=Ge.y,s[2]=Gn.z,s[6]=cr.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],v=i[2],y=i[6],m=i[10],f=i[14],w=i[3],b=i[7],E=i[11],U=i[15],D=s[0],C=s[4],I=s[8],T=s[12],M=s[1],L=s[5],k=s[9],H=s[13],tt=s[2],Q=s[6],K=s[10],et=s[14],V=s[3],ht=s[7],Mt=s[11],Tt=s[15];return r[0]=o*D+a*M+l*tt+u*V,r[4]=o*C+a*L+l*Q+u*ht,r[8]=o*I+a*k+l*K+u*Mt,r[12]=o*T+a*H+l*et+u*Tt,r[1]=c*D+h*M+d*tt+p*V,r[5]=c*C+h*L+d*Q+p*ht,r[9]=c*I+h*k+d*K+p*Mt,r[13]=c*T+h*H+d*et+p*Tt,r[2]=v*D+y*M+m*tt+f*V,r[6]=v*C+y*L+m*Q+f*ht,r[10]=v*I+y*k+m*K+f*Mt,r[14]=v*T+y*H+m*et+f*Tt,r[3]=w*D+b*M+E*tt+U*V,r[7]=w*C+b*L+E*Q+U*ht,r[11]=w*I+b*k+E*K+U*Mt,r[15]=w*T+b*H+E*et+U*Tt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],p=t[14],v=t[3],y=t[7],m=t[11],f=t[15];return v*(+r*l*h-s*u*h-r*a*d+i*u*d+s*a*p-i*l*p)+y*(+e*l*p-e*u*d+r*o*d-s*o*p+s*u*c-r*l*c)+m*(+e*u*h-e*a*p-r*o*h+i*o*p+r*a*c-i*u*c)+f*(-s*a*c-e*l*h+e*a*d+s*o*h-i*o*d+i*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],p=t[11],v=t[12],y=t[13],m=t[14],f=t[15],w=h*m*u-y*d*u+y*l*p-a*m*p-h*l*f+a*d*f,b=v*d*u-c*m*u-v*l*p+o*m*p+c*l*f-o*d*f,E=c*y*u-v*h*u+v*a*p-o*y*p-c*a*f+o*h*f,U=v*h*l-c*y*l-v*a*d+o*y*d+c*a*m-o*h*m,D=e*w+i*b+s*E+r*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/D;return t[0]=w*C,t[1]=(y*d*r-h*m*r-y*s*p+i*m*p+h*s*f-i*d*f)*C,t[2]=(a*m*r-y*l*r+y*s*u-i*m*u-a*s*f+i*l*f)*C,t[3]=(h*l*r-a*d*r-h*s*u+i*d*u+a*s*p-i*l*p)*C,t[4]=b*C,t[5]=(c*m*r-v*d*r+v*s*p-e*m*p-c*s*f+e*d*f)*C,t[6]=(v*l*r-o*m*r-v*s*u+e*m*u+o*s*f-e*l*f)*C,t[7]=(o*d*r-c*l*r+c*s*u-e*d*u-o*s*p+e*l*p)*C,t[8]=E*C,t[9]=(v*h*r-c*y*r-v*i*p+e*y*p+c*i*f-e*h*f)*C,t[10]=(o*y*r-v*a*r+v*i*u-e*y*u-o*i*f+e*a*f)*C,t[11]=(c*a*r-o*h*r-c*i*u+e*h*u+o*i*p-e*a*p)*C,t[12]=U*C,t[13]=(c*y*s-v*h*s+v*i*d-e*y*d-c*i*m+e*h*m)*C,t[14]=(v*a*s-o*y*s-v*i*l+e*y*l+o*i*m-e*a*m)*C,t[15]=(o*h*s-c*a*s+c*i*l-e*h*l-o*i*d+e*a*d)*C,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,u=r*o,c=r*a;return this.set(u*o+i,u*a-s*l,u*l+s*a,0,u*a+s*l,c*a+i,c*l-s*o,0,u*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,u=r+r,c=o+o,h=a+a,d=r*u,p=r*c,v=r*h,y=o*c,m=o*h,f=a*h,w=l*u,b=l*c,E=l*h,U=i.x,D=i.y,C=i.z;return s[0]=(1-(y+f))*U,s[1]=(p+E)*U,s[2]=(v-b)*U,s[3]=0,s[4]=(p-E)*D,s[5]=(1-(d+f))*D,s[6]=(m+w)*D,s[7]=0,s[8]=(v+b)*C,s[9]=(m-w)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const u=1/r,c=1/o,h=1/a;return nn.elements[0]*=u,nn.elements[1]*=u,nn.elements[2]*=u,nn.elements[4]*=c,nn.elements[5]*=c,nn.elements[6]*=c,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Nn){const l=this.elements,u=2*r/(e-t),c=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let p,v;if(a===Nn)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===kr)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Nn){const l=this.elements,u=1/(e-t),c=1/(i-s),h=1/(o-r),d=(e+t)*u,p=(i+s)*c;let v,y;if(a===Nn)v=(o+r)*h,y=-2*h;else if(a===kr)v=r*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Bi=new z,nn=new fe,Xm=new z(0,0,0),Ym=new z(1,1,1),Gn=new z,cr=new z,Ge=new z,Sc=new fe,Ec=new Ri;class Mn{constructor(t=0,e=0,i=0,s=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],u=s[5],c=s[9],h=s[2],d=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Bh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qm=0;const yc=new z,zi=new Ri,bn=new fe,ur=new z,ys=new z,jm=new z,Km=new Ri,Tc=new z(1,0,0),bc=new z(0,1,0),Ac=new z(0,0,1),wc={type:"added"},$m={type:"removed"},Hi={type:"childadded",child:null},bo={type:"childremoved",child:null};class Re extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qm++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new z,e=new Mn,i=new Ri,s=new z(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new kt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.multiply(zi),this}rotateOnWorldAxis(t,e){return zi.setFromAxisAngle(t,e),this.quaternion.premultiply(zi),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return yc.copy(t).applyQuaternion(this.quaternion),this.position.add(yc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ur.copy(t):ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ys,ur,this.up):bn.lookAt(ur,ys,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(bn),this.quaternion.premultiply(zi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($m),bo.child=t,this.dispatchEvent(bo),bo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wc),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,t,jm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Km,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Re.DEFAULT_UP=new z(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new z,An=new z,Ao=new z,wn=new z,Vi=new z,Gi=new z,Rc=new z,wo=new z,Ro=new z,Co=new z,Po=new he,Do=new he,Lo=new he;class on{constructor(t=new z,e=new z,i=new z){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){sn.subVectors(s,e),An.subVectors(i,e),Ao.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(An),l=sn.dot(Ao),u=An.dot(An),c=An.dot(Ao),h=o*u-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return Po.setScalar(0),Do.setScalar(0),Lo.setScalar(0),Po.fromBufferAttribute(t,e),Do.fromBufferAttribute(t,i),Lo.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Po,r.x),o.addScaledVector(Do,r.y),o.addScaledVector(Lo,r.z),o}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),An.subVectors(t,e),sn.cross(An).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Vi.subVectors(s,i),Gi.subVectors(r,i),wo.subVectors(t,i);const l=Vi.dot(wo),u=Gi.dot(wo);if(l<=0&&u<=0)return e.copy(i);Ro.subVectors(t,s);const c=Vi.dot(Ro),h=Gi.dot(Ro);if(c>=0&&h<=c)return e.copy(s);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Vi,o);Co.subVectors(t,r);const p=Vi.dot(Co),v=Gi.dot(Co);if(v>=0&&p<=v)return e.copy(r);const y=p*u-l*v;if(y<=0&&u>=0&&v<=0)return a=u/(u-v),e.copy(i).addScaledVector(Gi,a);const m=c*v-p*h;if(m<=0&&h-c>=0&&p-v>=0)return Rc.subVectors(r,s),a=(h-c)/(h-c+(p-v)),e.copy(s).addScaledVector(Rc,a);const f=1/(m+y+d);return o=y*f,a=d*f,e.copy(i).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const zh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Uo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=vl(t,1),e=Xt(e,0,1),i=Xt(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Uo(o,r,t+1/3),this.g=Uo(o,r,t),this.b=Uo(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const i=zh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Kt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Xt(Te.r*255,0,255))*65536+Math.round(Xt(Te.g*255,0,255))*256+Math.round(Xt(Te.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=$e){Kt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(hr);const i=Fs(kn.h,hr.h,e),s=Fs(kn.s,hr.s,e),r=Fs(kn.l,hr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=zh;let Zm=0;class Zs extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=ss,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=oa,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ni&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ra&&(i.blendSrc=this.blendSrc),this.blendDst!==oa&&(i.blendDst=this.blendDst),this.blendEquation!==Si&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hh extends Zs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new z,fr=new Ht;class gn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=pc,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)fr.fromBufferAttribute(this,e),fr.applyMatrix3(t),this.setXY(e,fr.x,fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ki(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pc&&(t.usage=this.usage),t}}class Vh extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Gh extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class vn extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Jm=0;const Ke=new fe,Io=new Re,ki=new z,ke=new $s,Ts=new $s,Me=new z;class ai extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ih(t)?Gh:Vh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Io.lookAt(t),Io.updateMatrix(),this.applyMatrix4(Io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Me.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Me),Me.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Me)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){const i=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ts.setFromBufferAttribute(a),this.morphTargetsRelative?(Me.addVectors(ke.min,Ts.min),ke.expandByPoint(Me),Me.addVectors(ke.max,Ts.max),ke.expandByPoint(Me)):(ke.expandByPoint(Ts.min),ke.expandByPoint(Ts.max))}ke.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)Me.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Me));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Me.fromBufferAttribute(a,u),l&&(ki.fromBufferAttribute(t,u),Me.add(ki)),s=Math.max(s,i.distanceToSquared(Me))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new z,l[I]=new z;const u=new z,c=new z,h=new z,d=new Ht,p=new Ht,v=new Ht,y=new z,m=new z;function f(I,T,M){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,M),c.sub(u),h.sub(u),p.sub(d),v.sub(d);const L=1/(p.x*v.y-v.x*p.y);isFinite(L)&&(y.copy(c).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(L),a[I].add(y),a[T].add(y),a[M].add(y),l[I].add(m),l[T].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,T=w.length;I<T;++I){const M=w[I],L=M.start,k=M.count;for(let H=L,tt=L+k;H<tt;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new z,E=new z,U=new z,D=new z;function C(I){U.fromBufferAttribute(s,I),D.copy(U);const T=a[I];b.copy(T),b.sub(U.multiplyScalar(U.dot(T))).normalize(),E.crossVectors(D,T);const L=E.dot(l[I])<0?-1:1;o.setXYZW(I,b.x,b.y,b.z,L)}for(let I=0,T=w.length;I<T;++I){const M=w[I],L=M.start,k=M.count;for(let H=L,tt=L+k;H<tt;H+=3)C(t.getX(H+0)),C(t.getX(H+1)),C(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,u=new z,c=new z,h=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){const v=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=e.count;d<p;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),h.subVectors(s,r),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Me.fromBufferAttribute(t,e),Me.normalize(),t.setXYZ(e,Me.x,Me.y,Me.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)d[v++]=u[p++]}return new gn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ai,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],u=t(l,i);e.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const l=[],u=r[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const u in s){const c=s[u];this.setAttribute(u,c.clone(e))}const r=t.morphAttributes;for(const u in r){const c=[],h=r[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cc=new fe,pi=new Oh,dr=new xl,Pc=new z,pr=new z,mr=new z,_r=new z,No=new z,gr=new z,Dc=new z,vr=new z;class be extends Re{constructor(t=new ai,e=new Hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const c=a[l],h=r[l];c!==0&&(No.fromBufferAttribute(h,t),o?gr.addScaledVector(No,c):gr.addScaledVector(No.sub(e),c))}e.add(gr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(dr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(dr,Pc)===null||pi.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,u=r.attributes.uv,c=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,U=b;E<U;E+=3){const D=a.getX(E),C=a.getX(E+1),I=a.getX(E+2);s=xr(this,f,t,i,u,c,h,D,C,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const w=a.getX(m),b=a.getX(m+1),E=a.getX(m+2);s=xr(this,o,t,i,u,c,h,w,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,y=d.length;v<y;v++){const m=d[v],f=o[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=w,U=b;E<U;E+=3){const D=E,C=E+1,I=E+2;s=xr(this,f,t,i,u,c,h,D,C,I),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=v,f=y;m<f;m+=3){const w=m,b=m+1,E=m+2;s=xr(this,o,t,i,u,c,h,w,b,E),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Qm(n,t,e,i,s,r,o,a){let l;if(t.side===He?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===ni,a),l===null)return null;vr.copy(a),vr.applyMatrix4(n.matrixWorld);const u=e.ray.origin.distanceTo(vr);return u<e.near||u>e.far?null:{distance:u,point:vr.clone(),object:n}}function xr(n,t,e,i,s,r,o,a,l,u){n.getVertexPosition(a,pr),n.getVertexPosition(l,mr),n.getVertexPosition(u,_r);const c=Qm(n,t,e,i,pr,mr,_r,Dc);if(c){const h=new z;on.getBarycoord(Dc,pr,mr,_r,h),s&&(c.uv=on.getInterpolatedAttribute(s,a,l,u,h,new Ht)),r&&(c.uv1=on.getInterpolatedAttribute(r,a,l,u,h,new Ht)),o&&(c.normal=on.getInterpolatedAttribute(o,a,l,u,h,new z),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new z,materialIndex:0};on.getNormal(pr,mr,_r,d.normal),c.face=d,c.barycoord=h}return c}class ti extends ai{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vn(u,3)),this.setAttribute("normal",new vn(c,3)),this.setAttribute("uv",new vn(h,2));function v(y,m,f,w,b,E,U,D,C,I,T){const M=E/C,L=U/I,k=E/2,H=U/2,tt=D/2,Q=C+1,K=I+1;let et=0,V=0;const ht=new z;for(let Mt=0;Mt<K;Mt++){const Tt=Mt*L-H;for(let Pt=0;Pt<Q;Pt++){const $t=Pt*M-k;ht[y]=$t*w,ht[m]=Tt*b,ht[f]=tt,u.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[f]=D>0?1:-1,c.push(ht.x,ht.y,ht.z),h.push(Pt/C),h.push(1-Mt/I),et+=1}}for(let Mt=0;Mt<I;Mt++)for(let Tt=0;Tt<C;Tt++){const Pt=d+Tt+Q*Mt,$t=d+Tt+Q*(Mt+1),nt=d+(Tt+1)+Q*(Mt+1),ct=d+(Tt+1)+Q*Mt;l.push(Pt,$t,ct),l.push($t,nt,ct),V+=6}a.addGroup(p,V,T),p+=V,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ue(n){const t={};for(let e=0;e<n.length;e++){const i=ps(n[e]);for(const s in i)t[s]=i[s]}return t}function t_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kh(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}const e_={clone:ps,merge:Ue};var n_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,i_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Zs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=n_,this.fragmentShader=i_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=t_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Wh extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wn=new z,Lc=new Ht,Uc=new Ht;class Ze extends Wh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z),Wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wn.x,Wn.y).multiplyScalar(-t/Wn.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Uc),e.subVectors(Uc,Lc)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/u,s*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Wi=-90,Xi=1;class Xh extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(Wi,Xi,t,e);s.layers=this.layers,this.add(s);const r=new Ze(Wi,Xi,t,e);r.layers=this.layers,this.add(r);const o=new Ze(Wi,Xi,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Wi,Xi,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Wi,Xi,t,e);l.layers=this.layers,this.add(l);const u=new Ze(Wi,Xi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const u of e)this.remove(u);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,u,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,u),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),t.render(e,c),t.setRenderTarget(h,d,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Yh extends Oe{constructor(t,e,i,s,r,o,a,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:cs,super(t,e,i,s,r,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qh extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ti(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:He,blending:Jn});r.uniforms.tEquirect.value=e;const o=new be(s,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=mn),new Xh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}class s_ extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Fo=new z,r_=new z,o_=new kt;class qn{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Fo.subVectors(i,e).cross(r_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Fo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||o_.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new xl,Mr=new z;class Ml{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,o=new qn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],u=s[4],c=s[5],h=s[6],d=s[7],p=s[8],v=s[9],y=s[10],m=s[11],f=s[12],w=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,d-u,m-p,E-f).normalize(),i[1].setComponents(l+r,d+u,m+p,E+f).normalize(),i[2].setComponents(l+o,d+c,m+v,E+w).normalize(),i[3].setComponents(l-o,d-c,m-v,E-w).normalize(),i[4].setComponents(l-a,d-h,m-y,E-b).normalize(),e===Nn)i[5].setComponents(l+a,d+h,m+y,E+b).normalize();else if(e===kr)i[5].setComponents(a,h,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class As extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}class jh extends Oe{constructor(t,e,i,s,r,o,a,l,u,c=rs){if(c!==rs&&c!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===rs&&(i=Ai),i===void 0&&c===fs&&(i=hs),super(null,s,r,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Ys extends ai{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const u=this;s=Math.floor(s),r=Math.floor(r);const c=[],h=[],d=[],p=[];let v=0;const y=[],m=i/2;let f=0;w(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(c),this.setAttribute("position",new vn(h,3)),this.setAttribute("normal",new vn(d,3)),this.setAttribute("uv",new vn(p,2));function w(){const E=new z,U=new z;let D=0;const C=(e-t)/i;for(let I=0;I<=r;I++){const T=[],M=I/r,L=M*(e-t)+t;for(let k=0;k<=s;k++){const H=k/s,tt=H*l+a,Q=Math.sin(tt),K=Math.cos(tt);U.x=L*Q,U.y=-M*i+m,U.z=L*K,h.push(U.x,U.y,U.z),E.set(Q,C,K).normalize(),d.push(E.x,E.y,E.z),p.push(H,1-M),T.push(v++)}y.push(T)}for(let I=0;I<s;I++)for(let T=0;T<r;T++){const M=y[T][I],L=y[T+1][I],k=y[T+1][I+1],H=y[T][I+1];(t>0||T!==0)&&(c.push(M,L,H),D+=3),(e>0||T!==r-1)&&(c.push(L,k,H),D+=3)}u.addGroup(f,D,0),f+=D}function b(E){const U=v,D=new Ht,C=new z;let I=0;const T=E===!0?t:e,M=E===!0?1:-1;for(let k=1;k<=s;k++)h.push(0,m*M,0),d.push(0,M,0),p.push(.5,.5),v++;const L=v;for(let k=0;k<=s;k++){const tt=k/s*l+a,Q=Math.cos(tt),K=Math.sin(tt);C.x=T*K,C.y=m*M,C.z=T*Q,h.push(C.x,C.y,C.z),d.push(0,M,0),D.x=Q*.5+.5,D.y=K*.5*M+.5,p.push(D.x,D.y),v++}for(let k=0;k<s;k++){const H=U+k,tt=L+k;E===!0?c.push(tt,tt+1,H):c.push(tt+1,tt,H),I+=3}u.addGroup(f,I,E===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Sl extends Ys{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Sl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ms extends ai{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),u=a+1,c=l+1,h=t/a,d=e/l,p=[],v=[],y=[],m=[];for(let f=0;f<c;f++){const w=f*d-o;for(let b=0;b<u;b++){const E=b*h-r;v.push(E,-w,0),y.push(0,0,1),m.push(b/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const b=w+u*f,E=w+u*(f+1),U=w+1+u*(f+1),D=w+1+u*f;p.push(b,E,D),p.push(E,U,D)}this.setIndex(p),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(y,3)),this.setAttribute("uv",new vn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}class _i extends Zs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qt(16777215),this.specular=new qt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lh,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class a_ extends Zs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=am,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class l_ extends Zs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ic={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class c_{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const u_=new c_;class El{constructor(t){this.manager=t!==void 0?t:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}El.DEFAULT_MATERIAL_NAME="__DEFAULT";class h_ extends El{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Ic.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Xs("img");function l(){c(),Ic.add(t,this),e&&e(this),r.manager.itemEnd(t)}function u(h){c(),s&&s(h),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class f_ extends El{constructor(t){super(t)}load(t,e,i,s){const r=new Oe,o=new h_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}}class Kh extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Oo=new fe,Nc=new z,Fc=new z;class d_{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Nc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Nc),Fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fc),e.updateMatrixWorld(),Oo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Oo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $h extends Wh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,o=r+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class p_ extends d_{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m_ extends Kh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new p_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class __ extends Kh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class g_ extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Oc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class v_ extends Pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Bc(n,t,e,i){const s=x_(i);switch(e){case bh:return n*t;case wh:return n*t;case Rh:return n*t*2;case Ch:return n*t/s.components*s.byteLength;case ml:return n*t/s.components*s.byteLength;case Ph:return n*t*2/s.components*s.byteLength;case _l:return n*t*2/s.components*s.byteLength;case Ah:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case gl:return n*t*4/s.components*s.byteLength;case Pr:case Dr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Lr:case Ur:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case xa:case Sa:return Math.max(n,16)*Math.max(t,8)/4;case va:case Ma:return Math.max(n,8)*Math.max(t,8)/2;case Ea:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case wa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ra:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Da:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Na:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Fa:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Oa:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ir:case za:case Ha:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Dh:case Va:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ga:case ka:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function x_(n){switch(n){case On:case Eh:return{byteLength:1,components:1};case ks:case yh:case Ks:return{byteLength:2,components:1};case dl:case pl:return{byteLength:2,components:4};case Ai:case fl:case In:return{byteLength:4,components:1};case Th:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ul);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function M_(n){const t=new WeakMap;function e(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<h.length;p++){const v=h[d],y=h[p];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,v=h.length;p<v;p++){const y=h[p];n.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,e(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:s,remove:r,update:o}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,C_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,P_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,I_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,og=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ag=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_g=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,iv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ov=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,av=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,uv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Mv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Rv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Nv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ov=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$v=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:S_,alphahash_pars_fragment:E_,alphamap_fragment:y_,alphamap_pars_fragment:T_,alphatest_fragment:b_,alphatest_pars_fragment:A_,aomap_fragment:w_,aomap_pars_fragment:R_,batching_pars_vertex:C_,batching_vertex:P_,begin_vertex:D_,beginnormal_vertex:L_,bsdfs:U_,iridescence_fragment:I_,bumpmap_pars_fragment:N_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:z_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:k_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:Y_,displacementmap_pars_vertex:q_,displacementmap_vertex:j_,emissivemap_fragment:K_,emissivemap_pars_fragment:$_,colorspace_fragment:Z_,colorspace_pars_fragment:J_,envmap_fragment:Q_,envmap_common_pars_fragment:tg,envmap_pars_fragment:eg,envmap_pars_vertex:ng,envmap_physical_pars_fragment:dg,envmap_vertex:ig,fog_vertex:sg,fog_pars_vertex:rg,fog_fragment:og,fog_pars_fragment:ag,gradientmap_pars_fragment:lg,lightmap_pars_fragment:cg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:hg,lights_pars_begin:fg,lights_toon_fragment:pg,lights_toon_pars_fragment:mg,lights_phong_fragment:_g,lights_phong_pars_fragment:gg,lights_physical_fragment:vg,lights_physical_pars_fragment:xg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:Eg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Ag,map_fragment:wg,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Ug,morphcolor_vertex:Ig,morphnormal_vertex:Ng,morphtarget_pars_vertex:Fg,morphtarget_vertex:Og,normal_fragment_begin:Bg,normal_fragment_maps:zg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:kg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:qg,opaque_fragment:jg,packing:Kg,premultiplied_alpha_fragment:$g,project_vertex:Zg,dithering_fragment:Jg,dithering_pars_fragment:Qg,roughnessmap_fragment:tv,roughnessmap_pars_fragment:ev,shadowmap_pars_fragment:nv,shadowmap_pars_vertex:iv,shadowmap_vertex:sv,shadowmask_pars_fragment:rv,skinbase_vertex:ov,skinning_pars_vertex:av,skinning_vertex:lv,skinnormal_vertex:cv,specularmap_fragment:uv,specularmap_pars_fragment:hv,tonemapping_fragment:fv,tonemapping_pars_fragment:dv,transmission_fragment:pv,transmission_pars_fragment:mv,uv_pars_fragment:_v,uv_pars_vertex:gv,uv_vertex:vv,worldpos_vertex:xv,background_vert:Mv,background_frag:Sv,backgroundCube_vert:Ev,backgroundCube_frag:yv,cube_vert:Tv,cube_frag:bv,depth_vert:Av,depth_frag:wv,distanceRGBA_vert:Rv,distanceRGBA_frag:Cv,equirect_vert:Pv,equirect_frag:Dv,linedashed_vert:Lv,linedashed_frag:Uv,meshbasic_vert:Iv,meshbasic_frag:Nv,meshlambert_vert:Fv,meshlambert_frag:Ov,meshmatcap_vert:Bv,meshmatcap_frag:zv,meshnormal_vert:Hv,meshnormal_frag:Vv,meshphong_vert:Gv,meshphong_frag:kv,meshphysical_vert:Wv,meshphysical_frag:Xv,meshtoon_vert:Yv,meshtoon_frag:qv,points_vert:jv,points_frag:Kv,shadow_vert:$v,shadow_frag:Zv,sprite_vert:Jv,sprite_frag:Qv},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},pn={basic:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ue([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ue([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ue([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ue([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ue([mt.points,mt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ue([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ue([mt.common,mt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ue([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ue([mt.sprite,mt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ue([mt.common,mt.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ue([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};pn.physical={uniforms:Ue([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};const Sr={r:0,b:0,g:0},gi=new Mn,t0=new fe;function e0(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,u,c,h=null,d=0,p=null;function v(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function y(b){let E=!1;const U=v(b);U===null?f(a,l):U&&U.isColor&&(f(U,1),E=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const U=v(E);U&&(U.isCubeTexture||U.mapping===Qr)?(c===void 0&&(c=new be(new ti(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ps(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),gi.copy(E.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),c.material.uniforms.envMap.value=U,c.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(t0.makeRotationFromEuler(gi)),c.material.toneMapped=Kt.getTransfer(U.colorSpace)!==ne,(h!==U||d!==U.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=U,d=U.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):U&&U.isTexture&&(u===void 0&&(u=new be(new ms(2,2),new ii({name:"BackgroundMaterial",uniforms:ps(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=U,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=Kt.getTransfer(U.colorSpace)!==ne,U.matrixAutoUpdate===!0&&U.updateMatrix(),u.material.uniforms.uvTransform.value.copy(U.matrix),(h!==U||d!==U.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=U,d=U.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function f(b,E){b.getRGB(Sr,kh(n)),i.buffers.color.setClear(Sr.r,Sr.g,Sr.b,E,o)}function w(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:y,addToRenderList:m,dispose:w}}function n0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(M,L,k,H,tt){let Q=!1;const K=h(H,k,L);r!==K&&(r=K,u(r.object)),Q=p(M,H,k,tt),Q&&v(M,H,k,tt),tt!==null&&t.update(tt,n.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,E(M,L,k,H),tt!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(tt).buffer))}function l(){return n.createVertexArray()}function u(M){return n.bindVertexArray(M)}function c(M){return n.deleteVertexArray(M)}function h(M,L,k){const H=k.wireframe===!0;let tt=i[M.id];tt===void 0&&(tt={},i[M.id]=tt);let Q=tt[L.id];Q===void 0&&(Q={},tt[L.id]=Q);let K=Q[H];return K===void 0&&(K=d(l()),Q[H]=K),K}function d(M){const L=[],k=[],H=[];for(let tt=0;tt<e;tt++)L[tt]=0,k[tt]=0,H[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:H,object:M,attributes:{},index:null}}function p(M,L,k,H){const tt=r.attributes,Q=L.attributes;let K=0;const et=k.getAttributes();for(const V in et)if(et[V].location>=0){const Mt=tt[V];let Tt=Q[V];if(Tt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Tt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Tt=M.instanceColor)),Mt===void 0||Mt.attribute!==Tt||Tt&&Mt.data!==Tt.data)return!0;K++}return r.attributesNum!==K||r.index!==H}function v(M,L,k,H){const tt={},Q=L.attributes;let K=0;const et=k.getAttributes();for(const V in et)if(et[V].location>=0){let Mt=Q[V];Mt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const Tt={};Tt.attribute=Mt,Mt&&Mt.data&&(Tt.data=Mt.data),tt[V]=Tt,K++}r.attributes=tt,r.attributesNum=K,r.index=H}function y(){const M=r.newAttributes;for(let L=0,k=M.length;L<k;L++)M[L]=0}function m(M){f(M,0)}function f(M,L){const k=r.newAttributes,H=r.enabledAttributes,tt=r.attributeDivisors;k[M]=1,H[M]===0&&(n.enableVertexAttribArray(M),H[M]=1),tt[M]!==L&&(n.vertexAttribDivisor(M,L),tt[M]=L)}function w(){const M=r.newAttributes,L=r.enabledAttributes;for(let k=0,H=L.length;k<H;k++)L[k]!==M[k]&&(n.disableVertexAttribArray(k),L[k]=0)}function b(M,L,k,H,tt,Q,K){K===!0?n.vertexAttribIPointer(M,L,k,tt,Q):n.vertexAttribPointer(M,L,k,H,tt,Q)}function E(M,L,k,H){y();const tt=H.attributes,Q=k.getAttributes(),K=L.defaultAttributeValues;for(const et in Q){const V=Q[et];if(V.location>=0){let ht=tt[et];if(ht===void 0&&(et==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),et==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor)),ht!==void 0){const Mt=ht.normalized,Tt=ht.itemSize,Pt=t.get(ht);if(Pt===void 0)continue;const $t=Pt.buffer,nt=Pt.type,ct=Pt.bytesPerElement,yt=nt===n.INT||nt===n.UNSIGNED_INT||ht.gpuType===fl;if(ht.isInterleavedBufferAttribute){const pt=ht.data,Rt=pt.stride,Ut=ht.offset;if(pt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<V.locationSize;Ot++)f(V.location+Ot,pt.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Ot=0;Ot<V.locationSize;Ot++)m(V.location+Ot);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let Ot=0;Ot<V.locationSize;Ot++)b(V.location+Ot,Tt/V.locationSize,nt,Mt,Rt*ct,(Ut+Tt/V.locationSize*Ot)*ct,yt)}else{if(ht.isInstancedBufferAttribute){for(let pt=0;pt<V.locationSize;pt++)f(V.location+pt,ht.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let pt=0;pt<V.locationSize;pt++)m(V.location+pt);n.bindBuffer(n.ARRAY_BUFFER,$t);for(let pt=0;pt<V.locationSize;pt++)b(V.location+pt,Tt/V.locationSize,nt,Mt,Tt*ct,Tt/V.locationSize*pt*ct,yt)}}else if(K!==void 0){const Mt=K[et];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(V.location,Mt);break;case 3:n.vertexAttrib3fv(V.location,Mt);break;case 4:n.vertexAttrib4fv(V.location,Mt);break;default:n.vertexAttrib1fv(V.location,Mt)}}}}w()}function U(){I();for(const M in i){const L=i[M];for(const k in L){const H=L[k];for(const tt in H)c(H[tt].object),delete H[tt];delete L[k]}delete i[M]}}function D(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const k in L){const H=L[k];for(const tt in H)c(H[tt].object),delete H[tt];delete L[k]}delete i[M.id]}function C(M){for(const L in i){const k=i[L];if(k[M.id]===void 0)continue;const H=k[M.id];for(const tt in H)c(H[tt].object),delete H[tt];delete k[M.id]}}function I(){T(),o=!0,r!==s&&(r=s,u(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function i0(n,t,e){let i;function s(u){i=u}function r(u,c){n.drawArrays(i,u,c),e.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),e.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let v=0;v<h;v++)p+=c[v];e.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let v=0;for(let y=0;y<h;y++)v+=c[y]*d[y];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function s0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==an&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Ks&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==On&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==In&&!I)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),U=v>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:U,maxSamples:D}}function r0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new qn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=c(h,d,0)},this.setState=function(h,d,p){const v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?c(null):u();else{const w=r?0:i,b=w*4;let E=f.clippingState||null;l.value=E,E=c(v,d,b,p);for(let U=0;U!==b;++U)E[U]=e[U];f.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,d,p,v){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,v!==!0||m===null){const f=p+y*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,E=p;b!==y;++b,E+=4)o.copy(h[b]).applyMatrix4(w,a),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function o0(n){let t=new WeakMap;function e(o,a){return a===pa?o.mapping=cs:a===ma&&(o.mapping=us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===pa||a===ma)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new qh(l.height);return u.fromEquirectangularTexture(n,o),t.set(o,u),o.addEventListener("dispose",s),e(u.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}const Ji=4,zc=[.125,.215,.35,.446,.526,.582],Ei=20,Bo=new $h,Hc=new qt;let zo=null,Ho=0,Vo=0,Go=!1;const Mi=(1+Math.sqrt(5))/2,Yi=1/Mi,Vc=[new z(-Mi,Yi,0),new z(Mi,Yi,0),new z(-Yi,0,Mi),new z(Yi,0,Mi),new z(0,Mi,-Yi),new z(0,Mi,Yi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class Gc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(zo,Ho,Vo),this._renderer.xr.enabled=Go,t.scissorTest=!1,Er(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zo=this._renderer.getRenderTarget(),Ho=this._renderer.getActiveCubeFace(),Vo=this._renderer.getActiveMipmapLevel(),Go=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Ks,format:an,colorSpace:ds,depthBuffer:!1},s=kc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=a0(r)),this._blurMaterial=l0(r,t,e)}return s}_compileMaterial(t){const e=new be(this._lodPlanes[0],t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,i,s){const a=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Hc),c.toneMapping=Qn,c.autoClear=!1;const p=new Hh({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),v=new be(new ti,p);let y=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(Hc),y=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const b=this._cubeSize;Er(s,w*b,f>2?b:0,b,b),c.setRenderTarget(s),y&&c.render(v,a),c.render(t,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=h,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===cs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new be(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Er(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Bo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Vc[(s-r-1)%Vc.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new be(this._lodPlanes[s],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ei-1),y=r/v,m=isFinite(r)?1+Math.floor(c*y):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const f=[];let w=0;for(let C=0;C<Ei;++C){const I=C/y,T=Math.exp(-I*I/2);f.push(T),C===0?w+=T:C<m&&(w+=2*T)}for(let C=0;C<f.length;C++)f[C]=f[C]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const E=this._sizeLods[s],U=3*E*(s>b-Ji?s-b+Ji:0),D=4*(this._cubeSize-E);Er(e,U,D,3*E,2*E),l.setRenderTarget(e),l.render(h,Bo)}}function a0(n){const t=[],e=[],i=[];let s=n;const r=n-Ji+1+zc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-Ji?l=zc[o-n+Ji-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,y=3,m=2,f=1,w=new Float32Array(y*v*p),b=new Float32Array(m*v*p),E=new Float32Array(f*v*p);for(let D=0;D<p;D++){const C=D%3*2/3-1,I=D>2?0:-1,T=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];w.set(T,y*v*D),b.set(d,m*v*D);const M=[D,D,D,D,D,D];E.set(M,f*v*D)}const U=new ai;U.setAttribute("position",new gn(w,y)),U.setAttribute("uv",new gn(b,m)),U.setAttribute("faceIndex",new gn(E,f)),t.push(U),s>Ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kc(n,t,e){const i=new wi(n,t,e);return i.texture.mapping=Qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Er(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function l0(n,t,e){const i=new Float32Array(Ei),s=new z(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Wc(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Xc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function yl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function c0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===pa||l===ma,c=l===cs||l===us;if(u||c){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Gc(n)),h=u?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Gc(n)),h=u?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function u0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&$i("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function h0(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function u(h){const d=[],p=h.index,v=h.attributes.position;let y=0;if(p!==null){const w=p.array;y=p.version;for(let b=0,E=w.length;b<E;b+=3){const U=w[b+0],D=w[b+1],C=w[b+2];d.push(U,D,D,C,C,U)}}else if(v!==void 0){const w=v.array;y=v.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const U=b+0,D=b+1,C=b+2;d.push(U,D,D,C,C,U)}}else return;const m=new(Ih(d)?Gh:Vh)(d,1);m.version=y;const f=r.get(h);f&&t.remove(f),r.set(h,m)}function c(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function f0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),e.update(p,i,1)}function u(d,p,v){v!==0&&(n.drawElementsInstanced(i,p,r,d*o,v),e.update(p,i,v))}function c(d,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];e.update(m,i,1)}function h(d,p,v,y){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,y,0,v);let f=0;for(let w=0;w<v;w++)f+=p[w]*y[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function d0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function p0(n,t,e){const i=new WeakMap,s=new he;function r(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let M=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;v===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let U=a.attributes.position.count*E,D=1;U>t.maxTextureSize&&(D=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const C=new Float32Array(U*D*4*h),I=new Fh(C,U,D,h);I.type=In,I.needsUpdate=!0;const T=E*4;for(let L=0;L<h;L++){const k=f[L],H=w[L],tt=b[L],Q=U*D*4*L;for(let K=0;K<k.count;K++){const et=K*T;v===!0&&(s.fromBufferAttribute(k,K),C[Q+et+0]=s.x,C[Q+et+1]=s.y,C[Q+et+2]=s.z,C[Q+et+3]=0),y===!0&&(s.fromBufferAttribute(H,K),C[Q+et+4]=s.x,C[Q+et+5]=s.y,C[Q+et+6]=s.z,C[Q+et+7]=0),m===!0&&(s.fromBufferAttribute(tt,K),C[Q+et+8]=s.x,C[Q+et+9]=s.y,C[Q+et+10]=s.z,C[Q+et+11]=tt.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new Ht(U,D)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const y=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function m0(n,t,e,i){let s=new WeakMap;function r(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:o}}const Jh=new Oe,Yc=new jh(1,1),Qh=new Fh,tf=new km,ef=new Yh,qc=[],jc=[],Kc=new Float32Array(16),$c=new Float32Array(9),Zc=new Float32Array(4);function gs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=qc[s];if(r===void 0&&(r=new Float32Array(s),qc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ve(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function xe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function to(n,t){let e=jc[t];e===void 0&&(e=new Int32Array(t),jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function _0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function g0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2fv(this.addr,t),xe(e,t)}}function v0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;n.uniform3fv(this.addr,t),xe(e,t)}}function x0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4fv(this.addr,t),xe(e,t)}}function M0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Zc.set(i),n.uniformMatrix2fv(this.addr,!1,Zc),xe(e,i)}}function S0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;$c.set(i),n.uniformMatrix3fv(this.addr,!1,$c),xe(e,i)}}function E0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ve(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),xe(e,t)}else{if(ve(e,i))return;Kc.set(i),n.uniformMatrix4fv(this.addr,!1,Kc),xe(e,i)}}function y0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2iv(this.addr,t),xe(e,t)}}function b0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3iv(this.addr,t),xe(e,t)}}function A0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4iv(this.addr,t),xe(e,t)}}function w0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;n.uniform2uiv(this.addr,t),xe(e,t)}}function C0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;n.uniform3uiv(this.addr,t),xe(e,t)}}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;n.uniform4uiv(this.addr,t),xe(e,t)}}function D0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Yc.compareFunction=Uh,r=Yc):r=Jh,e.setTexture2D(t||r,s)}function L0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||tf,s)}function U0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ef,s)}function I0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Qh,s)}function N0(n){switch(n){case 5126:return _0;case 35664:return g0;case 35665:return v0;case 35666:return x0;case 35674:return M0;case 35675:return S0;case 35676:return E0;case 5124:case 35670:return y0;case 35667:case 35671:return T0;case 35668:case 35672:return b0;case 35669:case 35673:return A0;case 5125:return w0;case 36294:return R0;case 36295:return C0;case 36296:return P0;case 35678:case 36198:case 36298:case 36306:case 35682:return D0;case 35679:case 36299:case 36307:return L0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return I0}}function F0(n,t){n.uniform1fv(this.addr,t)}function O0(n,t){const e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function B0(n,t){const e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function z0(n,t){const e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function H0(n,t){const e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function V0(n,t){const e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function G0(n,t){const e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function k0(n,t){n.uniform1iv(this.addr,t)}function W0(n,t){n.uniform2iv(this.addr,t)}function X0(n,t){n.uniform3iv(this.addr,t)}function Y0(n,t){n.uniform4iv(this.addr,t)}function q0(n,t){n.uniform1uiv(this.addr,t)}function j0(n,t){n.uniform2uiv(this.addr,t)}function K0(n,t){n.uniform3uiv(this.addr,t)}function $0(n,t){n.uniform4uiv(this.addr,t)}function Z0(n,t,e){const i=this.cache,s=t.length,r=to(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Jh,r[o])}function J0(n,t,e){const i=this.cache,s=t.length,r=to(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||tf,r[o])}function Q0(n,t,e){const i=this.cache,s=t.length,r=to(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ef,r[o])}function tx(n,t,e){const i=this.cache,s=t.length,r=to(e,s);ve(i,r)||(n.uniform1iv(this.addr,r),xe(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Qh,r[o])}function ex(n){switch(n){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return k0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return Y0;case 5125:return q0;case 36294:return j0;case 36295:return K0;case 36296:return $0;case 35678:case 36198:case 36298:case 36306:case 35682:return Z0;case 35679:case 36299:case 36307:return J0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tx}}class nx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=N0(e.type)}}class ix{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ex(e.type)}}class sx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Jc(n,t){n.seq.push(t),n.map[t.id]=t}function rx(n,t,e){const i=n.name,s=i.length;for(ko.lastIndex=0;;){const r=ko.exec(i),o=ko.lastIndex;let a=r[1];const l=r[2]==="]",u=r[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===s){Jc(e,u===void 0?new nx(a,n,t):new ix(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new sx(a),Jc(e,h)),e=h}}}class Nr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);rx(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Qc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const ox=37297;let ax=0;function lx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const tu=new kt;function cx(n){Kt._getMatrix(tu,Kt.workingColorSpace,n);const t=`mat3( ${tu.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(n)){case Gr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function eu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+lx(n.getShaderSource(t),o)}else return s}function ux(n,t){const e=cx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hx(n,t){let e;switch(t){case Qp:e="Linear";break;case tm:e="Reinhard";break;case em:e="Cineon";break;case nm:e="ACESFilmic";break;case sm:e="AgX";break;case rm:e="Neutral";break;case im:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const yr=new z;function fx(){Kt.getLuminanceCoefficients(yr);const n=yr.x.toFixed(4),t=yr.y.toFixed(4),e=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function px(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function mx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function ws(n){return n!==""}function nu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function iu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(n){return n.replace(_x,vx)}const gx=new Map;function vx(n,t){let e=Wt[t];if(e===void 0){const i=gx.get(t);if(i!==void 0)e=Wt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Wa(e)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(n){return n.replace(xx,Mx)}function Mx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ru(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ex(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case cs:case us:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function Tx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case Zp:t="ENVMAP_BLENDING_MIX";break;case Jp:t="ENVMAP_BLENDING_ADD";break}return t}function bx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Ax(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sx(e),u=Ex(e),c=yx(e),h=Tx(e),d=bx(e),p=dx(e),v=px(r),y=s.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ws).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ws).join(`
`),f.length>0&&(f+=`
`)):(m=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),f=[ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Wt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,ux("linearToOutputTexel",e.outputColorSpace),fx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ws).join(`
`)),o=Wa(o),o=nu(o,e),o=iu(o,e),a=Wa(a),a=nu(a,e),a=iu(a,e),o=su(o),a=su(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=w+m+o,E=w+f+a,U=Qc(s,s.VERTEX_SHADER,b),D=Qc(s,s.FRAGMENT_SHADER,E);s.attachShader(y,U),s.attachShader(y,D),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(n.debug.checkShaderErrors){const k=s.getProgramInfoLog(y).trim(),H=s.getShaderInfoLog(U).trim(),tt=s.getShaderInfoLog(D).trim();let Q=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,U,D);else{const et=eu(s,U,"vertex"),V=eu(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+et+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||tt==="")&&(K=!1);K&&(L.diagnostics={runnable:Q,programLog:k,vertexShader:{log:H,prefix:m},fragmentShader:{log:tt,prefix:f}})}s.deleteShader(U),s.deleteShader(D),I=new Nr(s,y),T=mx(s,y)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(y,ox)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ax++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=U,this.fragmentShader=D,this}let wx=0;class Rx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cx(t),e.set(t,i)),i}}class Cx{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}}function Px(n,t,e,i,s,r,o){const a=new Bh,l=new Rx,u=new Set,c=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,k,H){const tt=k.fog,Q=H.geometry,K=T.isMeshStandardMaterial?k.environment:null,et=(T.isMeshStandardMaterial?e:t).get(T.envMap||K),V=et&&et.mapping===Qr?et.image.height:null,ht=v[T.type];T.precision!==null&&(p=s.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=Mt!==void 0?Mt.length:0;let Pt=0;Q.morphAttributes.position!==void 0&&(Pt=1),Q.morphAttributes.normal!==void 0&&(Pt=2),Q.morphAttributes.color!==void 0&&(Pt=3);let $t,nt,ct,yt;if(ht){const ee=pn[ht];$t=ee.vertexShader,nt=ee.fragmentShader}else $t=T.vertexShader,nt=T.fragmentShader,l.update(T),ct=l.getVertexShaderID(T),yt=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),Rt=n.state.buffers.depth.getReversed(),Ut=H.isInstancedMesh===!0,Ot=H.isBatchedMesh===!0,ae=!!T.map,A=!!T.matcap,P=!!et,S=!!T.aoMap,st=!!T.lightMap,q=!!T.bumpMap,$=!!T.normalMap,Z=!!T.displacementMap,rt=!!T.emissiveMap,j=!!T.metalnessMap,g=!!T.roughnessMap,_=T.anisotropy>0,R=T.clearcoat>0,B=T.dispersion>0,W=T.iridescence>0,G=T.sheen>0,ut=T.transmission>0,ot=_&&!!T.anisotropyMap,ft=R&&!!T.clearcoatMap,Dt=R&&!!T.clearcoatNormalMap,at=R&&!!T.clearcoatRoughnessMap,_t=W&&!!T.iridescenceMap,At=W&&!!T.iridescenceThicknessMap,Lt=G&&!!T.sheenColorMap,dt=G&&!!T.sheenRoughnessMap,It=!!T.specularMap,Bt=!!T.specularColorMap,re=!!T.specularIntensityMap,N=ut&&!!T.transmissionMap,gt=ut&&!!T.thicknessMap,J=!!T.gradientMap,it=!!T.alphaMap,St=T.alphaTest>0,xt=!!T.alphaHash,Gt=!!T.extensions;let ce=Qn;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(ce=n.toneMapping);const Ee={shaderID:ht,shaderType:T.type,shaderName:T.name,vertexShader:$t,fragmentShader:nt,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:yt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ot,batchingColor:Ot&&H._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&H.instanceColor!==null,instancingMorph:Ut&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:ds,alphaToCoverage:!!T.alphaToCoverage,map:ae,matcap:A,envMap:P,envMapMode:P&&et.mapping,envMapCubeUVHeight:V,aoMap:S,lightMap:st,bumpMap:q,normalMap:$,displacementMap:d&&Z,emissiveMap:rt,normalMapObjectSpace:$&&T.normalMapType===cm,normalMapTangentSpace:$&&T.normalMapType===Lh,metalnessMap:j,roughnessMap:g,anisotropy:_,anisotropyMap:ot,clearcoat:R,clearcoatMap:ft,clearcoatNormalMap:Dt,clearcoatRoughnessMap:at,dispersion:B,iridescence:W,iridescenceMap:_t,iridescenceThicknessMap:At,sheen:G,sheenColorMap:Lt,sheenRoughnessMap:dt,specularMap:It,specularColorMap:Bt,specularIntensityMap:re,transmission:ut,transmissionMap:N,thicknessMap:gt,gradientMap:J,opaque:T.transparent===!1&&T.blending===ss&&T.alphaToCoverage===!1,alphaMap:it,alphaTest:St,alphaHash:xt,combine:T.combine,mapUv:ae&&y(T.map.channel),aoMapUv:S&&y(T.aoMap.channel),lightMapUv:st&&y(T.lightMap.channel),bumpMapUv:q&&y(T.bumpMap.channel),normalMapUv:$&&y(T.normalMap.channel),displacementMapUv:Z&&y(T.displacementMap.channel),emissiveMapUv:rt&&y(T.emissiveMap.channel),metalnessMapUv:j&&y(T.metalnessMap.channel),roughnessMapUv:g&&y(T.roughnessMap.channel),anisotropyMapUv:ot&&y(T.anisotropyMap.channel),clearcoatMapUv:ft&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:At&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&y(T.sheenRoughnessMap.channel),specularMapUv:It&&y(T.specularMap.channel),specularColorMapUv:Bt&&y(T.specularColorMap.channel),specularIntensityMapUv:re&&y(T.specularIntensityMap.channel),transmissionMapUv:N&&y(T.transmissionMap.channel),thicknessMapUv:gt&&y(T.thicknessMap.channel),alphaMapUv:it&&y(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&($||_),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Q.attributes.uv&&(ae||it),fog:!!tt,useFog:T.fog===!0,fogExp2:!!tt&&tt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Rt,skinning:H.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:ae&&T.map.isVideoTexture===!0&&Kt.getTransfer(T.map.colorSpace)===ne,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(T.emissiveMap.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Un,flipSided:T.side===He,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Gt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&T.extensions.multiDraw===!0||Ot)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ee.vertexUv1s=u.has(1),Ee.vertexUv2s=u.has(2),Ee.vertexUv3s=u.has(3),u.clear(),Ee}function f(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(w(M,T),b(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function w(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function b(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function E(T){const M=v[T.type];let L;if(M){const k=pn[M];L=e_.clone(k.uniforms)}else L=T.uniforms;return L}function U(T,M){let L;for(let k=0,H=c.length;k<H;k++){const tt=c[k];if(tt.cacheKey===M){L=tt,++L.usedTimes;break}}return L===void 0&&(L=new Ax(n,M,T,r),c.push(L)),L}function D(T){if(--T.usedTimes===0){const M=c.indexOf(T);c[M]=c[c.length-1],c.pop(),T.destroy()}}function C(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:U,releaseProgram:D,releaseShaderCache:C,programs:c,dispose:I}}function Dx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Lx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ou(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function au(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,p,v,y,m){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:v,renderOrder:h.renderOrder,z:y,group:m},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=y,f.group=m),t++,f}function a(h,d,p,v,y,m){const f=o(h,d,p,v,y,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):e.push(f)}function l(h,d,p,v,y,m){const f=o(h,d,p,v,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):e.unshift(f)}function u(h,d){e.length>1&&e.sort(h||Lx),i.length>1&&i.sort(d||ou),s.length>1&&s.sort(d||ou)}function c(){for(let h=t,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:c,sort:u}}function Ux(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new au,n.set(i,[o])):s>=r.length?(o=new au,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Ix(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new qt};break;case"SpotLight":e={position:new z,direction:new z,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[t.id]=e,e}}}function Nx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Fx=0;function Ox(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Bx(n){const t=new Ix,e=Nx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const s=new z,r=new fe,o=new fe;function a(u){let c=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,y=0,m=0,f=0,w=0,b=0,E=0,U=0,D=0,C=0;u.sort(Ox);for(let T=0,M=u.length;T<M;T++){const L=u[T],k=L.color,H=L.intensity,tt=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=k.r*H,h+=k.g*H,d+=k.b*H;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],H);C++}else if(L.isDirectionalLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const et=L.shadow,V=e.get(L);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=L.shadow.matrix,w++}i.directional[p]=K,p++}else if(L.isSpotLight){const K=t.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(H),K.distance=tt,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[y]=K;const et=L.shadow;if(L.map&&(i.spotLightMap[U]=L.map,U++,et.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[y]=et.matrix,L.castShadow){const V=e.get(L);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=Q,E++}y++}else if(L.isRectAreaLight){const K=t.get(L);K.color.copy(k).multiplyScalar(H),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=t.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const et=L.shadow,V=e.get(L);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,i.pointShadow[v]=V,i.pointShadowMap[v]=Q,i.pointShadowMatrix[v]=L.shadow.matrix,b++}i.point[v]=K,v++}else if(L.isHemisphereLight){const K=t.get(L);K.skyColor.copy(L.color).multiplyScalar(H),K.groundColor.copy(L.groundColor).multiplyScalar(H),i.hemi[f]=K,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==p||I.pointLength!==v||I.spotLength!==y||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==w||I.numPointShadows!==b||I.numSpotShadows!==E||I.numSpotMaps!==U||I.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+U-D,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=C,I.directionalLength=p,I.pointLength=v,I.spotLength=y,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=w,I.numPointShadows=b,I.numSpotShadows=E,I.numSpotMaps=U,I.numLightProbes=C,i.version=Fx++)}function l(u,c){let h=0,d=0,p=0,v=0,y=0;const m=c.matrixWorldInverse;for(let f=0,w=u.length;f<w;f++){const b=u[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),v++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const E=i.hemi[y];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function lu(n){const t=new Bx(n),e=[],i=[];function s(c){u.camera=c,e.length=0,i.length=0}function r(c){e.push(c)}function o(c){i.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const u={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function zx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new lu(n),t.set(s,[a])):r>=o.length?(a=new lu(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const Hx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gx(n,t,e){let i=new Ml;const s=new Ht,r=new Ht,o=new he,a=new a_({depthPacking:lm}),l=new l_,u={},c=e.maxTextureSize,h={[ni]:He,[He]:ni,[Un]:Un},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:Hx,fragmentShader:Vx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new ai;v.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new be(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xh;let f=this.type;this.render=function(D,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Jn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=f!==Rn&&this.type===Rn,tt=f===Rn&&this.type!==Rn;for(let Q=0,K=D.length;Q<K;Q++){const et=D[Q],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ht=V.getFrameExtents();if(s.multiply(ht),r.copy(V.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ht.x),s.x=r.x*ht.x,V.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ht.y),s.y=r.y*ht.y,V.mapSize.y=r.y)),V.map===null||H===!0||tt===!0){const Tt=this.type!==Rn?{minFilter:un,magFilter:un}:{};V.map!==null&&V.map.dispose(),V.map=new wi(s.x,s.y,Tt),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const Mt=V.getViewportCount();for(let Tt=0;Tt<Mt;Tt++){const Pt=V.getViewport(Tt);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),k.viewport(o),V.updateMatrices(et,Tt),i=V.getFrustum(),E(C,I,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===Rn&&w(V,I),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function w(D,C){const I=t.update(y);d.defines.VSM_SAMPLES!==D.blurSamples&&(d.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new wi(s.x,s.y)),d.uniforms.shadow_pass.value=D.map.texture,d.uniforms.resolution.value=D.mapSize,d.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(C,null,I,d,y,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(C,null,I,p,y,null)}function b(D,C,I,T){let M=null;const L=I.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(L!==void 0)M=L;else if(M=I.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,H=C.uuid;let tt=u[k];tt===void 0&&(tt={},u[k]=tt);let Q=tt[H];Q===void 0&&(Q=M.clone(),tt[H]=Q,C.addEventListener("dispose",U)),M=Q}if(M.visible=C.visible,M.wireframe=C.wireframe,T===Rn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=n.properties.get(M);k.light=I}return M}function E(D,C,I,T,M){if(D.visible===!1)return;if(D.layers.test(C.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===Rn)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,D.matrixWorld);const H=t.update(D),tt=D.material;if(Array.isArray(tt)){const Q=H.groups;for(let K=0,et=Q.length;K<et;K++){const V=Q[K],ht=tt[V.materialIndex];if(ht&&ht.visible){const Mt=b(D,ht,T,M);D.onBeforeShadow(n,D,C,I,H,Mt,V),n.renderBufferDirect(I,null,H,Mt,D,V),D.onAfterShadow(n,D,C,I,H,Mt,V)}}}else if(tt.visible){const Q=b(D,tt,T,M);D.onBeforeShadow(n,D,C,I,H,Q,null),n.renderBufferDirect(I,null,H,Q,D,null),D.onAfterShadow(n,D,C,I,H,Q,null)}}const k=D.children;for(let H=0,tt=k.length;H<tt;H++)E(k[H],C,I,T,M)}function U(D){D.target.removeEventListener("dispose",U);for(const I in u){const T=u[I],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const kx={[aa]:la,[ca]:fa,[ua]:da,[ls]:ha,[la]:aa,[fa]:ca,[da]:ua,[ha]:ls};function Wx(n,t){function e(){let N=!1;const gt=new he;let J=null;const it=new he(0,0,0,0);return{setMask:function(St){J!==St&&!N&&(n.colorMask(St,St,St,St),J=St)},setLocked:function(St){N=St},setClear:function(St,xt,Gt,ce,Ee){Ee===!0&&(St*=ce,xt*=ce,Gt*=ce),gt.set(St,xt,Gt,ce),it.equals(gt)===!1&&(n.clearColor(St,xt,Gt,ce),it.copy(gt))},reset:function(){N=!1,J=null,it.set(-1,0,0,0)}}}function i(){let N=!1,gt=!1,J=null,it=null,St=null;return{setReversed:function(xt){if(gt!==xt){const Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT);const ce=St;St=null,this.setClear(ce)}gt=xt},getReversed:function(){return gt},setTest:function(xt){xt?pt(n.DEPTH_TEST):Rt(n.DEPTH_TEST)},setMask:function(xt){J!==xt&&!N&&(n.depthMask(xt),J=xt)},setFunc:function(xt){if(gt&&(xt=kx[xt]),it!==xt){switch(xt){case aa:n.depthFunc(n.NEVER);break;case la:n.depthFunc(n.ALWAYS);break;case ca:n.depthFunc(n.LESS);break;case ls:n.depthFunc(n.LEQUAL);break;case ua:n.depthFunc(n.EQUAL);break;case ha:n.depthFunc(n.GEQUAL);break;case fa:n.depthFunc(n.GREATER);break;case da:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}it=xt}},setLocked:function(xt){N=xt},setClear:function(xt){St!==xt&&(gt&&(xt=1-xt),n.clearDepth(xt),St=xt)},reset:function(){N=!1,J=null,it=null,St=null,gt=!1}}}function s(){let N=!1,gt=null,J=null,it=null,St=null,xt=null,Gt=null,ce=null,Ee=null;return{setTest:function(ee){N||(ee?pt(n.STENCIL_TEST):Rt(n.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!N&&(n.stencilMask(ee),gt=ee)},setFunc:function(ee,Qe,Sn){(J!==ee||it!==Qe||St!==Sn)&&(n.stencilFunc(ee,Qe,Sn),J=ee,it=Qe,St=Sn)},setOp:function(ee,Qe,Sn){(xt!==ee||Gt!==Qe||ce!==Sn)&&(n.stencilOp(ee,Qe,Sn),xt=ee,Gt=Qe,ce=Sn)},setLocked:function(ee){N=ee},setClear:function(ee){Ee!==ee&&(n.clearStencil(ee),Ee=ee)},reset:function(){N=!1,gt=null,J=null,it=null,St=null,xt=null,Gt=null,ce=null,Ee=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],v=null,y=!1,m=null,f=null,w=null,b=null,E=null,U=null,D=null,C=new qt(0,0,0),I=0,T=!1,M=null,L=null,k=null,H=null,tt=null;const Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,et=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),K=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),K=et>=2);let ht=null,Mt={};const Tt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),$t=new he().fromArray(Tt),nt=new he().fromArray(Pt);function ct(N,gt,J,it){const St=new Uint8Array(4),xt=n.createTexture();n.bindTexture(N,xt),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<J;Gt++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,it,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return xt}const yt={};yt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),yt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),yt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(ls),q(!1),$(cc),pt(n.CULL_FACE),S(Jn);function pt(N){c[N]!==!0&&(n.enable(N),c[N]=!0)}function Rt(N){c[N]!==!1&&(n.disable(N),c[N]=!1)}function Ut(N,gt){return h[N]!==gt?(n.bindFramebuffer(N,gt),h[N]=gt,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Ot(N,gt){let J=p,it=!1;if(N){J=d.get(gt),J===void 0&&(J=[],d.set(gt,J));const St=N.textures;if(J.length!==St.length||J[0]!==n.COLOR_ATTACHMENT0){for(let xt=0,Gt=St.length;xt<Gt;xt++)J[xt]=n.COLOR_ATTACHMENT0+xt;J.length=St.length,it=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,it=!0);it&&n.drawBuffers(J)}function ae(N){return v!==N?(n.useProgram(N),v=N,!0):!1}const A={[Si]:n.FUNC_ADD,[Ip]:n.FUNC_SUBTRACT,[Np]:n.FUNC_REVERSE_SUBTRACT};A[Fp]=n.MIN,A[Op]=n.MAX;const P={[Bp]:n.ZERO,[zp]:n.ONE,[Hp]:n.SRC_COLOR,[ra]:n.SRC_ALPHA,[Yp]:n.SRC_ALPHA_SATURATE,[Wp]:n.DST_COLOR,[Gp]:n.DST_ALPHA,[Vp]:n.ONE_MINUS_SRC_COLOR,[oa]:n.ONE_MINUS_SRC_ALPHA,[Xp]:n.ONE_MINUS_DST_COLOR,[kp]:n.ONE_MINUS_DST_ALPHA,[qp]:n.CONSTANT_COLOR,[jp]:n.ONE_MINUS_CONSTANT_COLOR,[Kp]:n.CONSTANT_ALPHA,[$p]:n.ONE_MINUS_CONSTANT_ALPHA};function S(N,gt,J,it,St,xt,Gt,ce,Ee,ee){if(N===Jn){y===!0&&(Rt(n.BLEND),y=!1);return}if(y===!1&&(pt(n.BLEND),y=!0),N!==Up){if(N!==m||ee!==T){if((f!==Si||E!==Si)&&(n.blendEquation(n.FUNC_ADD),f=Si,E=Si),ee)switch(N){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case fc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}w=null,b=null,U=null,D=null,C.set(0,0,0),I=0,m=N,T=ee}return}St=St||gt,xt=xt||J,Gt=Gt||it,(gt!==f||St!==E)&&(n.blendEquationSeparate(A[gt],A[St]),f=gt,E=St),(J!==w||it!==b||xt!==U||Gt!==D)&&(n.blendFuncSeparate(P[J],P[it],P[xt],P[Gt]),w=J,b=it,U=xt,D=Gt),(ce.equals(C)===!1||Ee!==I)&&(n.blendColor(ce.r,ce.g,ce.b,Ee),C.copy(ce),I=Ee),m=N,T=!1}function st(N,gt){N.side===Un?Rt(n.CULL_FACE):pt(n.CULL_FACE);let J=N.side===He;gt&&(J=!J),q(J),N.blending===ss&&N.transparent===!1?S(Jn):S(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const it=N.stencilWrite;a.setTest(it),it&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),rt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function $(N){N!==Dp?(pt(n.CULL_FACE),N!==L&&(N===cc?n.cullFace(n.BACK):N===Lp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Rt(n.CULL_FACE),L=N}function Z(N){N!==k&&(K&&n.lineWidth(N),k=N)}function rt(N,gt,J){N?(pt(n.POLYGON_OFFSET_FILL),(H!==gt||tt!==J)&&(n.polygonOffset(gt,J),H=gt,tt=J)):Rt(n.POLYGON_OFFSET_FILL)}function j(N){N?pt(n.SCISSOR_TEST):Rt(n.SCISSOR_TEST)}function g(N){N===void 0&&(N=n.TEXTURE0+Q-1),ht!==N&&(n.activeTexture(N),ht=N)}function _(N,gt,J){J===void 0&&(ht===null?J=n.TEXTURE0+Q-1:J=ht);let it=Mt[J];it===void 0&&(it={type:void 0,texture:void 0},Mt[J]=it),(it.type!==N||it.texture!==gt)&&(ht!==J&&(n.activeTexture(J),ht=J),n.bindTexture(N,gt||yt[N]),it.type=N,it.texture=gt)}function R(){const N=Mt[ht];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ut(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Dt(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){$t.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function dt(N){nt.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),nt.copy(N))}function It(N,gt){let J=u.get(gt);J===void 0&&(J=new WeakMap,u.set(gt,J));let it=J.get(N);it===void 0&&(it=n.getUniformBlockIndex(gt,N.name),J.set(N,it))}function Bt(N,gt){const it=u.get(gt).get(N);l.get(gt)!==it&&(n.uniformBlockBinding(gt,it,N.__bindingPointIndex),l.set(gt,it))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},ht=null,Mt={},h={},d=new WeakMap,p=[],v=null,y=!1,m=null,f=null,w=null,b=null,E=null,U=null,D=null,C=new qt(0,0,0),I=0,T=!1,M=null,L=null,k=null,H=null,tt=null,$t.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Rt,bindFramebuffer:Ut,drawBuffers:Ot,useProgram:ae,setBlending:S,setMaterial:st,setFlipSided:q,setCullFace:$,setLineWidth:Z,setPolygonOffset:rt,setScissorTest:j,activeTexture:g,bindTexture:_,unbindTexture:R,compressedTexImage2D:B,compressedTexImage3D:W,texImage2D:_t,texImage3D:At,updateUBOMapping:It,uniformBlockBinding:Bt,texStorage2D:Dt,texStorage3D:at,texSubImage2D:G,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:Lt,viewport:dt,reset:re}}function Xx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ht,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(g,_){return p?new OffscreenCanvas(g,_):Xs("canvas")}function y(g,_,R){let B=1;const W=j(g);if((W.width>R||W.height>R)&&(B=R/Math.max(W.width,W.height)),B<1)if(typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&g instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&g instanceof ImageBitmap||typeof VideoFrame<"u"&&g instanceof VideoFrame){const G=Math.floor(B*W.width),ut=Math.floor(B*W.height);h===void 0&&(h=v(G,ut));const ot=_?v(G,ut):h;return ot.width=G,ot.height=ut,ot.getContext("2d").drawImage(g,0,0,G,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+G+"x"+ut+")."),ot}else return"data"in g&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),g;return g}function m(g){return g.generateMipmaps}function f(g){n.generateMipmap(g)}function w(g){return g.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:g.isWebGL3DRenderTarget?n.TEXTURE_3D:g.isWebGLArrayRenderTarget||g.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(g,_,R,B,W=!1){if(g!==null){if(n[g]!==void 0)return n[g];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+g+"'")}let G=_;if(_===n.RED&&(R===n.FLOAT&&(G=n.R32F),R===n.HALF_FLOAT&&(G=n.R16F),R===n.UNSIGNED_BYTE&&(G=n.R8)),_===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.R8UI),R===n.UNSIGNED_SHORT&&(G=n.R16UI),R===n.UNSIGNED_INT&&(G=n.R32UI),R===n.BYTE&&(G=n.R8I),R===n.SHORT&&(G=n.R16I),R===n.INT&&(G=n.R32I)),_===n.RG&&(R===n.FLOAT&&(G=n.RG32F),R===n.HALF_FLOAT&&(G=n.RG16F),R===n.UNSIGNED_BYTE&&(G=n.RG8)),_===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RG8UI),R===n.UNSIGNED_SHORT&&(G=n.RG16UI),R===n.UNSIGNED_INT&&(G=n.RG32UI),R===n.BYTE&&(G=n.RG8I),R===n.SHORT&&(G=n.RG16I),R===n.INT&&(G=n.RG32I)),_===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RGB8UI),R===n.UNSIGNED_SHORT&&(G=n.RGB16UI),R===n.UNSIGNED_INT&&(G=n.RGB32UI),R===n.BYTE&&(G=n.RGB8I),R===n.SHORT&&(G=n.RGB16I),R===n.INT&&(G=n.RGB32I)),_===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),R===n.UNSIGNED_INT&&(G=n.RGBA32UI),R===n.BYTE&&(G=n.RGBA8I),R===n.SHORT&&(G=n.RGBA16I),R===n.INT&&(G=n.RGBA32I)),_===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),_===n.RGBA){const ut=W?Gr:Kt.getTransfer(B);R===n.FLOAT&&(G=n.RGBA32F),R===n.HALF_FLOAT&&(G=n.RGBA16F),R===n.UNSIGNED_BYTE&&(G=ut===ne?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function E(g,_){let R;return g?_===null||_===Ai||_===hs?R=n.DEPTH24_STENCIL8:_===In?R=n.DEPTH32F_STENCIL8:_===ks&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ai||_===hs?R=n.DEPTH_COMPONENT24:_===In?R=n.DEPTH_COMPONENT32F:_===ks&&(R=n.DEPTH_COMPONENT16),R}function U(g,_){return m(g)===!0||g.isFramebufferTexture&&g.minFilter!==un&&g.minFilter!==mn?Math.log2(Math.max(_.width,_.height))+1:g.mipmaps!==void 0&&g.mipmaps.length>0?g.mipmaps.length:g.isCompressedTexture&&Array.isArray(g.image)?_.mipmaps.length:1}function D(g){const _=g.target;_.removeEventListener("dispose",D),I(_),_.isVideoTexture&&c.delete(_)}function C(g){const _=g.target;_.removeEventListener("dispose",C),M(_)}function I(g){const _=i.get(g);if(_.__webglInit===void 0)return;const R=g.source,B=d.get(R);if(B){const W=B[_.__cacheKey];W.usedTimes--,W.usedTimes===0&&T(g),Object.keys(B).length===0&&d.delete(R)}i.remove(g)}function T(g){const _=i.get(g);n.deleteTexture(_.__webglTexture);const R=g.source,B=d.get(R);delete B[_.__cacheKey],o.memory.textures--}function M(g){const _=i.get(g);if(g.depthTexture&&(g.depthTexture.dispose(),i.remove(g.depthTexture)),g.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(_.__webglFramebuffer[B]))for(let W=0;W<_.__webglFramebuffer[B].length;W++)n.deleteFramebuffer(_.__webglFramebuffer[B][W]);else n.deleteFramebuffer(_.__webglFramebuffer[B]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[B])}else{if(Array.isArray(_.__webglFramebuffer))for(let B=0;B<_.__webglFramebuffer.length;B++)n.deleteFramebuffer(_.__webglFramebuffer[B]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let B=0;B<_.__webglColorRenderbuffer.length;B++)_.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[B]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const R=g.textures;for(let B=0,W=R.length;B<W;B++){const G=i.get(R[B]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),o.memory.textures--),i.remove(R[B])}i.remove(g)}let L=0;function k(){L=0}function H(){const g=L;return g>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+g+" texture units while this GPU supports only "+s.maxTextures),L+=1,g}function tt(g){const _=[];return _.push(g.wrapS),_.push(g.wrapT),_.push(g.wrapR||0),_.push(g.magFilter),_.push(g.minFilter),_.push(g.anisotropy),_.push(g.internalFormat),_.push(g.format),_.push(g.type),_.push(g.generateMipmaps),_.push(g.premultiplyAlpha),_.push(g.flipY),_.push(g.unpackAlignment),_.push(g.colorSpace),_.join()}function Q(g,_){const R=i.get(g);if(g.isVideoTexture&&Z(g),g.isRenderTargetTexture===!1&&g.version>0&&R.__version!==g.version){const B=g.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(R,g,_);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+_)}function K(g,_){const R=i.get(g);if(g.version>0&&R.__version!==g.version){nt(R,g,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+_)}function et(g,_){const R=i.get(g);if(g.version>0&&R.__version!==g.version){nt(R,g,_);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+_)}function V(g,_){const R=i.get(g);if(g.version>0&&R.__version!==g.version){ct(R,g,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+_)}const ht={[_a]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[ga]:n.MIRRORED_REPEAT},Mt={[un]:n.NEAREST,[om]:n.NEAREST_MIPMAP_NEAREST,[ir]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[_o]:n.LINEAR_MIPMAP_NEAREST,[Kn]:n.LINEAR_MIPMAP_LINEAR},Tt={[um]:n.NEVER,[_m]:n.ALWAYS,[hm]:n.LESS,[Uh]:n.LEQUAL,[fm]:n.EQUAL,[mm]:n.GEQUAL,[dm]:n.GREATER,[pm]:n.NOTEQUAL};function Pt(g,_){if(_.type===In&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===mn||_.magFilter===_o||_.magFilter===ir||_.magFilter===Kn||_.minFilter===mn||_.minFilter===_o||_.minFilter===ir||_.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(g,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(g,n.TEXTURE_WRAP_T,ht[_.wrapT]),(g===n.TEXTURE_3D||g===n.TEXTURE_2D_ARRAY)&&n.texParameteri(g,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(g,n.TEXTURE_MAG_FILTER,Mt[_.magFilter]),n.texParameteri(g,n.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(n.texParameteri(g,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(g,n.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===un||_.minFilter!==ir&&_.minFilter!==Kn||_.type===In&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(g,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $t(g,_){let R=!1;g.__webglInit===void 0&&(g.__webglInit=!0,_.addEventListener("dispose",D));const B=_.source;let W=d.get(B);W===void 0&&(W={},d.set(B,W));const G=tt(_);if(G!==g.__cacheKey){W[G]===void 0&&(W[G]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),W[G].usedTimes++;const ut=W[g.__cacheKey];ut!==void 0&&(W[g.__cacheKey].usedTimes--,ut.usedTimes===0&&T(_)),g.__cacheKey=G,g.__webglTexture=W[G].texture}return R}function nt(g,_,R){let B=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(B=n.TEXTURE_3D);const W=$t(g,_),G=_.source;e.bindTexture(B,g.__webglTexture,n.TEXTURE0+R);const ut=i.get(G);if(G.version!==ut.__version||W===!0){e.activeTexture(n.TEXTURE0+R);const ot=Kt.getPrimaries(Kt.workingColorSpace),ft=_.colorSpace===jn?null:Kt.getPrimaries(_.colorSpace),Dt=_.colorSpace===jn||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);let at=y(_.image,!1,s.maxTextureSize);at=rt(_,at);const _t=r.convert(_.format,_.colorSpace),At=r.convert(_.type);let Lt=b(_.internalFormat,_t,At,_.colorSpace,_.isVideoTexture);Pt(B,_);let dt;const It=_.mipmaps,Bt=_.isVideoTexture!==!0,re=ut.__version===void 0||W===!0,N=G.dataReady,gt=U(_,at);if(_.isDepthTexture)Lt=E(_.format===fs,_.type),re&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,At,null));else if(_.isDataTexture)if(It.length>0){Bt&&re&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,It[0].width,It[0].height);for(let J=0,it=It.length;J<it;J++)dt=It[J],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,_t,At,dt.data):e.texImage2D(n.TEXTURE_2D,J,Lt,dt.width,dt.height,0,_t,At,dt.data);_.generateMipmaps=!1}else Bt?(re&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height),N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,_t,At,at.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,At,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,It[0].width,It[0].height,at.depth);for(let J=0,it=It.length;J<it;J++)if(dt=It[J],_.format!==an)if(_t!==null)if(Bt){if(N)if(_.layerUpdates.size>0){const St=Bc(dt.width,dt.height,_.format,_.type);for(const xt of _.layerUpdates){const Gt=dt.data.subarray(xt*St/dt.data.BYTES_PER_ELEMENT,(xt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,xt,dt.width,dt.height,1,_t,Gt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,at.depth,_t,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Lt,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,dt.width,dt.height,at.depth,_t,At,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,Lt,dt.width,dt.height,at.depth,0,_t,At,dt.data)}else{Bt&&re&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,It[0].width,It[0].height);for(let J=0,it=It.length;J<it;J++)dt=It[J],_.format!==an?_t!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,Lt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,dt.width,dt.height,_t,At,dt.data):e.texImage2D(n.TEXTURE_2D,J,Lt,dt.width,dt.height,0,_t,At,dt.data)}else if(_.isDataArrayTexture)if(Bt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,at.width,at.height,at.depth),N)if(_.layerUpdates.size>0){const J=Bc(at.width,at.height,_.format,_.type);for(const it of _.layerUpdates){const St=at.data.subarray(it*J/at.data.BYTES_PER_ELEMENT,(it+1)*J/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,it,at.width,at.height,1,_t,At,St)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,At,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,_t,At,at.data);else if(_.isData3DTexture)Bt?(re&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,at.width,at.height,at.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,At,at.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,_t,At,at.data);else if(_.isFramebufferTexture){if(re)if(Bt)e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height);else{let J=at.width,it=at.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Lt,J,it,0,_t,At,null),J>>=1,it>>=1}}else if(It.length>0){if(Bt&&re){const J=j(It[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,J.width,J.height)}for(let J=0,it=It.length;J<it;J++)dt=It[J],Bt?N&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,_t,At,dt):e.texImage2D(n.TEXTURE_2D,J,Lt,_t,At,dt);_.generateMipmaps=!1}else if(Bt){if(re){const J=j(at);e.texStorage2D(n.TEXTURE_2D,gt,Lt,J.width,J.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,At,at)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,At,at);m(_)&&f(B),ut.__version=G.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function ct(g,_,R){if(_.image.length!==6)return;const B=$t(g,_),W=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,g.__webglTexture,n.TEXTURE0+R);const G=i.get(W);if(W.version!==G.__version||B===!0){e.activeTexture(n.TEXTURE0+R);const ut=Kt.getPrimaries(Kt.workingColorSpace),ot=_.colorSpace===jn?null:Kt.getPrimaries(_.colorSpace),ft=_.colorSpace===jn||ut===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Dt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,_t=[];for(let it=0;it<6;it++)!Dt&&!at?_t[it]=y(_.image[it],!0,s.maxCubemapSize):_t[it]=at?_.image[it].image:_.image[it],_t[it]=rt(_,_t[it]);const At=_t[0],Lt=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),It=b(_.internalFormat,Lt,dt,_.colorSpace),Bt=_.isVideoTexture!==!0,re=G.__version===void 0||B===!0,N=W.dataReady;let gt=U(_,At);Pt(n.TEXTURE_CUBE_MAP,_);let J;if(Dt){Bt&&re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,At.width,At.height);for(let it=0;it<6;it++){J=_t[it].mipmaps;for(let St=0;St<J.length;St++){const xt=J[St];_.format!==an?Lt!==null?Bt?N&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,0,0,xt.width,xt.height,Lt,xt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,It,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,0,0,xt.width,xt.height,Lt,dt,xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St,It,xt.width,xt.height,0,Lt,dt,xt.data)}}}else{if(J=_.mipmaps,Bt&&re){J.length>0&&gt++;const it=j(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,It,it.width,it.height)}for(let it=0;it<6;it++)if(at){Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,_t[it].width,_t[it].height,Lt,dt,_t[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,It,_t[it].width,_t[it].height,0,Lt,dt,_t[it].data);for(let St=0;St<J.length;St++){const Gt=J[St].image[it].image;Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,0,0,Gt.width,Gt.height,Lt,dt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,It,Gt.width,Gt.height,0,Lt,dt,Gt.data)}}else{Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Lt,dt,_t[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,It,Lt,dt,_t[it]);for(let St=0;St<J.length;St++){const xt=J[St];Bt?N&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,0,0,Lt,dt,xt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St+1,It,Lt,dt,xt.image[it])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),G.__version=W.version,_.onUpdate&&_.onUpdate(_)}g.__version=_.version}function yt(g,_,R,B,W,G){const ut=r.convert(R.format,R.colorSpace),ot=r.convert(R.type),ft=b(R.internalFormat,ut,ot,R.colorSpace),Dt=i.get(_),at=i.get(R);if(at.__renderTarget=_,!Dt.__hasExternalTextures){const _t=Math.max(1,_.width>>G),At=Math.max(1,_.height>>G);W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?e.texImage3D(W,G,ft,_t,At,_.depth,0,ut,ot,null):e.texImage2D(W,G,ft,_t,At,0,ut,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,g),$(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,W,at.__webglTexture,0,q(_)):(W===n.TEXTURE_2D||W>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,W,at.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(g,_,R){if(n.bindRenderbuffer(n.RENDERBUFFER,g),_.depthBuffer){const B=_.depthTexture,W=B&&B.isDepthTexture?B.type:null,G=E(_.stencilBuffer,W),ut=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=q(_);$(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,G,_.width,_.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,G,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,G,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,g)}else{const B=_.textures;for(let W=0;W<B.length;W++){const G=B[W],ut=r.convert(G.format,G.colorSpace),ot=r.convert(G.type),ft=b(G.internalFormat,ut,ot,G.colorSpace),Dt=q(_);R&&$(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,ft,_.width,_.height):$(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Dt,ft,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ft,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Rt(g,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,g),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(_.depthTexture);B.__renderTarget=_,(!B.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Q(_.depthTexture,0);const W=B.__webglTexture,G=q(_);if(_.depthTexture.format===rs)$(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(_.depthTexture.format===fs)$(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ut(g){const _=i.get(g),R=g.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==g.depthTexture){const B=g.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),B){const W=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,B.removeEventListener("dispose",W)};B.addEventListener("dispose",W),_.__depthDisposeCallback=W}_.__boundDepthTexture=B}if(g.depthTexture&&!_.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,g)}else if(R){_.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[B]),_.__webglDepthbuffer[B]===void 0)_.__webglDepthbuffer[B]=n.createRenderbuffer(),pt(_.__webglDepthbuffer[B],g,!1);else{const W=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=_.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,W,n.RENDERBUFFER,G)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),pt(_.__webglDepthbuffer,g,!1);else{const B=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,W)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(g,_,R){const B=i.get(g);_!==void 0&&yt(B.__webglFramebuffer,g,g.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ut(g)}function ae(g){const _=g.texture,R=i.get(g),B=i.get(_);g.addEventListener("dispose",C);const W=g.textures,G=g.isWebGLCubeRenderTarget===!0,ut=W.length>1;if(ut||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=_.version,o.memory.textures++),G){R.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)R.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else R.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){R.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)R.__webglFramebuffer[ot]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ut)for(let ot=0,ft=W.length;ot<ft;ot++){const Dt=i.get(W[ot]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),o.memory.textures++)}if(g.samples>0&&$(g)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ot=0;ot<W.length;ot++){const ft=W[ot];R.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ot]);const Dt=r.convert(ft.format,ft.colorSpace),at=r.convert(ft.type),_t=b(ft.internalFormat,Dt,at,ft.colorSpace,g.isXRRenderTarget===!0),At=q(g);n.renderbufferStorageMultisample(n.RENDERBUFFER,At,_t,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,R.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),g.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(R.__webglDepthRenderbuffer,g,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,_);for(let ot=0;ot<6;ot++)if(_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)yt(R.__webglFramebuffer[ot][ft],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else yt(R.__webglFramebuffer[ot],g,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(_)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ot=0,ft=W.length;ot<ft;ot++){const Dt=W[ot],at=i.get(Dt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Pt(n.TEXTURE_2D,Dt),yt(R.__webglFramebuffer,g,Dt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),m(Dt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((g.isWebGL3DRenderTarget||g.isWebGLArrayRenderTarget)&&(ot=g.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,B.__webglTexture),Pt(ot,_),_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)yt(R.__webglFramebuffer[ft],g,_,n.COLOR_ATTACHMENT0,ot,ft);else yt(R.__webglFramebuffer,g,_,n.COLOR_ATTACHMENT0,ot,0);m(_)&&f(ot),e.unbindTexture()}g.depthBuffer&&Ut(g)}function A(g){const _=g.textures;for(let R=0,B=_.length;R<B;R++){const W=_[R];if(m(W)){const G=w(g),ut=i.get(W).__webglTexture;e.bindTexture(G,ut),f(G),e.unbindTexture()}}}const P=[],S=[];function st(g){if(g.samples>0){if($(g)===!1){const _=g.textures,R=g.width,B=g.height;let W=n.COLOR_BUFFER_BIT;const G=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(g),ot=_.length>1;if(ot)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(g.resolveDepthBuffer&&(g.depthBuffer&&(W|=n.DEPTH_BUFFER_BIT),g.stencilBuffer&&g.resolveStencilBuffer&&(W|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);const Dt=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,R,B,0,0,R,B,W,n.NEAREST),l===!0&&(P.length=0,S.length=0,P.push(n.COLOR_ATTACHMENT0+ft),g.depthBuffer&&g.resolveDepthBuffer===!1&&(P.push(G),S.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,S)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);const Dt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(g.depthBuffer&&g.resolveDepthBuffer===!1&&l){const _=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function q(g){return Math.min(s.maxSamples,g.samples)}function $(g){const _=i.get(g);return g.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Z(g){const _=o.render.frame;c.get(g)!==_&&(c.set(g,_),g.update())}function rt(g,_){const R=g.colorSpace,B=g.format,W=g.type;return g.isCompressedTexture===!0||g.isVideoTexture===!0||R!==ds&&R!==jn&&(Kt.getTransfer(R)===ne?(B!==an||W!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),_}function j(g){return typeof HTMLImageElement<"u"&&g instanceof HTMLImageElement?(u.width=g.naturalWidth||g.width,u.height=g.naturalHeight||g.height):typeof VideoFrame<"u"&&g instanceof VideoFrame?(u.width=g.displayWidth,u.height=g.displayHeight):(u.width=g.width,u.height=g.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=$}function Yx(n,t){function e(i,s=jn){let r;const o=Kt.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===dl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===pl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Th)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return n.BYTE;if(i===yh)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===fl)return n.INT;if(i===Ai)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ks)return n.HALF_FLOAT;if(i===bh)return n.ALPHA;if(i===Ah)return n.RGB;if(i===an)return n.RGBA;if(i===wh)return n.LUMINANCE;if(i===Rh)return n.LUMINANCE_ALPHA;if(i===rs)return n.DEPTH_COMPONENT;if(i===fs)return n.DEPTH_STENCIL;if(i===Ch)return n.RED;if(i===ml)return n.RED_INTEGER;if(i===Ph)return n.RG;if(i===_l)return n.RG_INTEGER;if(i===gl)return n.RGBA_INTEGER;if(i===Pr||i===Dr||i===Lr||i===Ur)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===va||i===xa||i===Ma||i===Sa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ma)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ea||i===ya||i===Ta)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ea||i===ya)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ta)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ba||i===Aa||i===wa||i===Ra||i===Ca||i===Pa||i===Da||i===La||i===Ua||i===Ia||i===Na||i===Fa||i===Oa||i===Ba)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Aa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ra)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ca)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Da)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===La)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ua)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ia)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Na)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Fa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Oa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ba)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ir||i===za||i===Ha)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ir)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ha)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dh||i===Va||i===Ga||i===ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ir)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ga)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const qx={type:"move"};class Wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(qx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new As;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $x{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new ii({vertexShader:jx,fragmentShader:Kx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new be(new ms(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zx extends Pi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,v=null;const y=new $x,m=e.getContextAttributes();let f=null,w=null;const b=[],E=[],U=new Ht;let D=null;const C=new Ze;C.viewport=new he;const I=new Ze;I.viewport=new he;const T=[C,I],M=new g_;let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ct=b[nt];return ct===void 0&&(ct=new Wo,b[nt]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(nt){let ct=b[nt];return ct===void 0&&(ct=new Wo,b[nt]=ct),ct.getGripSpace()},this.getHand=function(nt){let ct=b[nt];return ct===void 0&&(ct=new Wo,b[nt]=ct),ct.getHandSpace()};function H(nt){const ct=E.indexOf(nt.inputSource);if(ct===-1)return;const yt=b[ct];yt!==void 0&&(yt.update(nt.inputSource,nt.frame,u||o),yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function tt(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",tt),s.removeEventListener("inputsourceschange",Q);for(let nt=0;nt<b.length;nt++){const ct=E[nt];ct!==null&&(E[nt]=null,b[nt].disconnect(ct))}L=null,k=null,y.reset(),t.setRenderTarget(f),p=null,d=null,h=null,s=null,w=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(D),t.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",tt),s.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ct={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new wi(p.framebufferWidth,p.framebufferHeight,{format:an,type:On,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let ct=null,yt=null,pt=null;m.depth&&(pt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=m.stencil?fs:rs,yt=m.stencil?hs:Ai);const Rt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new wi(d.textureWidth,d.textureHeight,{format:an,type:On,depthTexture:new jh(d.textureWidth,d.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await s.requestReferenceSpace(a),$t.setContext(s),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Q(nt){for(let ct=0;ct<nt.removed.length;ct++){const yt=nt.removed[ct],pt=E.indexOf(yt);pt>=0&&(E[pt]=null,b[pt].disconnect(yt))}for(let ct=0;ct<nt.added.length;ct++){const yt=nt.added[ct];let pt=E.indexOf(yt);if(pt===-1){for(let Ut=0;Ut<b.length;Ut++)if(Ut>=E.length){E.push(yt),pt=Ut;break}else if(E[Ut]===null){E[Ut]=yt,pt=Ut;break}if(pt===-1)break}const Rt=b[pt];Rt&&Rt.connect(yt)}}const K=new z,et=new z;function V(nt,ct,yt){K.setFromMatrixPosition(ct.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);const pt=K.distanceTo(et),Rt=ct.projectionMatrix.elements,Ut=yt.projectionMatrix.elements,Ot=Rt[14]/(Rt[10]-1),ae=Rt[14]/(Rt[10]+1),A=(Rt[9]+1)/Rt[5],P=(Rt[9]-1)/Rt[5],S=(Rt[8]-1)/Rt[0],st=(Ut[8]+1)/Ut[0],q=Ot*S,$=Ot*st,Z=pt/(-S+st),rt=Z*-S;if(ct.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(rt),nt.translateZ(Z),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Rt[10]===-1)nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const j=Ot+Z,g=ae+Z,_=q-rt,R=$+(pt-rt),B=A*ae/g*j,W=P*ae/g*j;nt.projectionMatrix.makePerspective(_,R,B,W,j,g),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ht(nt,ct){ct===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ct.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ct=nt.near,yt=nt.far;y.texture!==null&&(y.depthNear>0&&(ct=y.depthNear),y.depthFar>0&&(yt=y.depthFar)),M.near=I.near=C.near=ct,M.far=I.far=C.far=yt,(L!==M.near||k!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,k=M.far),C.layers.mask=nt.layers.mask|2,I.layers.mask=nt.layers.mask|4,M.layers.mask=C.layers.mask|I.layers.mask;const pt=nt.parent,Rt=M.cameras;ht(M,pt);for(let Ut=0;Ut<Rt.length;Ut++)ht(Rt[Ut],pt);Rt.length===2?V(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),Mt(nt,M,pt)};function Mt(nt,ct,yt){yt===null?nt.matrix.copy(ct.matrixWorld):(nt.matrix.copy(yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ct.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ct.projectionMatrix),nt.projectionMatrixInverse.copy(ct.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ws*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(nt){l=nt,d!==null&&(d.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(M)};let Tt=null;function Pt(nt,ct){if(c=ct.getViewerPose(u||o),v=ct,c!==null){const yt=c.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let pt=!1;yt.length!==M.cameras.length&&(M.cameras.length=0,pt=!0);for(let Ut=0;Ut<yt.length;Ut++){const Ot=yt[Ut];let ae=null;if(p!==null)ae=p.getViewport(Ot);else{const P=h.getViewSubImage(d,Ot);ae=P.viewport,Ut===0&&(t.setRenderTargetTextures(w,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(w))}let A=T[Ut];A===void 0&&(A=new Ze,A.layers.enable(Ut),A.viewport=new he,T[Ut]=A),A.matrix.fromArray(Ot.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Ot.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(ae.x,ae.y,ae.width,ae.height),Ut===0&&(M.matrix.copy(A.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pt===!0&&M.cameras.push(A)}const Rt=s.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Ut=h.getDepthInformation(yt[0]);Ut&&Ut.isValid&&Ut.texture&&y.init(t,Ut,s.renderState)}}for(let yt=0;yt<b.length;yt++){const pt=E[yt],Rt=b[yt];pt!==null&&Rt!==void 0&&Rt.update(pt,ct,u||o)}Tt&&Tt(nt,ct),ct.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ct}),v=null}const $t=new Zh;$t.setAnimationLoop(Pt),this.setAnimationLoop=function(nt){Tt=nt},this.dispose=function(){}}}const vi=new Mn,Jx=new fe;function Qx(n,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,kh(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),c(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,b):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),b=w.envMap,E=w.envMapRotation;b&&(m.envMap.value=b,vi.copy(E),vi.x*=-1,vi.y*=-1,vi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.envMapRotation.value.setFromMatrix4(Jx.makeRotationFromEuler(vi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=b*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function tM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const E=b.program;i.uniformBlockBinding(w,E)}function u(w,b){let E=s[w.id];E===void 0&&(v(w),E=c(w),s[w.id]=E,w.addEventListener("dispose",m));const U=b.program;i.updateUBOMapping(w,U);const D=t.render.frame;r[w.id]!==D&&(d(w),r[w.id]=D)}function c(w){const b=h();w.__bindingPointIndex=b;const E=n.createBuffer(),U=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,U,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=s[w.id],E=w.uniforms,U=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,C=E.length;D<C;D++){const I=Array.isArray(E[D])?E[D]:[E[D]];for(let T=0,M=I.length;T<M;T++){const L=I[T];if(p(L,D,T,U)===!0){const k=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let tt=0;for(let Q=0;Q<H.length;Q++){const K=H[Q],et=y(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,k+tt,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,tt),tt+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,b,E,U){const D=w.value,C=b+"_"+E;if(U[C]===void 0)return typeof D=="number"||typeof D=="boolean"?U[C]=D:U[C]=D.clone(),!0;{const I=U[C];if(typeof D=="number"||typeof D=="boolean"){if(I!==D)return U[C]=D,!0}else if(I.equals(D)===!1)return I.copy(D),!0}return!1}function v(w){const b=w.uniforms;let E=0;const U=16;for(let C=0,I=b.length;C<I;C++){const T=Array.isArray(b[C])?b[C]:[b[C]];for(let M=0,L=T.length;M<L;M++){const k=T[M],H=Array.isArray(k.value)?k.value:[k.value];for(let tt=0,Q=H.length;tt<Q;tt++){const K=H[tt],et=y(K),V=E%U,ht=V%et.boundary,Mt=V+ht;E+=ht,Mt!==0&&U-Mt<et.storage&&(E+=U-Mt),k.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=et.storage}}}const D=E%U;return D>0&&(E+=U-D),w.__size=E,w.__cache={},this}function y(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:u,dispose:f}}class eM{constructor(t={}){const{canvas:e=Im(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=Qn,this.toneMappingExposure=1;const E=this;let U=!1,D=0,C=0,I=null,T=-1,M=null;const L=new he,k=new he;let H=null;const tt=new qt(0);let Q=0,K=e.width,et=e.height,V=1,ht=null,Mt=null;const Tt=new he(0,0,K,et),Pt=new he(0,0,K,et);let $t=!1;const nt=new Ml;let ct=!1,yt=!1;const pt=new fe,Rt=new fe,Ut=new z,Ot=new he,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function P(){return I===null?V:1}let S=i;function st(x,F){return e.getContext(x,F)}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ul}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",xt,!1),S===null){const F="webgl2";if(S=st(F,x),S===null)throw st(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let q,$,Z,rt,j,g,_,R,B,W,G,ut,ot,ft,Dt,at,_t,At,Lt,dt,It,Bt,re,N;function gt(){q=new u0(S),q.init(),Bt=new Yx(S,q),$=new s0(S,q,t,Bt),Z=new Wx(S,q),$.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),rt=new d0(S),j=new Dx,g=new Xx(S,q,Z,j,$,Bt,rt),_=new o0(E),R=new c0(E),B=new M_(S),re=new n0(S,B),W=new h0(S,B,rt,re),G=new m0(S,W,B,rt),Lt=new p0(S,$,g),at=new r0(j),ut=new Px(E,_,R,q,$,re,at),ot=new Qx(E,j),ft=new Ux,Dt=new zx(q),At=new e0(E,_,R,Z,G,p,l),_t=new Gx(E,G,$),N=new tM(S,rt,$,Z),dt=new i0(S,q,rt),It=new f0(S,q,rt),rt.programs=ut.programs,E.capabilities=$,E.extensions=q,E.properties=j,E.renderLists=ft,E.shadowMap=_t,E.state=Z,E.info=rt}gt();const J=new Zx(E,S);this.xr=J,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const x=q.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=q.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(x){x!==void 0&&(V=x,this.setSize(K,et,!1))},this.getSize=function(x){return x.set(K,et)},this.setSize=function(x,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=x,et=F,e.width=Math.floor(x*V),e.height=Math.floor(F*V),X===!0&&(e.style.width=x+"px",e.style.height=F+"px"),this.setViewport(0,0,x,F)},this.getDrawingBufferSize=function(x){return x.set(K*V,et*V).floor()},this.setDrawingBufferSize=function(x,F,X){K=x,et=F,V=X,e.width=Math.floor(x*X),e.height=Math.floor(F*X),this.setViewport(0,0,x,F)},this.getCurrentViewport=function(x){return x.copy(L)},this.getViewport=function(x){return x.copy(Tt)},this.setViewport=function(x,F,X,Y){x.isVector4?Tt.set(x.x,x.y,x.z,x.w):Tt.set(x,F,X,Y),Z.viewport(L.copy(Tt).multiplyScalar(V).round())},this.getScissor=function(x){return x.copy(Pt)},this.setScissor=function(x,F,X,Y){x.isVector4?Pt.set(x.x,x.y,x.z,x.w):Pt.set(x,F,X,Y),Z.scissor(k.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(x){Z.setScissorTest($t=x)},this.setOpaqueSort=function(x){ht=x},this.setTransparentSort=function(x){Mt=x},this.getClearColor=function(x){return x.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(x=!0,F=!0,X=!0){let Y=0;if(x){let O=!1;if(I!==null){const lt=I.texture.format;O=lt===gl||lt===_l||lt===ml}if(O){const lt=I.texture.type,vt=lt===On||lt===Ai||lt===ks||lt===hs||lt===dl||lt===pl,Et=At.getClearColor(),bt=At.getClearAlpha(),Nt=Et.r,Ft=Et.g,wt=Et.b;vt?(v[0]=Nt,v[1]=Ft,v[2]=wt,v[3]=bt,S.clearBufferuiv(S.COLOR,0,v)):(y[0]=Nt,y[1]=Ft,y[2]=wt,y[3]=bt,S.clearBufferiv(S.COLOR,0,y))}else Y|=S.COLOR_BUFFER_BIT}F&&(Y|=S.DEPTH_BUFFER_BIT),X&&(Y|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),At.dispose(),ft.dispose(),Dt.dispose(),j.dispose(),_.dispose(),R.dispose(),G.dispose(),re.dispose(),N.dispose(),ut.dispose(),J.dispose(),J.removeEventListener("sessionstart",bl),J.removeEventListener("sessionend",Al),li.stop()};function it(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const x=rt.autoReset,F=_t.enabled,X=_t.autoUpdate,Y=_t.needsUpdate,O=_t.type;gt(),rt.autoReset=x,_t.enabled=F,_t.autoUpdate=X,_t.needsUpdate=Y,_t.type=O}function xt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Gt(x){const F=x.target;F.removeEventListener("dispose",Gt),ce(F)}function ce(x){Ee(x),j.remove(x)}function Ee(x){const F=j.get(x).programs;F!==void 0&&(F.forEach(function(X){ut.releaseProgram(X)}),x.isShaderMaterial&&ut.releaseShaderCache(x))}this.renderBufferDirect=function(x,F,X,Y,O,lt){F===null&&(F=ae);const vt=O.isMesh&&O.matrixWorld.determinant()<0,Et=sf(x,F,X,Y,O);Z.setMaterial(Y,vt);let bt=X.index,Nt=1;if(Y.wireframe===!0){if(bt=W.getWireframeAttribute(X),bt===void 0)return;Nt=2}const Ft=X.drawRange,wt=X.attributes.position;let Yt=Ft.start*Nt,Zt=(Ft.start+Ft.count)*Nt;lt!==null&&(Yt=Math.max(Yt,lt.start*Nt),Zt=Math.min(Zt,(lt.start+lt.count)*Nt)),bt!==null?(Yt=Math.max(Yt,0),Zt=Math.min(Zt,bt.count)):wt!=null&&(Yt=Math.max(Yt,0),Zt=Math.min(Zt,wt.count));const pe=Zt-Yt;if(pe<0||pe===1/0)return;re.setup(O,Y,Et,X,bt);let ue,jt=dt;if(bt!==null&&(ue=B.get(bt),jt=It,jt.setIndex(ue)),O.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*P()),jt.setMode(S.LINES)):jt.setMode(S.TRIANGLES);else if(O.isLine){let Ct=Y.linewidth;Ct===void 0&&(Ct=1),Z.setLineWidth(Ct*P()),O.isLineSegments?jt.setMode(S.LINES):O.isLineLoop?jt.setMode(S.LINE_LOOP):jt.setMode(S.LINE_STRIP)}else O.isPoints?jt.setMode(S.POINTS):O.isSprite&&jt.setMode(S.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ct=O._multiDrawStarts,Se=O._multiDrawCounts,Jt=O._multiDrawCount,tn=bt?B.get(bt).bytesPerElement:1,Di=j.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<Jt;Ve++)Di.setValue(S,"_gl_DrawID",Ve),jt.render(Ct[Ve]/tn,Se[Ve])}else if(O.isInstancedMesh)jt.renderInstances(Yt,pe,O.count);else if(X.isInstancedBufferGeometry){const Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Se=Math.min(X.instanceCount,Ct);jt.renderInstances(Yt,pe,Se)}else jt.render(Yt,pe)};function ee(x,F,X){x.transparent===!0&&x.side===Un&&x.forceSinglePass===!1?(x.side=He,x.needsUpdate=!0,Qs(x,F,X),x.side=ni,x.needsUpdate=!0,Qs(x,F,X),x.side=Un):Qs(x,F,X)}this.compile=function(x,F,X=null){X===null&&(X=x),f=Dt.get(X),f.init(F),b.push(f),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),x!==X&&x.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(f.pushLight(O),O.castShadow&&f.pushShadow(O))}),f.setupLights();const Y=new Set;return x.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const lt=O.material;if(lt)if(Array.isArray(lt))for(let vt=0;vt<lt.length;vt++){const Et=lt[vt];ee(Et,X,O),Y.add(Et)}else ee(lt,X,O),Y.add(lt)}),b.pop(),f=null,Y},this.compileAsync=function(x,F,X=null){const Y=this.compile(x,F,X);return new Promise(O=>{function lt(){if(Y.forEach(function(vt){j.get(vt).currentProgram.isReady()&&Y.delete(vt)}),Y.size===0){O(x);return}setTimeout(lt,10)}q.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Qe=null;function Sn(x){Qe&&Qe(x)}function bl(){li.stop()}function Al(){li.start()}const li=new Zh;li.setAnimationLoop(Sn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(x){Qe=x,J.setAnimationLoop(x),x===null?li.stop():li.start()},J.addEventListener("sessionstart",bl),J.addEventListener("sessionend",Al),this.render=function(x,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,F,I),f=Dt.get(x,b.length),f.init(F),b.push(f),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),nt.setFromProjectionMatrix(Rt),yt=this.localClippingEnabled,ct=at.init(this.clippingPlanes,yt),m=ft.get(x,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){const lt=E.xr.getDepthSensingMesh();lt!==null&&eo(lt,F,-1/0,E.sortObjects)}eo(x,F,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(ht,Mt),A=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,A&&At.addToRenderList(m,x),this.info.render.frame++,ct===!0&&at.beginShadows();const X=f.state.shadowsArray;_t.render(X,x,F),ct===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,O=m.transmissive;if(f.setupLights(),F.isArrayCamera){const lt=F.cameras;if(O.length>0)for(let vt=0,Et=lt.length;vt<Et;vt++){const bt=lt[vt];Rl(Y,O,x,bt)}A&&At.render(x);for(let vt=0,Et=lt.length;vt<Et;vt++){const bt=lt[vt];wl(m,x,bt,bt.viewport)}}else O.length>0&&Rl(Y,O,x,F),A&&At.render(x),wl(m,x,F);I!==null&&(g.updateMultisampleRenderTarget(I),g.updateRenderTargetMipmap(I)),x.isScene===!0&&x.onAfterRender(E,x,F),re.resetDefaultState(),T=-1,M=null,b.pop(),b.length>0?(f=b[b.length-1],ct===!0&&at.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function eo(x,F,X,Y){if(x.visible===!1)return;if(x.layers.test(F.layers)){if(x.isGroup)X=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(F);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||nt.intersectsSprite(x)){Y&&Ot.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Rt);const vt=G.update(x),Et=x.material;Et.visible&&m.push(x,vt,Et,X,Ot.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||nt.intersectsObject(x))){const vt=G.update(x),Et=x.material;if(Y&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ot.copy(x.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ot.copy(vt.boundingSphere.center)),Ot.applyMatrix4(x.matrixWorld).applyMatrix4(Rt)),Array.isArray(Et)){const bt=vt.groups;for(let Nt=0,Ft=bt.length;Nt<Ft;Nt++){const wt=bt[Nt],Yt=Et[wt.materialIndex];Yt&&Yt.visible&&m.push(x,vt,Yt,X,Ot.z,wt)}}else Et.visible&&m.push(x,vt,Et,X,Ot.z,null)}}const lt=x.children;for(let vt=0,Et=lt.length;vt<Et;vt++)eo(lt[vt],F,X,Y)}function wl(x,F,X,Y){const O=x.opaque,lt=x.transmissive,vt=x.transparent;f.setupLightsView(X),ct===!0&&at.setGlobalState(E.clippingPlanes,X),Y&&Z.viewport(L.copy(Y)),O.length>0&&Js(O,F,X),lt.length>0&&Js(lt,F,X),vt.length>0&&Js(vt,F,X),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Rl(x,F,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new wi(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Ks:On,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Kt.workingColorSpace}));const lt=f.state.transmissionRenderTarget[Y.id],vt=Y.viewport||L;lt.setSize(vt.z,vt.w);const Et=E.getRenderTarget();E.setRenderTarget(lt),E.getClearColor(tt),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),A&&At.render(X);const bt=E.toneMapping;E.toneMapping=Qn;const Nt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),ct===!0&&at.setGlobalState(E.clippingPlanes,Y),Js(x,X,Y),g.updateMultisampleRenderTarget(lt),g.updateRenderTargetMipmap(lt),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ft=!1;for(let wt=0,Yt=F.length;wt<Yt;wt++){const Zt=F[wt],pe=Zt.object,ue=Zt.geometry,jt=Zt.material,Ct=Zt.group;if(jt.side===Un&&pe.layers.test(Y.layers)){const Se=jt.side;jt.side=He,jt.needsUpdate=!0,Cl(pe,X,Y,ue,jt,Ct),jt.side=Se,jt.needsUpdate=!0,Ft=!0}}Ft===!0&&(g.updateMultisampleRenderTarget(lt),g.updateRenderTargetMipmap(lt))}E.setRenderTarget(Et),E.setClearColor(tt,Q),Nt!==void 0&&(Y.viewport=Nt),E.toneMapping=bt}function Js(x,F,X){const Y=F.isScene===!0?F.overrideMaterial:null;for(let O=0,lt=x.length;O<lt;O++){const vt=x[O],Et=vt.object,bt=vt.geometry,Nt=Y===null?vt.material:Y,Ft=vt.group;Et.layers.test(X.layers)&&Cl(Et,F,X,bt,Nt,Ft)}}function Cl(x,F,X,Y,O,lt){x.onBeforeRender(E,F,X,Y,O,lt),x.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),O.onBeforeRender(E,F,X,Y,x,lt),O.transparent===!0&&O.side===Un&&O.forceSinglePass===!1?(O.side=He,O.needsUpdate=!0,E.renderBufferDirect(X,F,Y,O,x,lt),O.side=ni,O.needsUpdate=!0,E.renderBufferDirect(X,F,Y,O,x,lt),O.side=Un):E.renderBufferDirect(X,F,Y,O,x,lt),x.onAfterRender(E,F,X,Y,O,lt)}function Qs(x,F,X){F.isScene!==!0&&(F=ae);const Y=j.get(x),O=f.state.lights,lt=f.state.shadowsArray,vt=O.state.version,Et=ut.getParameters(x,O.state,lt,F,X),bt=ut.getProgramCacheKey(Et);let Nt=Y.programs;Y.environment=x.isMeshStandardMaterial?F.environment:null,Y.fog=F.fog,Y.envMap=(x.isMeshStandardMaterial?R:_).get(x.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&x.envMap===null?F.environmentRotation:x.envMapRotation,Nt===void 0&&(x.addEventListener("dispose",Gt),Nt=new Map,Y.programs=Nt);let Ft=Nt.get(bt);if(Ft!==void 0){if(Y.currentProgram===Ft&&Y.lightsStateVersion===vt)return Dl(x,Et),Ft}else Et.uniforms=ut.getUniforms(x),x.onBeforeCompile(Et,E),Ft=ut.acquireProgram(Et,bt),Nt.set(bt,Ft),Y.uniforms=Et.uniforms;const wt=Y.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(wt.clippingPlanes=at.uniform),Dl(x,Et),Y.needsLights=of(x),Y.lightsStateVersion=vt,Y.needsLights&&(wt.ambientLightColor.value=O.state.ambient,wt.lightProbe.value=O.state.probe,wt.directionalLights.value=O.state.directional,wt.directionalLightShadows.value=O.state.directionalShadow,wt.spotLights.value=O.state.spot,wt.spotLightShadows.value=O.state.spotShadow,wt.rectAreaLights.value=O.state.rectArea,wt.ltc_1.value=O.state.rectAreaLTC1,wt.ltc_2.value=O.state.rectAreaLTC2,wt.pointLights.value=O.state.point,wt.pointLightShadows.value=O.state.pointShadow,wt.hemisphereLights.value=O.state.hemi,wt.directionalShadowMap.value=O.state.directionalShadowMap,wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,wt.spotShadowMap.value=O.state.spotShadowMap,wt.spotLightMatrix.value=O.state.spotLightMatrix,wt.spotLightMap.value=O.state.spotLightMap,wt.pointShadowMap.value=O.state.pointShadowMap,wt.pointShadowMatrix.value=O.state.pointShadowMatrix),Y.currentProgram=Ft,Y.uniformsList=null,Ft}function Pl(x){if(x.uniformsList===null){const F=x.currentProgram.getUniforms();x.uniformsList=Nr.seqWithValue(F.seq,x.uniforms)}return x.uniformsList}function Dl(x,F){const X=j.get(x);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function sf(x,F,X,Y,O){F.isScene!==!0&&(F=ae),g.resetTextureUnits();const lt=F.fog,vt=Y.isMeshStandardMaterial?F.environment:null,Et=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ds,bt=(Y.isMeshStandardMaterial?R:_).get(Y.envMap||vt),Nt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ft=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),wt=!!X.morphAttributes.position,Yt=!!X.morphAttributes.normal,Zt=!!X.morphAttributes.color;let pe=Qn;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pe=E.toneMapping);const ue=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,jt=ue!==void 0?ue.length:0,Ct=j.get(Y),Se=f.state.lights;if(ct===!0&&(yt===!0||x!==M)){const Pe=x===M&&Y.id===T;at.setState(Y,x,Pe)}let Jt=!1;Y.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==Se.state.version||Ct.outputColorSpace!==Et||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==bt||Y.fog===!0&&Ct.fog!==lt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==at.numPlanes||Ct.numIntersection!==at.numIntersection)||Ct.vertexAlphas!==Nt||Ct.vertexTangents!==Ft||Ct.morphTargets!==wt||Ct.morphNormals!==Yt||Ct.morphColors!==Zt||Ct.toneMapping!==pe||Ct.morphTargetsCount!==jt)&&(Jt=!0):(Jt=!0,Ct.__version=Y.version);let tn=Ct.currentProgram;Jt===!0&&(tn=Qs(Y,F,O));let Di=!1,Ve=!1,vs=!1;const le=tn.getUniforms(),qe=Ct.uniforms;if(Z.useProgram(tn.program)&&(Di=!0,Ve=!0,vs=!0),Y.id!==T&&(T=Y.id,Ve=!0),Di||M!==x){Z.buffers.depth.getReversed()?(pt.copy(x.projectionMatrix),Fm(pt),Om(pt),le.setValue(S,"projectionMatrix",pt)):le.setValue(S,"projectionMatrix",x.projectionMatrix),le.setValue(S,"viewMatrix",x.matrixWorldInverse);const Be=le.map.cameraPosition;Be!==void 0&&Be.setValue(S,Ut.setFromMatrixPosition(x.matrixWorld)),$.logarithmicDepthBuffer&&le.setValue(S,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&le.setValue(S,"isOrthographic",x.isOrthographicCamera===!0),M!==x&&(M=x,Ve=!0,vs=!0)}if(O.isSkinnedMesh){le.setOptional(S,O,"bindMatrix"),le.setOptional(S,O,"bindMatrixInverse");const Pe=O.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),le.setValue(S,"boneTexture",Pe.boneTexture,g))}O.isBatchedMesh&&(le.setOptional(S,O,"batchingTexture"),le.setValue(S,"batchingTexture",O._matricesTexture,g),le.setOptional(S,O,"batchingIdTexture"),le.setValue(S,"batchingIdTexture",O._indirectTexture,g),le.setOptional(S,O,"batchingColorTexture"),O._colorsTexture!==null&&le.setValue(S,"batchingColorTexture",O._colorsTexture,g));const je=X.morphAttributes;if((je.position!==void 0||je.normal!==void 0||je.color!==void 0)&&Lt.update(O,X,tn),(Ve||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,le.setValue(S,"receiveShadow",O.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(qe.envMap.value=bt,qe.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&F.environment!==null&&(qe.envMapIntensity.value=F.environmentIntensity),Ve&&(le.setValue(S,"toneMappingExposure",E.toneMappingExposure),Ct.needsLights&&rf(qe,vs),lt&&Y.fog===!0&&ot.refreshFogUniforms(qe,lt),ot.refreshMaterialUniforms(qe,Y,V,et,f.state.transmissionRenderTarget[x.id]),Nr.upload(S,Pl(Ct),qe,g)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Nr.upload(S,Pl(Ct),qe,g),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&le.setValue(S,"center",O.center),le.setValue(S,"modelViewMatrix",O.modelViewMatrix),le.setValue(S,"normalMatrix",O.normalMatrix),le.setValue(S,"modelMatrix",O.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Pe=Y.uniformsGroups;for(let Be=0,no=Pe.length;Be<no;Be++){const ci=Pe[Be];N.update(ci,tn),N.bind(ci,tn)}}return tn}function rf(x,F){x.ambientLightColor.needsUpdate=F,x.lightProbe.needsUpdate=F,x.directionalLights.needsUpdate=F,x.directionalLightShadows.needsUpdate=F,x.pointLights.needsUpdate=F,x.pointLightShadows.needsUpdate=F,x.spotLights.needsUpdate=F,x.spotLightShadows.needsUpdate=F,x.rectAreaLights.needsUpdate=F,x.hemisphereLights.needsUpdate=F}function of(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(x,F,X){j.get(x.texture).__webglTexture=F,j.get(x.depthTexture).__webglTexture=X;const Y=j.get(x);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,F){const X=j.get(x);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(x,F=0,X=0){I=x,D=F,C=X;let Y=!0,O=null,lt=!1,vt=!1;if(x){const bt=j.get(x);if(bt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(S.FRAMEBUFFER,null),Y=!1;else if(bt.__webglFramebuffer===void 0)g.setupRenderTarget(x);else if(bt.__hasExternalTextures)g.rebindTextures(x,j.get(x.texture).__webglTexture,j.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const wt=x.depthTexture;if(bt.__boundDepthTexture!==wt){if(wt!==null&&j.has(wt)&&(x.width!==wt.image.width||x.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");g.setupDepthRenderbuffer(x)}}const Nt=x.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(vt=!0);const Ft=j.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ft[F])?O=Ft[F][X]:O=Ft[F],lt=!0):x.samples>0&&g.useMultisampledRTT(x)===!1?O=j.get(x).__webglMultisampledFramebuffer:Array.isArray(Ft)?O=Ft[X]:O=Ft,L.copy(x.viewport),k.copy(x.scissor),H=x.scissorTest}else L.copy(Tt).multiplyScalar(V).floor(),k.copy(Pt).multiplyScalar(V).floor(),H=$t;if(Z.bindFramebuffer(S.FRAMEBUFFER,O)&&Y&&Z.drawBuffers(x,O),Z.viewport(L),Z.scissor(k),Z.setScissorTest(H),lt){const bt=j.get(x.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,X)}else if(vt){const bt=j.get(x.texture),Nt=F||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,bt.__webglTexture,X||0,Nt)}T=-1},this.readRenderTargetPixels=function(x,F,X,Y,O,lt,vt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=j.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){Z.bindFramebuffer(S.FRAMEBUFFER,Et);try{const bt=x.texture,Nt=bt.format,Ft=bt.type;if(!$.textureFormatReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=x.width-Y&&X>=0&&X<=x.height-O&&S.readPixels(F,X,Y,O,Bt.convert(Nt),Bt.convert(Ft),lt)}finally{const bt=I!==null?j.get(I).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(x,F,X,Y,O,lt,vt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=j.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&vt!==void 0&&(Et=Et[vt]),Et){const bt=x.texture,Nt=bt.format,Ft=bt.type;if(!$.textureFormatReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=x.width-Y&&X>=0&&X<=x.height-O){Z.bindFramebuffer(S.FRAMEBUFFER,Et);const wt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,wt),S.bufferData(S.PIXEL_PACK_BUFFER,lt.byteLength,S.STREAM_READ),S.readPixels(F,X,Y,O,Bt.convert(Nt),Bt.convert(Ft),0);const Yt=I!==null?j.get(I).__webglFramebuffer:null;Z.bindFramebuffer(S.FRAMEBUFFER,Yt);const Zt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Nm(S,Zt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,wt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,lt),S.deleteBuffer(wt),S.deleteSync(Zt),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,F=null,X=0){x.isTexture!==!0&&($i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,x=arguments[1]);const Y=Math.pow(2,-X),O=Math.floor(x.image.width*Y),lt=Math.floor(x.image.height*Y),vt=F!==null?F.x:0,Et=F!==null?F.y:0;g.setTexture2D(x,0),S.copyTexSubImage2D(S.TEXTURE_2D,X,0,0,vt,Et,O,lt),Z.unbindTexture()};const af=S.createFramebuffer(),lf=S.createFramebuffer();this.copyTextureToTexture=function(x,F,X=null,Y=null,O=0,lt=null){x.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,x=arguments[1],F=arguments[2],lt=arguments[3]||0,X=null),lt===null&&(O!==0?($i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),lt=O,O=0):lt=0);let vt,Et,bt,Nt,Ft,wt,Yt,Zt,pe;const ue=x.isCompressedTexture?x.mipmaps[lt]:x.image;if(X!==null)vt=X.max.x-X.min.x,Et=X.max.y-X.min.y,bt=X.isBox3?X.max.z-X.min.z:1,Nt=X.min.x,Ft=X.min.y,wt=X.isBox3?X.min.z:0;else{const je=Math.pow(2,-O);vt=Math.floor(ue.width*je),Et=Math.floor(ue.height*je),x.isDataArrayTexture?bt=ue.depth:x.isData3DTexture?bt=Math.floor(ue.depth*je):bt=1,Nt=0,Ft=0,wt=0}Y!==null?(Yt=Y.x,Zt=Y.y,pe=Y.z):(Yt=0,Zt=0,pe=0);const jt=Bt.convert(F.format),Ct=Bt.convert(F.type);let Se;F.isData3DTexture?(g.setTexture3D(F,0),Se=S.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(g.setTexture2DArray(F,0),Se=S.TEXTURE_2D_ARRAY):(g.setTexture2D(F,0),Se=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,F.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,F.unpackAlignment);const Jt=S.getParameter(S.UNPACK_ROW_LENGTH),tn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Di=S.getParameter(S.UNPACK_SKIP_PIXELS),Ve=S.getParameter(S.UNPACK_SKIP_ROWS),vs=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,ue.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ue.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Nt),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ft),S.pixelStorei(S.UNPACK_SKIP_IMAGES,wt);const le=x.isDataArrayTexture||x.isData3DTexture,qe=F.isDataArrayTexture||F.isData3DTexture;if(x.isDepthTexture){const je=j.get(x),Pe=j.get(F),Be=j.get(je.__renderTarget),no=j.get(Pe.__renderTarget);Z.bindFramebuffer(S.READ_FRAMEBUFFER,Be.__webglFramebuffer),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,no.__webglFramebuffer);for(let ci=0;ci<bt;ci++)le&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(x).__webglTexture,O,wt+ci),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,j.get(F).__webglTexture,lt,pe+ci)),S.blitFramebuffer(Nt,Ft,vt,Et,Yt,Zt,vt,Et,S.DEPTH_BUFFER_BIT,S.NEAREST);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(O!==0||x.isRenderTargetTexture||j.has(x)){const je=j.get(x),Pe=j.get(F);Z.bindFramebuffer(S.READ_FRAMEBUFFER,af),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,lf);for(let Be=0;Be<bt;Be++)le?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,je.__webglTexture,O,wt+Be):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,je.__webglTexture,O),qe?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,lt,pe+Be):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pe.__webglTexture,lt),O!==0?S.blitFramebuffer(Nt,Ft,vt,Et,Yt,Zt,vt,Et,S.COLOR_BUFFER_BIT,S.NEAREST):qe?S.copyTexSubImage3D(Se,lt,Yt,Zt,pe+Be,Nt,Ft,vt,Et):S.copyTexSubImage2D(Se,lt,Yt,Zt,Nt,Ft,vt,Et);Z.bindFramebuffer(S.READ_FRAMEBUFFER,null),Z.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else qe?x.isDataTexture||x.isData3DTexture?S.texSubImage3D(Se,lt,Yt,Zt,pe,vt,Et,bt,jt,Ct,ue.data):F.isCompressedArrayTexture?S.compressedTexSubImage3D(Se,lt,Yt,Zt,pe,vt,Et,bt,jt,ue.data):S.texSubImage3D(Se,lt,Yt,Zt,pe,vt,Et,bt,jt,Ct,ue):x.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,lt,Yt,Zt,vt,Et,jt,Ct,ue.data):x.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,lt,Yt,Zt,ue.width,ue.height,jt,ue.data):S.texSubImage2D(S.TEXTURE_2D,lt,Yt,Zt,vt,Et,jt,Ct,ue);S.pixelStorei(S.UNPACK_ROW_LENGTH,Jt),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,tn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Di),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(S.UNPACK_SKIP_IMAGES,vs),lt===0&&F.generateMipmaps&&S.generateMipmap(Se),Z.unbindTexture()},this.copyTextureToTexture3D=function(x,F,X=null,Y=null,O=0){return x.isTexture!==!0&&($i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,x=arguments[2],F=arguments[3],O=arguments[4]||0),$i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,F,X,Y,O)},this.initRenderTarget=function(x){j.get(x).__webglFramebuffer===void 0&&g.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?g.setTextureCube(x,0):x.isData3DTexture?g.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?g.setTexture2DArray(x,0):g.setTexture2D(x,0),Z.unbindTexture()},this.resetState=function(){D=0,C=0,I=null,Z.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}}const cu={type:"change"},Tl={type:"start"},nf={type:"end"},Tr=new Oh,uu=new qn,nM=Math.cos(70*Um.DEG2RAD),_e=new z,ze=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xo=1e-6;class iM extends v_{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Zi.ROTATE,TWO:Zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Ri,this._lastTargetPosition=new z,this._quat=new Ri().setFromUnitVectors(t.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Oc,this._sphericalDelta=new Oc,this._scale=1,this._panOffset=new z,this._rotateStart=new Ht,this._rotateEnd=new Ht,this._rotateDelta=new Ht,this._panStart=new Ht,this._panEnd=new Ht,this._panDelta=new Ht,this._dollyStart=new Ht,this._dollyEnd=new Ht,this._dollyDelta=new Ht,this._dollyDirection=new z,this._mouse=new Ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rM.bind(this),this._onPointerDown=sM.bind(this),this._onPointerUp=oM.bind(this),this._onContextMenu=dM.bind(this),this._onMouseWheel=cM.bind(this),this._onKeyDown=uM.bind(this),this._onTouchStart=hM.bind(this),this._onTouchMove=fM.bind(this),this._onMouseDown=aM.bind(this),this._onMouseMove=lM.bind(this),this._interceptControlDown=pM.bind(this),this._interceptControlUp=mM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cu),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=ze:i>Math.PI&&(i-=ze),s<-Math.PI?s+=ze:s>Math.PI&&(s-=ze),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new z(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Tr.origin.copy(this.object.position),Tr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Tr.direction))<nM?this.object.lookAt(this.target):(uu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Tr.intersectPlane(uu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xo||this._lastTargetPosition.distanceToSquared(this.target)>Xo?(this.dispatchEvent(cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ze/60*this.autoRotateSpeed*t:ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ze*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function sM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function rM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function oM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(nf),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function aM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case is.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case is.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Tl)}function lM(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function cM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(Tl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(nf))}function uM(n){this.enabled!==!1&&this._handleKeyDown(n)}function hM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case Zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case Zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case Zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Tl)}function fM(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function dM(n){this.enabled!==!1&&n.preventDefault()}function pM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const _M={class:"controls"},gM={class:"control-group"},vM={class:"control-group"},xM=Vu({__name:"DoorScene",setup(n){const t=lo(null),e=lo(2),i=lo(4);let s=null,r=null;const o={fov:75,near:.1,far:1e3,position:new z(0,2,5)},a={enableDamping:!0,dampingFactor:.25,screenSpacePanning:!1,minDistance:1,maxDistance:1e3,maxPolarAngle:Math.PI/2},l=f=>`/three-door/textures/${f}`,u=new f_,c=new Map,h=async f=>{const w=l(f);return c.has(w)?c.get(w):new Promise(b=>{u.load(w,E=>{c.set(w,E),b(E)})})},d=(()=>{let f=null,w=null;return(b,E)=>{const U=new As,D=.1;f||(f=new _i({color:6636321})),w||(w=new _i({color:13421772}));const C=new ti(b-2*D,E-2*D,.05),I=new _i({map:c.get(l("wood.jpg"))}),T=new be(C,I);T.castShadow=!0,T.receiveShadow=!0,U.add(T);const M=(H,tt)=>{if(!f)throw new Error("Frame material is not initialized");const Q=new be(H,f);return Q.position.copy(tt),Q.castShadow=!0,Q.receiveShadow=!0,Q},L={horizontal:new ti(b,D,.05),vertical:new ti(D,E,.05)};U.add(M(L.horizontal,new z(0,E/2-D/2,0)),M(L.horizontal,new z(0,-E/2+D/2,0)),M(L.vertical,new z(-b/2+D/2,0,0)),M(L.vertical,new z(b/2-D/2,0,0)));const k=new be(new Ys(.05,.05,.2,32),w);return k.rotation.z=Math.PI/2,k.position.set(b/2-D-.1,0,.05),k.castShadow=!0,k.receiveShadow=!0,U.add(k),U.position.y=E/2-2,U}})();async function p(){if(!t.value)return;const f=new s_,w=new Ze(o.fov,window.innerWidth/window.innerHeight,o.near,o.far);w.position.copy(o.position);const b=new eM({antialias:!0});b.setSize(window.innerWidth,window.innerHeight),b.shadowMap.enabled=!0,b.shadowMap.type=Mh,t.value.appendChild(b.domElement);const E=new iM(w,b.domElement);Object.assign(E,a),await Promise.all([h("wood.jpg"),h("marble.jpg"),h("wall.jpg")]);const U=new qh(512,{generateMipmaps:!0,minFilter:Kn}),D=new Xh(1,1e3,U);f.add(D);const C=new Ys(.5,.5,2,32),I=new _i({envMap:U.texture,reflectivity:1,specular:new qt(16777215),shininess:100}),T=new be(C,I);T.position.set(-1,-1,2),T.castShadow=!0,T.receiveShadow=!0,f.add(T);const M=d(e.value,i.value);f.add(M);const L=new be(new ms(20,20),new _i({map:c.get(l("marble.jpg"))}));L.rotation.x=-Math.PI/2,L.position.y=-2,L.receiveShadow=!0,f.add(L);const k=new be(new ms(20,10),new _i({map:c.get(l("wall.jpg"))}));k.position.set(0,3,-5),k.receiveShadow=!0,f.add(k);const H=new be(new Sl(.75,1.5,4),new _i({color:255}));H.position.set(1,-1.25,2),H.castShadow=!0,H.receiveShadow=!0,f.add(H);const tt=new __(4210752),Q=new m_(16777215,1);Q.position.set(5,10,7.5),Q.castShadow=!0,Q.shadow.mapSize.width=1024,Q.shadow.mapSize.height=1024,Q.shadow.camera.near=.5,Q.shadow.camera.far=50,f.add(tt,Q),s={scene:f,camera:w,renderer:b,controls:E,door:M,cylinder:T,cubeCamera:D}}function v(){if(!s)return;const{scene:f,camera:w,renderer:b,controls:E,cylinder:U,cubeCamera:D}=s;U.visible=!1,D.position.copy(U.position),D.update(b,f),U.visible=!0,E.update(),b.render(f,w),r=requestAnimationFrame(v)}const y=()=>{if(!s)return;const{camera:f,renderer:w}=s;f.aspect=window.innerWidth/window.innerHeight,f.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)},m=(f,w)=>{if(!s)return;const{scene:b,door:E}=s;b.remove(E);const U=d(f,w);b.add(U),s.door=U};return wr([e,i],([f,w])=>{m(f,w)}),Xu(async()=>{await p(),window.addEventListener("resize",y),v()}),Yu(()=>{if(r!==null&&cancelAnimationFrame(r),window.removeEventListener("resize",y),c.forEach(f=>f.dispose()),c.clear(),s){const{renderer:f}=s;f.dispose()}}),(f,w)=>(fh(),Wd("div",{ref_key:"container",ref:t},[rn("div",_M,[rn("div",gM,[w[2]||(w[2]=rn("label",{for:"width"},"Width:",-1)),Fl(rn("input",{type:"range",id:"width","onUpdate:modelValue":w[0]||(w[0]=b=>e.value=b),min:"1",max:"5",step:"0.1"},null,512),[[ac,e.value]]),rn("span",null,qo(e.value)+"m",1)]),rn("div",vM,[w[3]||(w[3]=rn("label",{for:"height"},"Height:",-1)),Fl(rn("input",{type:"range",id:"height","onUpdate:modelValue":w[1]||(w[1]=b=>i.value=b),min:"2",max:"8",step:"0.1"},null,512),[[ac,i.value]]),rn("span",null,qo(i.value)+"m",1)])])],512))}}),MM=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},SM=MM(xM,[["__scopeId","data-v-d8946c4e"]]),EM=Vu({__name:"App",setup(n){return(t,e)=>(fh(),Xd(SM))}});Rp(EM).mount("#app");
