import{_ as k,c}from"./chunks/theme.ClTdPvgd.js";import{d as m,o as h,b as u,w as o,G as l,r as y,c as E,j as e,a as n,a8 as f,B as v,t as r}from"./chunks/framework.BLoy52B6.js";const b=m({__name:"LoadingBasic",setup(p){return(d,t)=>(h(),u(c,{"preselected-state":"Loading"},{default:o(({progress:s,loading:a,noData:i,determinate:g})=>[l(k,{progress:s,loading:a,"no-data":i,determinate:g},null,8,["progress","loading","no-data","determinate"])]),code:o(({progress:s,loading:a})=>[y(d.$slots,"code",{progress:s,loading:a})]),_:3}))}}),B={class:"language-js vp-adaptive-theme"},_={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},C={class:"line"},F={style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},x={style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},j=JSON.parse('{"title":"loading","description":"Boolean that forces loading state. The component provides an indeterminate loading state for the case that your data is not available immediately. With this property set to true you can use the component as the indeterminate progress.","frontmatter":{"description":"Boolean that forces loading state. The component provides an indeterminate loading state for the case that your data is not available immediately. With this property set to true you can use the component as the indeterminate progress.","aside":false,"head":[["meta",{"name":"keywords","content":"color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js"}]]},"headers":[],"relativePath":"guide/options/loading.md","filePath":"guide/options/loading.md","lastUpdated":1735652299000}'),D={name:"guide/options/loading.md"},q=Object.assign(D,{setup(p){return(d,t)=>{const s=v("Badge");return h(),E("div",null,[t[8]||(t[8]=e("h1",{id:"loading",tabindex:"-1"},[e("code",null,"loading"),n(),e("a",{class:"header-anchor",href:"#loading","aria-label":'Permalink to "`loading`"'},"​")],-1)),l(s,{class:"mt-2",type:"success",text:"Animated"}),t[9]||(t[9]=f(`<table tabindex="0"><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>Boolean</td><td></td><td>false</td></tr></tbody></table><p>Boolean that forces loading state. The component provides an indeterminate loading state when your data is not immediately available. With this property set to <code>true</code>, you can use the component as an indeterminate progress indicator.</p><div class="tip custom-block"><p class="custom-block-title">Custom loader</p><p>Custom loading circle can be created with <strong><a href="./loader.html"><code>loader</code></a></strong>! To show a determinate loading, use <strong><a href="./determinate.html"><code>determinate</code></a></strong>.</p></div><div class="warning custom-block"><p class="custom-block-title">Legend behavior</p><p>The use of the <code>loading</code> state hides the <strong><a href="./legend.html"><code>legend</code></a></strong>.</p></div><h3 id="usage-📜" tabindex="-1">Usage 📜 <a class="header-anchor" href="#usage-📜" aria-label="Permalink to &quot;Usage 📜&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h3>`,7)),e("p",null,[l(b,null,{code:o(({loading:a,progress:i})=>[e("div",B,[t[6]||(t[6]=e("button",{title:"Copy Code",class:"copy"},null,-1)),t[7]||(t[7]=e("span",{class:"lang"},"js",-1)),e("pre",_,[e("code",null,[t[2]||(t[2]=e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<"),e("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#85E89D"}},"template"),e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},">")],-1)),t[3]||(t[3]=n(`
`)),e("span",C,[t[0]||(t[0]=e("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"  <",-1)),t[1]||(t[1]=e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"ve-progress",-1)),e("span",F,' :loading="'+r(a)+'"',1),e("span",x,' :progress="'+r(i)+'"/>',1)]),t[4]||(t[4]=n(`
`)),t[5]||(t[5]=e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}},"</template>")],-1))])])])]),_:1})])])}}});export{j as __pageData,q as default};
