import{G as d,K as f,L as S,w as $,u as z,o as y,c as w,a as b,M as h}from"./index-8rIJEY-i.js";function W(i,t){var e;const n=d();return f(()=>{n.value=i()},{...t,flush:(e=t==null?void 0:t.flush)!=null?e:"sync"}),S(n)}function u(i){return typeof i=="function"?i():z(i)}typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const c=()=>{};function v(i,t){function e(...n){return new Promise((r,s)=>{Promise.resolve(i(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(r).catch(s)})}return e}const _=i=>i();function g(i,t={}){let e,n,r=c;const s=a=>{clearTimeout(a),r(),r=c};return a=>{const x=u(i),p=u(t.maxWait);return e&&s(e),x<=0||p!==void 0&&p<=0?(n&&(s(n),n=null),Promise.resolve(a())):new Promise((o,m)=>{r=t.rejectOnCancel?m:o,p&&!n&&(n=setTimeout(()=>{e&&s(e),n=null,o(a())},p)),e=setTimeout(()=>{n&&s(n),n=null,o(a())},x)})}}function N(i,t,e={}){const{eventFilter:n=_,...r}=e;return $(i,v(n,t),r)}function k(i,t,e={}){const{debounce:n=0,maxWait:r=void 0,...s}=e;return N(i,t,{...s,eventFilter:g(n,{maxWait:r})})}var K=(i,t)=>{const e=i.__vccOpts||i;for(const[n,r]of t)e[n]=r;return e},l={appendKeyframes:(i,t)=>{if(!(window!=null&&window.document))return;const e=document.createElement("style");e.setAttribute("id",i),e.innerHTML=`@keyframes ${i} {${t}}`,document.body.appendChild(e)},removeKeyframes:i=>{var e;if(!(window!=null&&window.document))return;const t=document.getElementById(i);t&&((e=t.parentNode)==null||e.removeChild(t))}};const P={name:"PixelSpinner",props:{animationDuration:{type:Number,default:1500},size:{type:Number,default:70},color:{type:String,default:"#fff"}},data(){return{animationName:`pixel-spinner-animation-${Date.now()}`}},computed:{pixelSize(){return this.size/7},spinnerStyle(){return{width:`${this.size}px`,height:`${this.size}px`}},spinnerInnerStyle(){return{animationDuration:`${this.animationDuration}ms`,animationName:this.animationName,width:`${this.pixelSize}px`,height:`${this.pixelSize}px`,backgroundColor:this.color,color:this.color,boxShadow:`
          ${this.pixelSize*1.5}px ${this.pixelSize*1.5}px 0 0,
          ${this.pixelSize*-1.5}px ${this.pixelSize*-1.5}px 0 0,
          ${this.pixelSize*1.5}px ${this.pixelSize*-1.5}px 0 0,
          ${this.pixelSize*-1.5}px ${this.pixelSize*1.5}px 0 0,
          0 ${this.pixelSize*1.5}px 0 0,
          ${this.pixelSize*1.5}px 0 0 0,
          ${this.pixelSize*-1.5}px 0 0 0,
          0 ${this.pixelSize*-1.5}px 0 0
        `}}},watch:{size:{handler:"updateAnimation",immediate:!0}},mounted(){this.updateAnimation()},beforeUnmount(){l.removeKeyframes(this.animationName)},methods:{updateAnimation(){l.removeKeyframes(this.animationName),l.appendKeyframes(this.animationName,this.generateKeyframes())},generateKeyframes(){return`
        50% {
          box-shadow:  ${this.pixelSize*2}px ${this.pixelSize*2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize*-1}px 0 0 0,
                       0 ${this.pixelSize*-1}px 0 0;
        }
        75% {
          box-shadow:  ${this.pixelSize*2}px ${this.pixelSize*2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*2}px ${this.pixelSize*-2}px 0 0,
                       ${this.pixelSize*-2}px ${this.pixelSize*2}px 0 0,
                       0 ${this.pixelSize}px 0 0,
                       ${this.pixelSize}px 0 0 0,
                       ${this.pixelSize*-1}px 0 0 0,
                       0 ${this.pixelSize*-1}px 0 0;
        }
        100% {
          transform: rotate(360deg);
        }`}}};function T(i,t,e,n,r,s){return y(),w("div",{class:"pixel-spinner",style:h(s.spinnerStyle)},[b("div",{class:"pixel-spinner-inner",style:h(s.spinnerInnerStyle)},null,4)],4)}var A=K(P,[["render",T]]);export{A as P,W as c,k as w};
