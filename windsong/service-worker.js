if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return i[e]||(r=new Promise((async r=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},r=(r,i)=>{Promise.all(r.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(r)};self.define=(r,n,l)=>{i[r]||(i[r]=Promise.resolve().then((()=>{let i={};const s={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return i;case"module":return s;default:return e(r)}}))).then((e=>{const r=l(...e);return i.default||(i.default=r),i}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"150b988305dd66f1f643.png",revision:null},{url:"1e59d2330b4c6deb84b3.ttf?v=4.7.0",revision:null},{url:"20fd1704ea223900efa9.woff2?v=4.7.0",revision:null},{url:"37b14392c792c3959cac.zip",revision:null},{url:"87dbc95f0769e80c1e10.ttf",revision:null},{url:"88749e309f8f8f3f06ae.zip",revision:null},{url:"8b43027f47b20503057d.eot",revision:null},{url:"8b43027f47b20503057d.eot?v=4.7.0",revision:null},{url:"b10391c34658b20d40fc.ogg",revision:null},{url:"c1e38fd9e0e74ba58f7a.svg?v=4.7.0",revision:null},{url:"e5d17b7270c316df23af.ogg",revision:null},{url:"f691f37e57f04c152e23.woff?v=4.7.0",revision:null},{url:"favicon.ico",revision:"f42a7a98b310a9a17b4fb4fbf38881b1"},{url:"index.html",revision:"a0fbe0b5ba033f848254381f0c82473b"},{url:"main.js",revision:"2fee506a796c8eb6839d9eb7b3037d24"},{url:"main.js.LICENSE.txt",revision:"2b89a5917f465036f6ec6d807f329fbb"}],{})}));
