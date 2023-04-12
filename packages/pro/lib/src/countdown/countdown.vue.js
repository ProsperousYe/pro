"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue");require("./style/index.css");const s=e.defineComponent({name:"pro-countdown"}),p=e.defineComponent({...s,props:{type:null,time:null,format:null,autoStart:{type:Boolean},immediate:{type:Boolean},delay:null,onEnd:null,onTick:null,trigger:null},setup(l){const t=l;let n=e.ref(t.time);const r=()=>{if(t.immediate){const o=setInterval(()=>{n.value-=1e3,n.value<=0?(clearInterval(o),t.onEnd&&t.onEnd()):t.onTick&&t.onTick(n.value)},1e3)}else setTimeout(()=>{const o=setInterval(()=>{n.value-=1e3,n.value<=0?(clearInterval(o),t.onEnd&&t.onEnd()):t.onTick&&t.onTick(n.value)},1e3)},t.delay)},u=e.computed(()=>({[`pro-count--${t.type}`]:t.type})),a=e.computed(()=>Math.floor(n.value/36e5)),c=e.computed(()=>Math.floor(n.value%36e5/6e4)),i=e.computed(()=>Math.floor(n.value%6e4/1e3));return r(),(o,d)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["pro-count",e.unref(u)])},e.toDisplayString(e.unref(a))+" : "+e.toDisplayString(e.unref(c))+" : "+e.toDisplayString(e.unref(i)),3))}});exports.default=p;