import{_ as d,c as e,a8 as o,o as r}from"./chunks/framework.BLoy52B6.js";const u=JSON.parse('{"title":"Options overview","description":"","frontmatter":{"pageClass":"props-docs"},"headers":[],"relativePath":"guide/options/index.md","filePath":"guide/options/index.md","lastUpdated":1735652299000}'),a={name:"guide/options/index.md"};function s(n,t,i,l,c,g){return r(),e("div",null,t[0]||(t[0]=[o('<h1 id="options-overview" tabindex="-1">Options overview <a class="header-anchor" href="#options-overview" aria-label="Permalink to &quot;Options overview&quot;">​</a></h1><p>The <strong><a href="./progress.html"><code>progress</code></a></strong> is the only required property, and you are ready to go with just following line:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ve-progress</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;progress&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><blockquote><p>Also make sure to check <strong><a href="./../slots/default.html">slots</a></strong></p></blockquote><table tabindex="0"><thead><tr><th>Prop</th><th>Type</th><th>Values</th><th>Default</th></tr></thead><tbody><tr><td><strong><a href="./progress.html"><code>progress</code></a></strong></td><td>Number</td><td>[-100, 100]</td><td></td></tr><tr><td><strong><a href="./size.html"><code>size</code></a></strong></td><td>Number</td><td>&gt;=0</td><td>200</td></tr><tr><td><strong><a href="./line.html"><code>line</code></a></strong></td><td>String</td><td>&quot;round | square | butt&quot;</td><td>&quot;round&quot;</td></tr><tr><td><strong><a href="./thickness.html"><code>thickness</code></a></strong></td><td>Number | String</td><td>&gt;=0 as Number or percent value as String</td><td>&quot;5%&quot;</td></tr><tr><td><strong><a href="./emptyThickness.html"><code>emptyThickness</code></a></strong></td><td>Number | String</td><td>&gt;=0 as Number or percent value as String</td><td>&quot;5%&quot;</td></tr><tr><td><strong><a href="./lineMode.html"><code>lineMode</code></a></strong></td><td>String</td><td>&quot;center | out | out-over | in | in-over | top | bottom [offset]&quot;</td><td>&quot;center&quot;</td></tr><tr><td><strong><a href="./linePosition.html"><code>linePosition</code></a></strong></td><td>String</td><td>&quot;center | out | in [offset]&quot;</td><td>&quot;center&quot;</td></tr><tr><td><strong><a href="./emptyLinePosition.html"><code>emptyLinePosition</code></a></strong></td><td>String</td><td>&quot;center | out | in [offset]&quot;</td><td>&quot;center&quot;</td></tr><tr><td><strong><a href="./color.html"><code>color</code></a></strong></td><td>String | Object</td><td>any color as String or Object to specify gradient (see details)</td><td>&quot;#3f79ff&quot;</td></tr><tr><td><strong><a href="./colorFill.html"><code>colorFill</code></a></strong></td><td>String | Object</td><td>same as <strong><a href="./color.html"><code>color</code></a></strong></td><td>&quot;transparent&quot; <br></td></tr><tr><td><strong><a href="./emptyColor.html"><code>emptyColor</code></a></strong></td><td>String | Object</td><td>same as <strong><a href="./color.html"><code>color</code></a></strong></td><td>&quot;#e6e9f0&quot;</td></tr><tr><td><strong><a href="./hideLegend.html"><code>hideLegend</code></a></strong></td><td>Boolean</td><td></td><td>true</td></tr><tr><td><strong><a href="./legend.html"><code>legend</code></a></strong></td><td>Number | String</td><td>any number, accepts a <code>.</code> or <code>&quot;,&quot;</code> as decimals delimiter and simple formatting</td><td></td></tr><tr><td><strong><a href="./loading.html"><code>loading</code></a></strong></td><td>Boolean</td><td></td><td>false</td></tr><tr><td><strong><a href="./determinate.html"><code>determinate</code></a></strong></td><td>Boolean</td><td></td><td>false</td></tr><tr><td><strong><a href="./legendFormatter.html"><code>legendFormatter</code></a></strong></td><td>Function</td><td><code>(props: object) =&gt; string</code> Function returning formatted value as string</td><td></td></tr><tr><td><strong><a href="./reverse.html"><code>reverse</code></a></strong></td><td>Boolean</td><td></td><td>false</td></tr><tr><td><strong><a href="./angle.html"><code>angle</code></a></strong></td><td>Number</td><td>any Number</td><td>-90</td></tr><tr><td><strong><a href="./half.html"><code>half</code></a></strong></td><td>Boolean</td><td></td><td>false</td></tr><tr><td><strong><a href="./noData.html"><code>noData</code></a></strong></td><td>Boolean</td><td></td><td>false</td></tr><tr><td><strong><a href="./dash.html"><code>dash</code></a></strong></td><td>String</td><td>&quot;[strict] count spacing&quot;</td><td></td></tr><tr><td><strong><a href="./dot.html"><code>dot</code></a></strong></td><td>String | Number | Object</td><td>Accepts size, color and other styles as Number, descriptive string <code>&quot;size [color]&quot;</code> or object <code>{size [, backgroundColor, widht, borderRadius ...]}</code></td><td>0</td></tr><tr><td><strong><a href="./animation.html"><code>animation</code></a></strong></td><td>String</td><td>&quot;default | rs | loop | reverse | bounce [duration delay]&quot;</td><td>&quot;default 1000 400&quot;</td></tr><tr><td><strong><a href="./loader.html"><code>loader</code></a></strong></td><td>Object</td><td>{ [thickness, color, lineMode, line, opacity ]}</td><td></td></tr><tr><td><strong><a href="./fontColor.html"><code>fontColor</code></a></strong></td><td>String</td><td>any valid CSS value</td><td>&quot;gray&quot;</td></tr><tr><td><strong><a href="./fontSize.html"><code>fontSize</code></a></strong></td><td>String</td><td>any valid CSS value</td><td>&quot;1rem&quot;</td></tr><tr><td><strong><a href="./legendClass.html"><code>legendClass</code></a></strong></td><td>String</td><td>any</td><td></td></tr><tr><td><strong><a href="./emptyColorFill.html"><code>emptyColorFill</code></a></strong></td><td>String | Object</td><td>same as <code>color</code></td><td>&quot;transparent&quot;</td></tr><tr><td><strong><a href="./gap.html"><code>gap</code></a></strong></td><td>Number</td><td>any Number that defines the gap between multiple circles in pixel</td><td>0</td></tr><tr><td><strong><a href="./data.html"><code>data</code></a></strong></td><td>Array</td><td>defines multiple circles, takes as values Objects with almost all props defined above</td><td></td></tr></tbody></table>',5)]))}const p=d(a,[["render",s]]);export{u as __pageData,p as default};