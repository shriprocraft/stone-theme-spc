(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,6474,e=>{"use strict";var t=e.i(43476),a=e.i(71645),i=e.i(22016),o=e.i(72520);let r={aurora:{style:"streak",colors:["#f4efe9","#e9c2b8","#c2433f","#2a1e2a","#22395e","#6f97c2","#e5edf4"],scale:.7,warp:1.4,angle:-.62,gloss:.18,veins:0},ember:{style:"marble",colors:["#07090c","#16252c","#3d5f68","#1a1416","#a3201a","#ef4a2b","#ff8a5c"],scale:.62,warp:3.2,angle:-.5,gloss:.55,veins:.6},dusk:{style:"marble",colors:["#120c18","#3e2850","#8f6c9c","#2b1a24","#b3502f","#eab08a","#fbe7d2"],scale:.75,warp:3.6,angle:.8,gloss:.5,veins:.5},glacier:{style:"streak",colors:["#f7f8fa","#d9e2ea","#9fb4c7","#e8edf2","#bccbd8","#ffffff"],scale:.7,warp:1.6,angle:.35,gloss:.25,veins:0},verdant:{style:"marble",colors:["#070b08","#173024","#4f7a5a","#141812","#a7843a","#e9cf87","#fbf3d6"],scale:.7,warp:3.4,angle:2.1,gloss:.5,veins:.5}};function n(e){let t=e>>>0;return()=>{let e=t=t+0x6d2b79f5>>>0;return e=Math.imul(e^e>>>15,1|e),(((e^=e+Math.imul(e^e>>>7,61|e))^e>>>14)>>>0)/0x100000000}}function s(e){let t=0x811c9dc5;for(let a=0;a<e.length;a++)t=Math.imul(t^e.charCodeAt(a),0x1000193);return t>>>0}let l=new Map,c=[],g=!1;function d({art:e,seed:i,w:o,h:s,density:p,priority:f,className:h}){let m=a.useRef(null),[u,w]=a.useState(!1),b=JSON.stringify("string"==typeof e?r[e]:e),x=Math.round(o*p),v=Math.round(s*p);return a.useEffect(()=>{var e;let t,a,o=!0;return w(!1),(e=JSON.parse(b),t=JSON.stringify([e,i,x,v]),!(a=l.get(t))&&(a=new Promise(t=>{let a,o,r,s,l,d,p,h,m,u,w,b,y,k,j,C,K,A,M,N,S,V,R,F,I,E,P=c.length;for(;P>1&&c[P-1].priority>f;)P--;c.splice(P,0,{job:(a=Math.max(1,Math.round(x)),o=Math.max(1,Math.round(v)),s=(r=e.colors.length>=2?e.colors:["#111111","#eeeeee"]).map((e,t)=>{let a,i;return{t:t/(r.length-1),c:(3===(a=e.trim().replace(/^#/,"")).length&&(a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),[(i=/^[0-9a-f]{6}$/i.test(a)?parseInt(a,16):8421504)>>16&255,i>>8&255,255&i])}}),l=e.scale??.7,d=e.warp??3,p=e.gloss??.4,h=e.veins??0,m="streak"===e.style,u=function(e){let t=n(e),a=new Uint8Array(512),i=new Float32Array(512),o=[];for(let e=0;e<256;e++)o.push(e);for(let e=255;e>0;e--){let a=Math.floor(t()*(e+1)),i=o[e];o[e]=o[a],o[a]=i}for(let e=0;e<512;e++)a[e]=o[255&e];for(let e=0;e<256;e++){let a=t()*Math.PI*2;i[2*e]=Math.cos(a),i[2*e+1]=Math.sin(a)}let r=(e,t)=>{let o=Math.floor(e),r=Math.floor(t),n=e-o,s=t-r,l=255&o,c=255&r,g=2*a[l+a[c]],d=2*a[l+1+a[c]],p=2*a[l+a[c+1]],f=2*a[l+1+a[c+1]],h=i[g]*n+i[g+1]*s,m=i[d]*(n-1)+i[d+1]*s,u=i[p]*n+i[p+1]*(s-1),w=i[f]*(n-1)+i[f+1]*(s-1),b=n*n*n*(n*(6*n-15)+10);return h+b*(m-h)+s*s*s*(s*(6*s-15)+10)*(u-h+b*(w-u-m+h))};return(e,t,a)=>{let i=0,o=.5;for(let n=0;n<a;n++){i+=o*r(e,t);let a=1.6*e+1.2*t+7.1;t=-1.2*e+1.6*t+3.3,e=a,o*=.5}return i}}(977*i+13),b=50*(w=n(i+1))(),y=50*w(),j=Math.cos(k=(e.angle??0)+(w()-.5)*.5),C=Math.sin(k),K=Math.min(a,o),N=new Float32Array((A=Math.ceil(a/2)+3)*(M=Math.ceil(o/2)+3)),S=new Float32Array(A*M),V=new Float32Array(a*o),R=new Float32Array(a*o),F=new Uint8ClampedArray(a*o*4),I=0,E=e=>{for(let t=0;t<A;t++){let i=((t-1)*2-a/2)/K,r=((e-1)*2-o/2)/K,n=(i*j-r*C)*l,s=(i*C+r*j)*l;m&&(n*=.14,s*=2.2);let c=u(n+=b,s+=y,3),g=u(n+5.2,s+1.3,3),p=u(n+d*c+1.7,s+d*g+9.2,3),f=u(n+d*c+8.3,s+d*g+2.8,3);N[e*A+t]=u(n+d*p,s+d*f,4),S[e*A+t]=Math.sqrt(c*c+g*g)}},{width:a,height:o,pixels:F,step:e=>{if(I>=M)return!0;let t=Math.min(M,I+Math.max(1,e));for(;I<t;)E(I++);return!(I<M)&&((()=>{let e=(e,t,a,i)=>(-e+9*t+9*a-i)/16,t=new Float32Array(a*M);for(let i=0;i<M;i++){let o=i*A;for(let r=0;r<a;r++){let n=(r>>1)+1;t[i*a+r]=1&r?e(N[o+n-1],N[o+n],N[o+n+1],N[o+n+2]):N[o+n]}}for(let i=0;i<o;i++){let o=(i>>1)+1;for(let r=0;r<a;r++){V[i*a+r]=1&i?e(t[(o-1)*a+r],t[o*a+r],t[(o+1)*a+r],t[(o+2)*a+r]):t[o*a+r];let n=(r>>1)+1,s=S[o*A+n],l=1&r?(s+S[o*A+n+1])/2:s,c=1&i?1&r?(S[(o+1)*A+n]+S[(o+1)*A+n+1])/2:S[(o+1)*A+n]:l;R[i*a+r]=(l+c)/2}}})(),(()=>{let e=[],t=Math.max(1,Math.floor(V.length/4096));for(let a=0;a<V.length;a+=t)e.push(V[a]);e.sort((e,t)=>e-t);let i=e[Math.floor(.02*e.length)],r=1/(e[Math.floor(.98*e.length)]-i||1),n=r*K*.012;for(let e=0;e<o;e++)for(let t=0;t<a;t++){let l=e*a+t,c=(V[l]-i)*r;c=c<0?0:c>1?1:c;let g=1;for(;g<s.length-1&&s[g].t<c;)g++;let d=s[g-1],f=s[g],m=(c-d.t)/(f.t-d.t||1);m=(m=m<0?0:m>1?1:m)*m*(3-2*m);let u=(V[t<a-1?l+1:l]-V[t>0?l-1:l])*n,w=(V[e<o-1?l+a:l]-V[e>0?l-a:l])*n,b=(-(-.55*u)- -.65*w+.52)/Math.sqrt(u*u+w*w+1),x=Math.pow(b>0?b:0,24)*p*255,v=(.82+.28*b)*(1+.035*Math.sin(150*c+24*R[l]))*(1-h*Math.max(0,1-14*Math.abs(R[l]-.42))*.6);F[4*l]=(d.c[0]+(f.c[0]-d.c[0])*m)*v+x,F[4*l+1]=(d.c[1]+(f.c[1]-d.c[1])*m)*v+x,F[4*l+2]=(d.c[2]+(f.c[2]-d.c[2])*m)*v+x,F[4*l+3]=255}})(),!0)}}),priority:f,done:t}),function(){if(g)return;g=!0;let e=()=>{let t=performance.now()+7;for(;c.length&&performance.now()<t;){let e=c[0];if(e.job.step(4)){c.shift();let t=document.createElement("canvas");t.width=e.job.width,t.height=e.job.height,t.getContext("2d")?.putImageData(new ImageData(e.job.pixels,t.width,t.height),0,0),e.done(t)}}c.length?requestAnimationFrame(e):g=!1};requestAnimationFrame(e)}()}),l.set(t,a)),a).then(e=>{let t=m.current;o&&t&&(t.width=e.width,t.height=e.height,t.getContext("2d")?.drawImage(e,0,0),w(!0))}),()=>{o=!1}},[b,i,x,v,f]),(0,t.jsx)("canvas",{ref:m,"aria-hidden":"true",className:h,"data-ready":u||void 0,style:{width:o,height:s,maxWidth:"none"}})}let p="M0 56A22 22 0 0 1 22 34L146 34C170 34 172 0 198 0L318 0A22 22 0 0 1 340 22L340 250A22 22 0 0 1 318 272L22 272A22 22 0 0 1 0 250Z",f="M0 22A22 22 0 0 1 22 0L118 0C144 0 146 32 172 32L318 32A22 22 0 0 1 340 54L340 176A22 22 0 0 1 318 198L22 198A22 22 0 0 1 0 176Z",h=[{name:"Cover — final",meta:"PNG · 4.8 MB",art:"ember"},{name:"Moodboard",meta:"24 images",art:"dusk"},{name:"Brief.pdf",meta:"PDF · 1.2 MB"}];function m({label:e="My Files",meta:i,tone:o="light",art:r="aurora",seed:l=3,image:c,files:g=h,action:w="add",onAdd:b,onFilesChange:x,menu:v=[],labelPlacement:y="bottom-left",icon:k,corner:j,open:C,defaultOpen:K=!1,onOpenChange:A,onFileSelect:M,width:N=340,appear:S=!0,appearDelay:V=0,className:R,style:F}){let I=a.useId().replace(/:/g,""),E=a.useRef(null),P=a.useRef(null),L=a.useRef(null),z=a.useRef(null),G=a.useRef(null),[B,D]=a.useState(g),T=a.useRef(g.map((e,t)=>t)),O=a.useRef(g.length),[q,J]=a.useState(null),[W,$]=a.useState(0),[U,Y]=a.useState(K),X=C??U,H=a.useCallback(e=>{void 0===C&&Y(e),A?.(e)},[C,A]),[Z,Q]=a.useState(!1),[_,ee]=a.useState(!S),et=N/340,ea=Math.min(1.5,Math.max(1,window.devicePixelRatio||1))*et;a.useEffect(()=>{if(!S)return;let e=E.current;if(!e||"u"<typeof IntersectionObserver)return void ee(!0);let t=0,a=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a.disconnect(),t=window.setTimeout(()=>ee(!0),V))},{threshold:.25});return a.observe(e),()=>{a.disconnect(),window.clearTimeout(t)}},[S,V]),a.useEffect(()=>{let e=E.current;if(!e)return;let t=0,a=0,i=0,o=()=>{t=0,e.style.setProperty("--gf-px",a.toFixed(3)),e.style.setProperty("--gf-py",i.toFixed(3))},r=r=>{if("touch"===r.pointerType)return;let n=e.getBoundingClientRect();a=(r.clientX-n.left)/n.width*2-1,i=(r.clientY-n.top)/n.height*2-1,t||(t=requestAnimationFrame(o))},n=()=>{a=0,i=0,t||(t=requestAnimationFrame(o))};return e.addEventListener("pointermove",r),e.addEventListener("pointerleave",n),()=>{e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",n),cancelAnimationFrame(t)}},[]),a.useEffect(()=>{P.current?.toggleAttribute("inert",!X)},[X]),a.useEffect(()=>{if(!X&&!Z)return;let e=e=>{"Escape"===e.key&&(Z?(Q(!1),z.current?.focus()):(H(!1),L.current?.focus()))},t=e=>{let t=e.target;!Z||G.current?.contains(t)||z.current?.contains(t)||Q(!1),!X||Z||E.current?.contains(t)||H(!1)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",t),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",t)}},[X,Z,H]),a.useEffect(()=>{Z&&G.current?.querySelector("[role=menuitem]")?.focus()},[Z]);let ei=[{label:X?"Close folder":"Open folder",onSelect:()=>H(!X)},...v],eo=Math.max(0,B.length-4),er=B.slice(eo),en=B.length,es=i??en+(1===en?" item":" items");return(0,t.jsxs)("div",{ref:E,className:"gf-root"+(R?" "+R:""),"data-tone":o,"data-open":X||void 0,"data-entered":_||void 0,"data-place":y,style:{width:N,height:326*et,...F},children:[(0,t.jsx)("style",{children:u}),(0,t.jsx)("div",{className:"gf-stage",style:{transform:"translateY("+54*et+"px) scale("+et+")"},children:(0,t.jsxs)("div",{className:"gf-tilt",children:[(0,t.jsx)("div",{className:"gf-shadow","aria-hidden":"true"}),(0,t.jsxs)("div",{className:"gf-back",style:{clipPath:"path('"+p+"')"},"aria-hidden":"true",children:[c?(0,t.jsx)("img",{className:"gf-art",src:c,alt:"",width:364,height:296,draggable:!1}):"none"!==r?(0,t.jsx)(d,{className:"gf-art",art:r,seed:l,w:364,h:296,density:ea,priority:0}):null,(0,t.jsx)("div",{className:"gf-back-sheen"})]}),(0,t.jsx)("svg",{className:"gf-rim gf-back-rim",viewBox:"0 0 340 272","aria-hidden":"true",children:(0,t.jsx)("path",{d:p})}),(0,t.jsxs)("div",{className:"gf-front"+(W?" gf-front--bump":""),style:{clipPath:"path('"+f+"')"},children:[(0,t.jsx)("div",{className:"gf-tint","aria-hidden":"true"}),(0,t.jsx)("div",{className:"gf-spec","aria-hidden":"true"}),(0,t.jsxs)("svg",{className:"gf-rim gf-front-rim",viewBox:"0 0 340 198","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"gf-rim-"+I,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#fff",stopOpacity:"0.95"}),(0,t.jsx)("stop",{offset:"0.35",stopColor:"#fff",stopOpacity:"0.35"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#fff",stopOpacity:"0.12"})]})}),(0,t.jsx)("path",{d:f,stroke:"url(#gf-rim-"+I+")"})]}),(0,t.jsx)("button",{ref:L,type:"button",className:"gf-hit","aria-expanded":X,"aria-label":(X?"Close ":"Open ")+e+", "+en+(1===en?" item":" items"),onClick:()=>{Q(!1),H(!X)}}),(0,t.jsxs)("div",{className:"gf-label",children:[(0,t.jsx)("span",{className:"gf-title",children:e}),(0,t.jsx)("span",{className:"gf-meta",children:es},es)]}),k?(0,t.jsx)("div",{className:"gf-icon","aria-hidden":"true",children:k}):null,j?(0,t.jsx)("div",{className:"gf-corner",children:j}):null]},W),(0,t.jsx)("div",{ref:P,className:"gf-files",role:"list","aria-label":e+" contents",children:er.map((e,a)=>{var i;let o=T.current[eo+a],r=(i=er.length)<=1?0:a/(i-1)*2-1,l=n(s(e.name)+o),c=!!(e.art||e.image),g=(0,t.jsxs)(t.Fragment,{children:[c?e.image?(0,t.jsx)("img",{className:"gf-sheet-art",src:e.image,alt:"",width:272,height:184,draggable:!1,style:e.imagePosition?{objectPosition:e.imagePosition}:void 0}):(0,t.jsx)(d,{className:"gf-sheet-art",art:e.art,seed:s(e.name)%997,w:272,h:184,density:Math.min(ea,1.25),priority:1}):(0,t.jsxs)("span",{className:"gf-lines","aria-hidden":"true",children:[(0,t.jsx)("i",{style:{width:"86%"}}),(0,t.jsx)("i",{style:{width:"92%"}}),(0,t.jsx)("i",{style:{width:"64%"}}),(0,t.jsx)("i",{style:{width:"88%"}}),(0,t.jsx)("i",{style:{width:"42%"}})]}),(0,t.jsxs)("span",{className:"gf-sheet-head",children:[(0,t.jsx)("span",{className:"gf-sheet-name",children:e.name}),e.meta?(0,t.jsx)("span",{className:"gf-sheet-meta",children:e.meta}):null]})]}),p={className:"gf-sheet"+(c?" gf-sheet--art":"")+(o===q?" gf-sheet--drop":""),style:{"--gf-slot":r,"--gf-depth":er.length-1-a,"--gf-jx":((l()-.5)*10).toFixed(2)+"px","--gf-jr":((l()-.5)*3.2).toFixed(2)+"deg",zIndex:a+1},onAnimationEnd:o===q?()=>J(null):void 0};return(0,t.jsx)("div",{role:"listitem",className:"gf-sheet-slot",children:e.href?(0,t.jsx)("a",{...p,href:e.href,onClick:()=>M?.(e,eo+a),children:g}):(0,t.jsx)("button",{...p,type:"button",onClick:()=>M?.(e,eo+a),children:g})},o)})}),"none"!==w?(0,t.jsx)("button",{ref:z,type:"button",className:"gf-key gf-key--"+w,"aria-label":"add"===w?"Add a file to "+e:"More options for "+e,"aria-haspopup":"more"===w?"menu":void 0,"aria-expanded":"more"===w?Z:void 0,"aria-controls":"more"===w?"gf-menu-"+I:void 0,onClick:()=>{let e,t,a;return"add"===w?(e=b?.(B)||{name:"Untitled "+(B.length+1),meta:"Just now"},t=[...B,e],a=O.current++,void(T.current=[...T.current,a],D(t),J(a),$(e=>e+1),x?.(t))):Q(e=>!e)},children:"add"===w?(0,t.jsx)("svg",{className:"gf-glyph gf-glyph--plus",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,t.jsx)("path",{d:"M12 4.5v15M4.5 12h15"})},W):(0,t.jsxs)("svg",{className:"gf-glyph gf-glyph--more",viewBox:"0 0 30 12","aria-hidden":"true",children:[(0,t.jsx)("rect",{x:"1",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"11",y:"1.5",width:"8",height:"9",rx:"3.4"}),(0,t.jsx)("rect",{x:"21",y:"1.5",width:"8",height:"9",rx:"3.4"})]})}):null,"more"===w?(0,t.jsx)("div",{ref:G,id:"gf-menu-"+I,role:"menu","aria-label":e+" options",className:"gf-menu","data-open":Z||void 0,onKeyDown:e=>{let t=Array.from(G.current?.querySelectorAll("[role=menuitem]")??[]),a=t.indexOf(document.activeElement),i=a=>{e.preventDefault(),t[(a+t.length)%t.length]?.focus()};"ArrowDown"===e.key?i(a+1):"ArrowUp"===e.key?i(a-1):"Home"===e.key?i(0):"End"===e.key?i(t.length-1):"Tab"===e.key&&Q(!1)},children:ei.map((e,a)=>(0,t.jsx)("button",{type:"button",role:"menuitem",tabIndex:Z?-1:void 0,disabled:!Z,className:"gf-menu-item"+(e.danger?" gf-menu-item--danger":""),onClick:()=>{Q(!1),z.current?.focus(),e.onSelect?.()},children:e.label},e.label+a))}):null]})})]})}let u=`
.gf-root {
  --gf-px: 0;
  --gf-py: 0;
  --gf-ease: cubic-bezier(.2, .8, .2, 1);
  --gf-spring: cubic-bezier(.34, 1.36, .5, 1);
  --gf-hinge: 0deg;
  --gf-lift: 42px;
  --gf-spread: 0px;
  --gf-fan: 0deg;
  --gf-stack: 15px;
  --gf-ink: #141416;
  --gf-ink-soft: rgba(20, 20, 22, .55);
  position: relative;
  display: inline-block;
  flex: none;
  vertical-align: top;
  font-family: var(--font-sans), Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  isolation: isolate;
}
.gf-root[data-tone="dark"] { --gf-ink: #f5f5f7; --gf-ink-soft: rgba(245, 245, 247, .58); }
.gf-root:hover, .gf-root:focus-within { --gf-hinge: -11deg; --gf-lift: -34px; --gf-spread: 8px; --gf-fan: 1.4deg; --gf-stack: 10px; }
.gf-root[data-open] { --gf-hinge: -24deg; --gf-lift: -96px; --gf-spread: 40px; --gf-fan: 5deg; --gf-stack: 30px; }

.gf-stage {
  position: absolute;
  left: 0;
  top: 0;
  width: 340px;
  height: 272px;
  transform-origin: 0 0;
}
.gf-tilt {
  position: absolute;
  inset: 0;
  transform: perspective(1400px) rotateX(calc(var(--gf-py) * -3deg)) rotateY(calc(var(--gf-px) * 4deg));
  transition: transform .9s var(--gf-ease);
}

.gf-shadow {
  position: absolute;
  left: 18px;
  right: 18px;
  bottom: -6px;
  height: 60px;
  border-radius: 40px;
  background: rgba(16, 18, 24, .34);
  filter: blur(22px);
  transform: translateX(calc(var(--gf-px) * -8px));
  transition: transform .9s var(--gf-ease), opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-shadow { background: rgba(0, 0, 0, .62); }

.gf-back {
  position: absolute;
  inset: 0;
  overflow: hidden;
  background: linear-gradient(180deg, #f3f3f4 0%, #e3e3e6 100%);
}
.gf-root[data-tone="dark"] .gf-back { background: linear-gradient(180deg, #2a2a2e 0%, #121214 100%); }
.gf-art {
  position: absolute;
  left: -12px;
  top: -12px;
  max-width: none;
  object-fit: cover;
  transform: translate(calc(var(--gf-px) * -7px), calc(var(--gf-py) * -6px)) scale(1.02);
  transition: transform 1.1s var(--gf-ease), opacity 1.2s var(--gf-ease), filter 1.2s var(--gf-ease);
}
canvas.gf-art { opacity: 0; filter: blur(14px) saturate(.6); }
canvas.gf-art[data-ready] { opacity: 1; filter: none; }
.gf-back-sheen {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .22) 0%, rgba(255, 255, 255, 0) 22%),
    radial-gradient(120% 80% at 80% 0%, rgba(255, 255, 255, .16), rgba(255, 255, 255, 0) 60%);
  pointer-events: none;
}

.gf-rim {
  position: absolute;
  left: 0;
  top: 0;
  max-width: none;
  overflow: visible;
  pointer-events: none;
  fill: none;
}
.gf-back-rim { width: 340px; height: 272px; }
.gf-back-rim path { stroke: rgba(255, 255, 255, .45); stroke-width: 1; }
.gf-root[data-tone="dark"] .gf-back-rim path { stroke: rgba(255, 255, 255, .16); }

/* ---- files ---------------------------------------------------------------- */
.gf-files {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  /* nothing hangs out of the bottom of the pocket, however tall the stack */
  clip-path: inset(-400px -400px 10px -400px);
}
.gf-sheet-slot { display: contents; }
.gf-sheet {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  top: 96px;
  width: 272px;
  height: 184px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  pointer-events: auto;
  background: linear-gradient(180deg, #ffffff 0%, #f2f2f0 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .9),
    0 0 0 .5px rgba(0, 0, 0, .1),
    0 10px 26px -8px rgba(10, 12, 20, .28);
  transform-origin: 50% 100%;
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1))
    rotate(calc(var(--gf-jr) + var(--gf-slot) * var(--gf-fan)));
  transition:
    transform .75s var(--gf-spring) calc(var(--gf-depth) * 40ms),
    box-shadow .4s var(--gf-ease),
    translate .9s var(--gf-ease),
    opacity .9s var(--gf-ease);
}
.gf-root[data-tone="dark"] .gf-sheet { background: linear-gradient(180deg, #2c2c30 0%, #1c1c1f 100%); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .14), 0 0 0 .5px rgba(255, 255, 255, .08), 0 12px 28px -8px rgba(0, 0, 0, .7); }
.gf-sheet--art { background: #1a1a1d; }
.gf-root[data-open] .gf-sheet:hover,
.gf-root[data-open] .gf-sheet:focus-visible {
  transform:
    translate(calc(var(--gf-jx) + var(--gf-slot) * var(--gf-spread)), calc(var(--gf-lift) + var(--gf-depth) * var(--gf-stack) * -1 - 18px))
    rotate(calc(var(--gf-slot) * var(--gf-fan) * .6));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .1), 0 22px 40px -12px rgba(10, 12, 20, .42);
  transition-delay: 0s;
}
.gf-sheet:focus-visible { outline: 2px solid #4c8dff; outline-offset: 2px; }
.gf-sheet-art {
  position: absolute;
  left: 0;
  top: 0;
  width: 272px;
  height: 184px;
  max-width: none;
  object-fit: cover;
  transition: opacity .9s var(--gf-ease), filter .9s var(--gf-ease);
}
canvas.gf-sheet-art { opacity: 0; filter: blur(10px); }
canvas.gf-sheet-art[data-ready] { opacity: 1; filter: none; }
.gf-sheet--art::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(180deg, rgba(0, 0, 0, .42) 0%, rgba(0, 0, 0, 0) 34%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, .2);
  pointer-events: none;
}
.gf-sheet-head {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 11px;
  z-index: 1;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  white-space: nowrap;
}
.gf-sheet-name {
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12.5px;
  font-weight: 560;
  letter-spacing: -.005em;
  color: #18181b;
}
.gf-sheet-meta {
  flex: none;
  font-family: var(--font-sans), Georgia, serif;
  font-size: 10px;
  letter-spacing: .02em;
  color: rgba(24, 24, 27, .5);
}
.gf-root[data-tone="dark"] .gf-sheet-name, .gf-sheet--art .gf-sheet-name { color: #fafafa; }
.gf-root[data-tone="dark"] .gf-sheet-meta, .gf-sheet--art .gf-sheet-meta { color: rgba(250, 250, 250, .66); }
.gf-lines {
  position: absolute;
  left: 14px;
  right: 14px;
  top: 40px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}
.gf-lines i {
  display: block;
  height: 5px;
  border-radius: 3px;
  background: rgba(24, 24, 27, .08);
}
.gf-lines i:first-child { height: 9px; margin-bottom: 4px; background: rgba(24, 24, 27, .14); }
.gf-root[data-tone="dark"] .gf-lines i { background: rgba(255, 255, 255, .08); }
.gf-root[data-tone="dark"] .gf-lines i:first-child { background: rgba(255, 255, 255, .16); }

.gf-sheet--drop { animation: gf-drop .85s var(--gf-ease) both; }
@keyframes gf-drop {
  0% { translate: 0 -190px; rotate: -9deg; opacity: 0; }
  35% { opacity: 1; }
  72% { translate: 0 10px; rotate: 1deg; }
  100% { translate: 0 0; rotate: 0deg; opacity: 1; }
}

/* ---- front glass ----------------------------------------------------------- */
.gf-front {
  position: absolute;
  left: 0;
  top: 74px;
  width: 340px;
  height: 198px;
  z-index: 10;
  -webkit-backdrop-filter: blur(22px) saturate(1.5);
  backdrop-filter: blur(22px) saturate(1.5);
  transform-origin: 50% 100%;
  transform: perspective(760px) rotateX(var(--gf-hinge));
  transition: transform .8s var(--gf-spring), translate 1s var(--gf-ease), opacity 1s var(--gf-ease);
}
.gf-front--bump { animation: gf-bump .7s var(--gf-ease) .38s both; }
@keyframes gf-bump {
  0% { scale: 1; }
  35% { scale: 1.018 .975; }
  70% { scale: .996 1.006; }
  100% { scale: 1; }
}
.gf-tint {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .5) 42%, rgba(252, 252, 252, .93) 100%);
}
.gf-root[data-tone="dark"] .gf-tint {
  background: linear-gradient(180deg, rgba(18, 18, 20, .18) 0%, rgba(14, 14, 16, .62) 46%, rgba(8, 8, 10, .94) 100%);
}
.gf-spec {
  position: absolute;
  inset: 0;
  background: radial-gradient(260px 200px at calc(50% + var(--gf-px) * 46%) calc(30% + var(--gf-py) * 40%), rgba(255, 255, 255, .5), rgba(255, 255, 255, 0) 70%);
  mix-blend-mode: soft-light;
  opacity: .9;
  transition: background-position .6s var(--gf-ease);
  pointer-events: none;
}
.gf-root[data-tone="dark"] .gf-spec { mix-blend-mode: screen; opacity: .16; }
.gf-front-rim { width: 340px; height: 198px; }
.gf-front-rim path { stroke-width: 2.4; transition: stroke-width .3s var(--gf-ease); }
.gf-root[data-tone="dark"] .gf-front-rim { opacity: .55; }

.gf-hit {
  all: unset;
  position: absolute;
  inset: 0;
  z-index: 1;
  cursor: pointer;
}
.gf-hit:focus-visible ~ .gf-label .gf-title { text-decoration: underline; text-decoration-thickness: 1.5px; text-underline-offset: 4px; }
.gf-front:has(.gf-hit:focus-visible) .gf-front-rim path { stroke-width: 5; }

.gf-label {
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-width: 200px;
  pointer-events: none;
  color: var(--gf-ink);
}
.gf-root[data-place="bottom-left"] .gf-label { left: 28px; bottom: 32px; }
.gf-root[data-place="top-left"] .gf-label { left: 28px; top: 34px; }
.gf-root[data-place="top-right"] .gf-label { right: 32px; top: 52px; align-items: flex-start; }
.gf-title {
  font-size: 18px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -.012em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.gf-meta {
  font-family: var(--font-sans), Georgia, serif;
  font-size: 12px;
  letter-spacing: .03em;
  color: var(--gf-ink-soft);
  white-space: nowrap;
  animation: gf-roll .5s var(--gf-ease) both;
}
@keyframes gf-roll {
  from { opacity: 0; translate: 0 7px; filter: blur(3px); }
  to { opacity: 1; translate: 0 0; filter: blur(0); }
}

.gf-icon { position: absolute; left: 22px; top: 14px; z-index: 2; width: 100px; height: 100px; pointer-events: none; }
.gf-icon > * { width: 100%; height: 100%; object-fit: contain; }
.gf-corner { position: absolute; right: 24px; bottom: 38px; z-index: 3; }

/* ---- the key: + or \xb7\xb7\xb7 ------------------------------------------------------ */
.gf-key {
  all: unset;
  box-sizing: border-box;
  position: absolute;
  right: 22px;
  bottom: 22px;
  z-index: 12;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), background .35s var(--gf-ease);
}
.gf-key:hover { transform: translateY(-2px); }
.gf-key:active { transform: translateY(0) scale(.93); transition-duration: .12s; }
.gf-key:focus-visible { outline: 2px solid #4c8dff; outline-offset: 3px; }
.gf-key--add {
  color: #fff;
  background: radial-gradient(120% 90% at 50% 0%, #3a3a3f 0%, #121214 55%, #050506 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, .22),
    inset 0 -3px 8px rgba(0, 0, 0, .7),
    0 0 0 1px rgba(0, 0, 0, .75),
    0 14px 22px -8px rgba(0, 0, 0, .55),
    0 3px 6px -2px rgba(0, 0, 0, .35);
}
.gf-root[data-tone="dark"] .gf-key--add {
  color: #111113;
  background: radial-gradient(120% 90% at 50% 0%, #ffffff 0%, #ececee 55%, #d2d2d6 100%);
  box-shadow: inset 0 1px 0 #fff, inset 0 -3px 8px rgba(0, 0, 0, .14), 0 0 0 1px rgba(0, 0, 0, .4), 0 14px 22px -8px rgba(0, 0, 0, .7);
}
.gf-key--more {
  color: #111113;
  background: linear-gradient(180deg, rgba(255, 255, 255, .92) 0%, rgba(226, 226, 230, .82) 100%);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow:
    inset 0 1px 0 #fff,
    inset 0 -2px 4px rgba(0, 0, 0, .06),
    0 0 0 1px rgba(0, 0, 0, .16),
    0 10px 18px -8px rgba(0, 0, 0, .3);
}
.gf-root[data-tone="dark"] .gf-key--more {
  color: #f5f5f7;
  background: linear-gradient(180deg, rgba(255, 255, 255, .16) 0%, rgba(255, 255, 255, .06) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .22), 0 0 0 1px rgba(255, 255, 255, .1), 0 10px 18px -8px rgba(0, 0, 0, .6);
}
.gf-key--more[aria-expanded="true"] { transform: scale(.96); }
.gf-glyph { display: block; max-width: none; fill: none; stroke: currentColor; stroke-linecap: round; }
.gf-glyph--plus { width: 26px; height: 26px; stroke-width: 1.6; animation: gf-turn .6s var(--gf-spring); }
.gf-glyph--more { width: 30px; height: 12px; stroke-width: 1.7; }
@keyframes gf-turn { from { rotate: -90deg; } to { rotate: 0deg; } }

/* ---- menu ------------------------------------------------------------------- */
.gf-menu {
  position: absolute;
  right: 22px;
  bottom: 90px;
  z-index: 20;
  min-width: 176px;
  padding: 6px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  background: rgba(252, 252, 253, .72);
  -webkit-backdrop-filter: blur(24px) saturate(1.6);
  backdrop-filter: blur(24px) saturate(1.6);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .9), 0 0 0 .5px rgba(0, 0, 0, .14), 0 24px 48px -16px rgba(10, 12, 20, .4);
  transform-origin: 100% 100%;
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px) scale(.94);
  transition: opacity .2s var(--gf-ease), transform .32s var(--gf-spring), visibility 0s .32s;
}
.gf-menu[data-open] { opacity: 1; visibility: visible; transform: none; transition-delay: 0s; }
.gf-root[data-tone="dark"] .gf-menu { background: rgba(30, 30, 34, .72); box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 0 0 .5px rgba(255, 255, 255, .1), 0 24px 48px -16px rgba(0, 0, 0, .8); }
.gf-menu-item {
  all: unset;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 450;
  color: #18181b;
  cursor: pointer;
}
.gf-root[data-tone="dark"] .gf-menu-item { color: #f4f4f5; }
.gf-menu-item:hover, .gf-menu-item:focus-visible { background: rgba(24, 24, 27, .07); }
.gf-root[data-tone="dark"] .gf-menu-item:hover, .gf-root[data-tone="dark"] .gf-menu-item:focus-visible { background: rgba(255, 255, 255, .09); }
.gf-menu-item--danger { color: #d92d20; }
.gf-root[data-tone="dark"] .gf-menu-item--danger { color: #ff6b5e; }

/* ---- entrance: the folder assembles itself ---------------------------------- */
.gf-root:not([data-entered]) .gf-back,
.gf-root:not([data-entered]) .gf-back-rim { translate: 0 22px; opacity: 0; }
.gf-root:not([data-entered]) .gf-sheet { translate: 0 -120px; opacity: 0; }
.gf-root:not([data-entered]) .gf-front { translate: 0 46px; opacity: 0; }
.gf-root:not([data-entered]) .gf-key { opacity: 0; scale: .6; }
.gf-root:not([data-entered]) .gf-shadow { opacity: 0; }
.gf-back, .gf-back-rim { transition: translate 1s var(--gf-ease), opacity .9s var(--gf-ease); }
.gf-root[data-entered] .gf-sheet { transition-delay: calc(var(--gf-depth) * 40ms), 0s, calc(.18s + var(--gf-depth) * 90ms), calc(.18s + var(--gf-depth) * 90ms); }
.gf-root[data-entered] .gf-front { transition-delay: 0s, .42s, .42s; }
.gf-key { transition: transform .35s var(--gf-spring), box-shadow .35s var(--gf-ease), opacity .6s var(--gf-ease) .7s, scale .7s var(--gf-spring) .7s; }

@media (prefers-reduced-motion: reduce) {
  .gf-root *, .gf-root *::before, .gf-root *::after {
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    animation: none !important;
  }
  .gf-tilt { transform: none; }
}
`,w=[{slug:"social-growth-engine",business:"Social Growth Engine",industry:"Social Media Marketing",servicesUsed:["Social Media Marketing"],cover:{src:"/projects/social-growth-engine/cover.jpg",alt:"Meta Business Suite insights showing 886K+ Views, 418K+ Reach, Content interactions and 6.2K+ Link clicks for the Social Growth Engine campaign"},gallery:[{src:"/projects/social-growth-engine/sge-01.jpg",alt:"Meta Business Suite insights panel showing Views, Reach, Content interactions and Link clicks",caption:"886K+ Views | 418K+ Reach | +311.6K% Link Click Growth"},{src:"/projects/social-growth-engine/sge-02.jpg",alt:"Meta Business Suite insights panel showing Content interactions, Link clicks, Visits and Follows",caption:"6.2K+ Link Clicks (+311.6K%) | 4.9K+ Visits (+495.3%) | +3.3K% Content Interactions"},{src:"/projects/social-growth-engine/sge-03.jpg",alt:"Facebook content overview showing Views, Watch time and Content interactions",caption:"+7.5K% Watch Time | +326.7% Viewers | +158.3% Content Interactions"},{src:"/projects/social-growth-engine/sge-04.jpg",alt:"Instagram content overview showing Views, Reach and Content interactions",caption:"Achieved approximately 44.3K% in engagement rates."},{src:"/projects/social-growth-engine/sge-05.jpg",alt:"Instagram account insights showing Views and audience breakdown by content type",caption:"46.4K+ Organic Views | Expanding Audience Reach | Consistent Content Performance"},{src:"/projects/social-growth-engine/sge-07.jpg",alt:"Instagram account insights donut chart showing Views and top content by views",caption:"+990.2% Account Reach Growth | 4.7K+ Views | 76.2% Reels Engagement Density"},{src:"/projects/social-growth-engine/sge-08.jpg",alt:"Instagram mobile app Views screen showing Accounts reached growth",caption:"32.6K+ Total Views | +5,020% Reach Growth | 98.6% New Audience Discovery"},{src:"/projects/social-growth-engine/sge-09.jpg",alt:"Meta insights four-panel view showing Views, Follows, Reach and Interactions",caption:"44.6K+ Views Delivered | 37.1K Reach Milestone | Exceptional New Audience Growth"},{src:"/projects/social-growth-engine/sge-10.jpg",alt:"Views and Viewers metrics panel showing total views and unique viewers",caption:"33.6K+ Total Views (+100%) | 25.0K+ Unique Viewers (+100%) | Fresh Campaign Traction"},{src:"/projects/social-growth-engine/sge-11.jpg",alt:"Views and Reach metrics panel showing total views and unique reach",caption:"33.9K+ Total Views (+9.1K%) | 27.1K+ Unique Reach (+56.3K%) | High-Velocity Campaign Momentum"},{src:"/projects/social-growth-engine/sge-12.jpg",alt:"Meta insights four-panel view showing Views, Follows, Visits and Interactions",caption:"45.3K+ Views Achieved | 36.5K+ Audience Reached | Exceptional Brand Visibility Growth"},{src:"/projects/social-growth-engine/sge-13.jpg",alt:"Meta insights four-panel view showing Views, Viewers, Content interactions and Link clicks",caption:["695.1K+ Views (+14.6K%) | 498.1K+ Viewers (+42.1K%)","3.3K+ Content Interactions (+1.9K%) | 162 Link Clicks (+5.3K%)"]},{src:"/projects/social-growth-engine/sge-14.jpg",alt:"Meta insights four-panel view showing Views by platform, Reach, Content interactions and Link clicks",caption:["1.1M+ Views (+2.3K%) across Facebook and Instagram | 614K+ Reach (+20.7K%)","14.9K+ Content Interactions (+869.3%) | 4.6K+ Link Clicks (+100%)"]},{src:"/projects/social-growth-engine/sge-15.jpg",alt:"Instagram Performance panel showing Views, Follows, Reach and Interactions for 5 July to 1 August 2026",caption:["52.0K+ Views (+77.7%) | 41.3K+ Reach (+68.2%)","192 Content Interactions (+35.2%), 78% from non-followers"]},{src:"/projects/social-growth-engine/sge-16.jpg",alt:"Meta insights four-panel view showing Views by platform, Reach, Content interactions and Link clicks for June 2026",caption:["38.6K+ Views (+513.5%) | 32.1K+ Reach (+504.2%)","160 Content Interactions (+566.7%) | 23 Link Clicks (+109.1%)"]},{src:"/projects/social-growth-engine/sge-17.jpg",alt:"Instagram Insights overview showing Views, Reach and Content interactions for 10 January to 30 March 2026",caption:["47.2K+ Views (+26%) | 7.3K+ Reach (+239.8%)","1.8K+ Content Interactions (+134.8%)"]}],summary:["Social Growth Engine — A performance-driven social media growth campaign focused on increasing visibility, audience reach, engagement and content discovery.","The campaign delivered significant growth across views, reach, link clicks, watch time and new-audience discovery through consistent content performance."],caseStudy:[{heading:"Project Overview",body:["Social Growth Engine is a performance-driven social media growth campaign focused on increasing visibility, audience reach, engagement and content discovery. Planning, publishing and measurement ran across Facebook and Instagram, with Meta Business Suite insights as the single source of truth for every figure reported here."]},{heading:"Challenge",body:["The account needed consistent, compounding growth rather than one-off spikes — views, reach, content interactions, link clicks and new-audience discovery all had to move together on a cadence the brand could sustain. Every number published about the campaign had to be verifiable against platform-reported insights, with no invented metrics."]},{heading:"Strategy",body:["Growth was planned around platform-native formats — reels and short-form video first — published on a consistent schedule and measured window over window. Expanding reach into non-follower audiences was treated as the primary growth lever, with link clicks and profile visits as the commercial signals behind it."]},{heading:"Execution",body:["Content was planned, published and reviewed against Meta insights in weekly loops. Formats that earned non-follower reach were scaled; underperforming ones were retired. Reporting windows tracked Views, Reach, Content Interactions, Link Clicks, Visits and Follows exactly as the platforms report them."]},{heading:"Services Delivered",services:!0},{heading:"Campaign Approach",body:["An organic-first growth engine: reels-led content to feed discovery, consistent publishing to keep momentum, and insights-led iteration to compound reach. The headline was sustained content performance — not a single paid spike."]},{heading:"Results",bullets:["1.1M+ views (+2.3K%) across Facebook and Instagram, with 614K+ reach (+20.7K%)","886K+ views and 418K+ reach at campaign peak, with link click growth of +311.6K%","14.9K+ content interactions (+869.3%) and 4.6K+ link clicks (+100%)","4.9K+ profile visits (+495.3%) and +7.5K% watch time growth","98.6% of the audience reached through new discovery — 32.6K+ total views with +5,020% reach growth in a single window"]}]},{slug:"google-ads",business:"Performance Marketing",industry:"Google Ads Marketing",servicesUsed:["Google Ads"],cover:{src:"/projects/google-ads/cover.jpg",alt:"Google Ads campaign overview showing Impressions, Clicks, Average CPC and Cost for 14 May to 14 June 2025"},gallery:[{src:"/projects/google-ads/ga-01.jpg",alt:"Google Ads campaign overview showing Impressions, Clicks, Average CPC and Cost for 14 May to 14 June 2025",caption:["118K+ Impressions (+106K) | 8.15K+ Clicks (+7.51K)","₹1.23 Avg. CPC (−₹0.21) | ₹10.1K Cost (+₹9.14K)"]},{src:"/projects/google-ads/ga-02.jpg",alt:"Google Ads campaign overview showing Impressions, Clicks, Conversions and Cost per conversion for 21 June to 20 July 2025",caption:["150K+ Impressions (+79) | 7.55K+ Clicks (−1.32K)","27.59 Conversions (+20.59) | ₹658 Cost/Conversion (−₹1.53K)"]},{src:"/projects/google-ads/ga-03.jpg",alt:"Google Ads campaign groups overview showing two campaign groups with Clicks, Conversions, Cost per conversion and Cost for 22 September to 21 October 2025",caption:["233 Clicks | 38.00 Conversions | $66.87 Cost/Conversion | $2.54K Cost","610 Clicks | 81.00 Conversions | $59.19 Cost/Conversion | $4.79K Cost"]}],caseStudy:[{heading:"Project Overview",body:["A Google Ads engagement focused on capturing existing search demand efficiently. Performance is documented through Impressions, Clicks, Average CPC, Conversions and Cost per Conversion across successive reporting windows, exactly as the platform reports them."]},{heading:"Challenge",body:["Grow qualified click volume while pushing average CPC and cost per conversion down — scale and efficiency at the same time, not one at the expense of the other."]},{heading:"Google Ads Strategy",body:["A search-led structure split into dedicated campaign groups, each with its own budget, targeting and conversion actions — so performance could be read and tuned per group instead of being averaged away at account level."]},{heading:"Campaign Setup",body:["Campaign groups were built around distinct offers with separate budgets and bidding. Conversion tracking was wired in before any scaling, so every optimisation decision reads from documented conversions and cost per conversion rather than raw traffic."]},{heading:"Optimization",body:["Bids, budgets and ad copy were refined window over window against three levers: impressions for coverage, clicks for intent, and cost per conversion for efficiency. The documented deltas show CPC and cost per conversion falling while volume climbed."]},{heading:"Services Delivered",services:!0},{heading:"Results",bullets:["118K+ impressions (+106K) and 8.15K+ clicks (+7.51K) in the first documented window, at ₹1.23 average CPC (−₹0.21)","150K+ impressions sustained in the following window, with 27.59 conversions (+20.59) at ₹658 cost per conversion (−₹1.53K)","Campaign groups scaled to 843 combined clicks and 119 conversions in a later window","Cost per conversion held at $66.87 and $59.19 across the two campaign groups as spend reached $2.54K and $4.79K"]}]},{slug:"website-development",business:"Website Development",industry:"Web Design & Development",servicesUsed:["Website Development"],galleryLayout:"uniform",cover:{src:"/projects/website-development/cover.jpg",alt:"Dr. Balaji Jagan orthodontics website home page designed by Shri Pro Craft"},gallery:[{src:"/projects/website-development/wd-01.jpg",alt:"Dr. Balaji Jagan orthodontics website home page with Preventive Care, Precision Dentistry and Smile Restoration cards over a 3D tooth and stone scene",caption:"Dr. Balaji Jagan — Master in Orthodontics"},{src:"/projects/website-development/wd-03.jpg",alt:"Solvéa Architecture website page with hero, about us, why Solvéa, featured work, services and contact sections",caption:"Solvéa Architecture"},{src:"/projects/website-development/wd-05.jpg",alt:"AstraForge Systems website page with satellite hero, purpose statement, mission statistics and footer in a dark monochrome theme",caption:"AstraForge Systems"},{src:"/projects/website-development/wd-06.jpg",alt:"FreshBite healthy meal delivery website page with hero, menu, popular dishes, testimonials and footer",caption:"FreshBite"},{src:"/projects/website-development/wd-02.jpg",alt:"Dr. Balaji Jagan dental care website hero featuring a dental implant with Explore Treatments and Book Appointment actions",caption:"Dr. Balaji Jagan — Dental Care"},{src:"/projects/website-development/wd-04.jpg",alt:"Atelier Form villa design website page with services, approach, process, featured projects and testimonials",caption:"Atelier Form"},{src:"/projects/website-development/wd-07.jpg",alt:"Aeronest travel booking website page with flight search, flight deals, destinations and customer reviews",caption:"Aeronest"},{src:"/projects/website-development/wd-08.jpg",alt:"Terra Nova property intelligence website with desktop and mobile layouts showing featured rural properties and search",caption:"Terra Nova"},{src:"/projects/website-development/wd-09.jpg",alt:"Azure Wake private yacht charter website page with yacht collection, destinations, crew and charter enquiry sections",caption:"Azure Wake"},{src:"/projects/website-development/wd-10.jpg",alt:"Verdant Table plant-based meals website page with hero, meal plans, ingredients, blog and footer",caption:"Verdant Table"},{src:"/projects/website-development/wd-11.jpg",alt:"Northline Digital marketing agency website page with hero, services, results, testimonials and footer",caption:"Northline Digital"},{src:"/projects/website-development/wd-12.jpg",alt:"Golden Square premium service homes website hero in New Siddhapudur, Coimbatore with Enquire Now and View Living Spaces actions",caption:"Golden Square"},{src:"/projects/website-development/wd-13.jpg",alt:"Mitaren Agro marketplace website hero with fresh produce, product search and category navigation",caption:"Mitaren Agro"},{src:"/projects/website-development/wd-14.jpg",alt:"VitaNova healthcare innovation website page with hero, key products, awards and recognition",caption:"VitaNova"},{src:"/projects/website-development/wd-15.jpg",alt:"Allzon Shop website hero for premium digital art prints and photo frames",caption:"Allzon Shop"},{src:"/projects/website-development/wd-16.jpg",alt:"Aadhi Shakthi Expo 2026 exhibition portal hero with visitor registration form",caption:"Aadhi Shakthi Expo 2026"},{src:"/projects/website-development/wd-17.jpg",alt:"BGF Woods furniture manufacturer and exporter website hero with Request a Quote action",caption:"BGF Woods"}]}],b={"social-growth-engine":"/services/meta-ads.webp","google-ads":"/services/lead-generation.webp","website-development":"/services/website-design-development.webp"},x=new Set(["website-development"]);e.s(["FeaturedProjectFolders",0,function(){let[e,r]=(0,a.useState)(400);(0,a.useEffect)(()=>{let e=()=>r(window.innerWidth<640?320:window.innerWidth<1280?400:360);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);let n=[...w.map(e=>{let t=`/featured-projects/${e.slug}`;return{key:e.slug,title:e.business,subtitle:e.industry,href:t,icon:b[e.slug],cover:e.cover?.src,files:(e.gallery??[]).slice(0,4).map(a=>({name:Array.isArray(a.caption)?a.caption[0]:a.caption,image:a.src,imagePosition:x.has(e.slug)?"top":void 0,href:t}))}})];return(0,t.jsx)("div",{className:"mx-auto grid max-w-[1240px] justify-items-center gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3",children:n.map((a,r)=>(0,t.jsxs)("div",{className:`flex flex-col items-center ${2===r?"sm:col-span-2 xl:col-span-1":""}`,children:[(0,t.jsx)(m,{width:e,label:a.title,meta:a.subtitle,image:a.cover,art:"none",action:"none",files:a.files,appearDelay:140*r,icon:a.icon?(0,t.jsx)("img",{src:a.icon,alt:"",width:256,height:256,draggable:!1}):void 0,corner:(0,t.jsx)(i.default,{href:a.href,"aria-label":`View case study: ${a.title}`,className:"grid h-[46px] w-[46px] place-items-center rounded-full border border-hairlineStrong bg-white/40 text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white",children:(0,t.jsx)(o.ArrowRight,{size:16,strokeWidth:2,"aria-hidden":"true"})})}),(0,t.jsx)(i.default,{href:a.href,className:"btn-ghost mt-4",children:"View case study"})]},a.key))})}],6474)}]);