if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),t={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-6cd28afd"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/ar-TN.90039caa.js",revision:null},{url:"assets/ca-ES.35128f57.js",revision:null},{url:"assets/collect.6b4b7dfe.js",revision:null},{url:"assets/colorworker.893f8723.js",revision:null},{url:"assets/da-DK.19f2f182.js",revision:null},{url:"assets/de-DE.42309e3f.js",revision:null},{url:"assets/el-GR.92289c30.js",revision:null},{url:"assets/en-GB.9a47b6bc.js",revision:null},{url:"assets/en-US.4e55a617.js",revision:null},{url:"assets/es-ES.86af4774.js",revision:null},{url:"assets/filehandling.b9c97ed0.js",revision:null},{url:"assets/fr-FR.f256497a.js",revision:null},{url:"assets/he-IL.79a09e7a.js",revision:null},{url:"assets/id-ID.ed7ec410.js",revision:null},{url:"assets/index.3b6d3bd6.js",revision:null},{url:"assets/install.e21f1e9e.js",revision:null},{url:"assets/ja-JP.7fbb9705.js",revision:null},{url:"assets/ko-KR.ef698297.js",revision:null},{url:"assets/languages.c88bcbdb.js",revision:null},{url:"assets/module-workers-polyfill.min.dc7647fd.js",revision:null},{url:"assets/monochromeworker.ee1cfa6e.js",revision:null},{url:"assets/nl-NL.9799e2ef.js",revision:null},{url:"assets/no-NO.8631ed9f.js",revision:null},{url:"assets/preprocessworker.353fdc25.js",revision:null},{url:"assets/preprocessworker.a4b60f0c.js",revision:null},{url:"assets/pt-BR.ffb42e25.js",revision:null},{url:"assets/ru-RU.9cd4f25d.js",revision:null},{url:"assets/style.8b9e59ca.css",revision:null},{url:"assets/svgoworker.5f3d0bc7.js",revision:null},{url:"assets/uk-UA.d02d72b6.js",revision:null},{url:"assets/vendor.78f84693.js",revision:null},{url:"assets/windowcontrols.456d9880.js",revision:null},{url:"assets/zh-CN.a4f8b093.js",revision:null},{url:"index.html",revision:"72731765939a8dc085bf34b0f0cf3884"},{url:"manifest.webmanifest",revision:"98dd9224e2ba02247c5cd2f6d34834de"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
