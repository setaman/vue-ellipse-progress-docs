import{S as _,m as g,_ as B,c as C}from"./chunks/theme.CrByf7K3.js";import{d as q,p,h as f,o as v,b as w,w as m,j as t,G as a,k as u,a as c,t as r,r as V,c as M,a8 as D,B as $}from"./chunks/framework.BLoy52B6.js";const S={class:"block my-4"},j={class:"block my-4"},N=q({__name:"LineModeBasic",setup(y){const s=p("center"),e=p(5),i=p(10),d=["center","in","in-over","out","out-over","top","bottom"].map(n=>({title:n})),k=f(()=>!["in","out"].includes(s.value)),b=f(()=>{const n=k.value?"":` ${e.value}`;return`${s.value}${n}`});return(n,o)=>(v(),w(C,null,{default:m(({progress:h,loading:E,noData:x,determinate:F})=>[t("div",null,[a(_,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value=l),options:u(d),mini:"",size:50},null,8,["modelValue","options"])]),t("label",S,[c(" Offset: "+r(e.value)+" ",1),a(u(g),{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),modelModifiers:{number:!0},disabled:k.value,class:"example-code-slider mt-2 w-full",min:-30,max:30},null,8,["modelValue","disabled"])]),t("label",j,[c(" Thickness: "+r(i.value)+" ",1),a(u(g),{modelValue:i.value,"onUpdate:modelValue":o[2]||(o[2]=l=>i.value=l),modelModifiers:{number:!0},class:"example-code-slider mt-2 w-full",min:0,max:40},null,8,["modelValue"])]),a(B,{progress:h,loading:E,"no-data":x,determinate:F,size:150,"empty-thickness":20,thickness:i.value,"line-mode":`${s.value} ${e.value}`},null,8,["progress","loading","no-data","determinate","thickness","line-mode"])]),code:m(({progress:h})=>[V(n.$slots,"code",{data:{mode:s.value,lineMode:b.value,progress:h}})]),_:3}))}}),U={class:"language-js vp-adaptive-theme"},A={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},P={class:"line"},O={style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},T={style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},L=JSON.parse('{"title":"lineMode","description":"Descriptive string in form \\"mode [offset]\\" that defines, how the progress line is aligned in relation to empty line.","frontmatter":{"description":"Descriptive string in form \\"mode [offset]\\" that defines, how the progress line is aligned in relation to empty line.","aside":false,"head":[["meta",{"name":"keywords","content":"legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js"}]]},"headers":[],"relativePath":"guide/options/lineMode.md","filePath":"guide/options/lineMode.md","lastUpdated":1735652299000}'),z={name:"guide/options/lineMode.md"},Y=Object.assign(z,{setup(y){return(s,e)=>{const i=$("Badge");return v(),M("div",null,[e[7]||(e[7]=t("h1",{id:"linemode",tabindex:"-1"},[t("code",null,"lineMode"),c(),t("a",{class:"header-anchor",href:"#linemode","aria-label":'Permalink to "`lineMode`"'},"​")],-1)),a(i,{class:"mt-2",type:"success",text:"Animated"}),e[8]||(e[8]=D(`<table tabindex="0"><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>String</td><td>&quot;center | out | out-over | in | in-over | top | bottom [offset]&quot;</td><td>&quot;center&quot;</td></tr></tbody></table><p>Descriptive string in form <code>&quot;mode [offset]&quot;</code> that defines, how the progress line is aligned in relation to empty line. The first value ist the <code>mode</code> and the optional second is the <code>offset</code> that is any negative or positive Number and defines the distance between the progress and empty lines.</p><p><code>offset</code> can be only combined with the <code>in</code> and <code>out</code> modes. You can understand the modes as the presets that help you to align lines as you want to.</p><table tabindex="0"><thead><tr><th>mode</th><th>description</th></tr></thead><tbody><tr><td><code>center</code></td><td>this is the default value and both lines are aligned at the baseline (centered)</td></tr><tr><td><code>in</code></td><td>the progress line is inside the empty line</td></tr><tr><td><code>in-over</code></td><td>the progress line overlaps the empty line and growth inside</td></tr><tr><td><code>out</code></td><td>the progress line is outside the empty line</td></tr><tr><td><code>out-over</code></td><td>the progress line overlaps the empty line and growth outside</td></tr><tr><td><code>bottom</code></td><td>the progress line is aligned at the bottom of the empty line</td></tr><tr><td><code>top</code></td><td>the progress line is aligned at the top of the empty line</td></tr></tbody></table><h6 id="usage-📜" tabindex="-1">Usage: 📜 <a class="header-anchor" href="#usage-📜" aria-label="Permalink to &quot;Usage: 📜&quot;">​</a></h6><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> line-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;in 10&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> line-mode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bottom&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3>`,7)),t("p",null,[a(N,null,{code:m(({data:d})=>[t("div",U,[e[5]||(e[5]=t("button",{title:"Copy Code",class:"copy"},null,-1)),e[6]||(e[6]=t("span",{class:"lang"},"js",-1)),t("pre",A,[t("code",null,[t("span",P,[e[0]||(e[0]=t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<",-1)),e[1]||(e[1]=t("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"ve-progress",-1)),t("span",O,' :progress="'+r(d.progress)+'"',1),e[2]||(e[2]=t("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}}," line-mode",-1)),e[3]||(e[3]=t("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}},"=",-1)),t("span",T,'"'+r(d.lineMode)+'"',1),e[4]||(e[4]=t("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"/>",-1))])])])])]),_:1})])])}}});export{L as __pageData,Y as default};