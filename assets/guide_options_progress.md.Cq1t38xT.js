import{_ as n,c as l,j as s,a as d,G as t,a8 as p,w as h,B as a,o as g,t as c}from"./chunks/framework.BLoy52B6.js";const w=JSON.parse('{"title":"progress","description":"The progress property takes a Number value in the range [-100, 100] and defines the filled area from progress circle line in percent.","frontmatter":{"description":"The progress property takes a Number value in the range [-100, 100] and defines the filled area from progress circle line in percent.","aside":false,"head":[["meta",{"name":"keywords","content":"color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js"}]]},"headers":[],"relativePath":"guide/options/progress.md","filePath":"guide/options/progress.md","lastUpdated":1735652299000}'),u={name:"guide/options/progress.md"},k={class:"language-js vp-adaptive-theme"},m={class:"shiki shiki-themes github-light github-dark vp-code",tabindex:"0"},f={class:"line"},y={style:{"--shiki-light":"#B31D28","--shiki-light-font-style":"italic","--shiki-dark":"#FDAEB7","--shiki-dark-font-style":"italic"}};function v(b,e,E,x,B,F){const i=a("Badge"),r=a("ExampleCode");return g(),l("div",null,[e[5]||(e[5]=s("h1",{id:"progress",tabindex:"-1"},[s("code",null,"progress"),d(),s("a",{class:"header-anchor",href:"#progress","aria-label":'Permalink to "`progress`"'},"​")],-1)),t(i,{class:"mt-2",type:"success",text:"Animated"}),e[6]||(e[6]=p('<table tabindex="0"><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>Number</td><td>[-100, 100]</td><td></td></tr></tbody></table><p>The <code>progress</code> property takes a Number value in the range [-100, 100] and defines the filled area from progress circle line in percent. By default, <code>progress</code> is shown as the <strong>legend</strong> in the middle of the circle. <code>progress</code> is animated and counts up or down on any value changes with duration defined in <strong><a href="./animation.html"><code>animation.duration</code></a></strong> property.</p><p>A negative value can be used to fill the progress line counterclockwise. Alternatively the same effect can be achieved with the <strong><a href="./reverse.html"><code>reverse</code></a></strong> property.</p><div class="warning custom-block"><p class="custom-block-title">Progress and Legend</p><p>The <code>progress</code> is always used to fill the progress circle line, it should be always in the range [-100, 100] and not valid Numbers lead to <strong><a href="./noData.html"><code>noData</code></a></strong> state. For advanced use cases please use <strong><a href="./legend.html"><code>legend</code></a></strong> and take a look at <strong><a href="./legendFormatter.html"><code>legendFormatter</code></a></strong> or the <strong><a href="./../slots/default.html"><code>default slot</code></a></strong>.</p><p>If <strong><a href="./legend.html"><code>legend</code></a></strong> is defined the <code>progress</code> will <strong>not</strong> be displayed as the circle legend.</p></div><h6 id="usage-📜" tabindex="-1">Usage: 📜 <a class="header-anchor" href="#usage-📜" aria-label="Permalink to &quot;Usage: 📜&quot;">​</a></h6><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h3 id="basic-example" tabindex="-1">Basic Example <a class="header-anchor" href="#basic-example" aria-label="Permalink to &quot;Basic Example&quot;">​</a></h3>',7)),s("p",null,[t(r,null,{code:h(({progress:o})=>[s("div",k,[e[3]||(e[3]=s("button",{title:"Copy Code",class:"copy"},null,-1)),e[4]||(e[4]=s("span",{class:"lang"},"js",-1)),s("pre",m,[s("code",null,[s("span",f,[e[0]||(e[0]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"<",-1)),e[1]||(e[1]=s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"ve-progress",-1)),s("span",y,' :progress="'+c(o)+'"',1),e[2]||(e[2]=s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," />",-1))])])])])]),_:1})])])}const N=n(u,[["render",v]]);export{w as __pageData,N as default};