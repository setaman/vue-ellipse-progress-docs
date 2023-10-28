import{_ as h,r as e,o as m,c as f,b as a,w as p,a as n,d as s,t as o,e as v}from"./app-eef40e08.js";const b={},q=v(`<h1 id="emptycolor" tabindex="-1"><a class="header-anchor" href="#emptycolor" aria-hidden="true">#</a> <code>emptyColor</code></h1><h6 id="animated-✔️" tabindex="-1"><a class="header-anchor" href="#animated-✔️" aria-hidden="true">#</a> Animated: ✔️</h6><table><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>String | Object</td><td>any CSS color as String or Object to specify gradient</td><td>&quot;#3f79ff&quot;</td></tr></tbody></table><p>Defines the color of the empty circle line. The property accepts any CSS color like <code>#123</code>, <code>rgba(230, 233, 240, 0.1)</code> or <code>lime</code> or an Object to define gradients.</p><p>Below is the general scheme to define the gradient:</p><ul><li><code>:color=&quot;{ colors [, radial ]}&quot;</code><ul><li><code>radial</code> - default <code>false</code>. Boolean that defines, whether the gradient is radial or linear</li><li><code>colors</code> - array that contains the gradient colors as Objects <code>{ color: &quot;#6546f7&quot;, offset: &quot;10&quot; [, opacity: 1] }</code></li></ul></li></ul><h3 id="usage-📜" tabindex="-1"><a class="header-anchor" href="#usage-📜" aria-hidden="true">#</a> Usage 📜</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#3f79ff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lime<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(230, 233, 240, 0.1)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span>
  <span class="token attr-name">:empty-color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    radial: false,
    colors: [
      { color: &#39;#6546f7&#39;, offset: &#39;0&#39;, opacity: 1 },
      { color: &#39;lime&#39;, offset: &#39;100&#39;, opacity: 0.6 },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3>`,9),C={class:"language-vue","data-ext":"vue"},F={class:"language-vue"},x=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),B={class:"token tag"},w=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),A=n("span",{class:"token attr-name"},":progress",-1),E={class:"token attr-value"},S=n("span",{class:"token punctuation attr-equals"},"=",-1),j=n("span",{class:"token punctuation"},'"',-1),G=n("span",{class:"token punctuation"},'"',-1),z=n("span",{class:"token attr-name"},"empty-color",-1),D=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("DimGray"),n("span",{class:"token punctuation"},'"')],-1),T=n("span",{class:"token punctuation"},"/>",-1),N={class:"token tag"},O=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),V=n("span",{class:"token attr-name"},":progress",-1),I={class:"token attr-value"},U=n("span",{class:"token punctuation attr-equals"},"=",-1),H=n("span",{class:"token punctuation"},'"',-1),J=n("span",{class:"token punctuation"},'"',-1),K=n("span",{class:"token attr-name"},"empty-color",-1),L=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#1ABC9C"),n("span",{class:"token punctuation"},'"')],-1),M=n("span",{class:"token punctuation"},"/>",-1),P={class:"token tag"},Q=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),R=n("span",{class:"token attr-name"},":progress",-1),W={class:"token attr-value"},X=n("span",{class:"token punctuation attr-equals"},"=",-1),Y=n("span",{class:"token punctuation"},'"',-1),Z=n("span",{class:"token punctuation"},'"',-1),$=n("span",{class:"token attr-name"},"empty-color",-1),nn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rgba(255, 87, 51, 0.7)"),n("span",{class:"token punctuation"},'"')],-1),sn=n("span",{class:"token punctuation"},"/>",-1),tn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),an=n("p",null,"The examples below demonstrate how gradient colors can be defined.",-1),on={class:"language-vue","data-ext":"vue"},pn={class:"language-vue"},en=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),cn={class:"token tag"},ln=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),rn=n("span",{class:"token attr-name"},":progress",-1),un={class:"token attr-value"},kn=n("span",{class:"token punctuation attr-equals"},"=",-1),yn=n("span",{class:"token punctuation"},'"',-1),_n=n("span",{class:"token punctuation"},'"',-1),dn=n("span",{class:"token attr-name"},":empty-color",-1),gn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),hn=n("span",{class:"token punctuation"},"/>",-1),mn={class:"token tag"},fn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),vn=n("span",{class:"token attr-name"},":progress",-1),bn={class:"token attr-value"},qn=n("span",{class:"token punctuation attr-equals"},"=",-1),Cn=n("span",{class:"token punctuation"},'"',-1),Fn=n("span",{class:"token punctuation"},'"',-1),xn=n("span",{class:"token attr-name"},":empty-color",-1),Bn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),wn=n("span",{class:"token punctuation"},"/>",-1),An={class:"token tag"},En=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Sn=n("span",{class:"token attr-name"},":progress",-1),jn={class:"token attr-value"},Gn=n("span",{class:"token punctuation attr-equals"},"=",-1),zn=n("span",{class:"token punctuation"},'"',-1),Dn=n("span",{class:"token punctuation"},'"',-1),Tn=n("span",{class:"token attr-name"},":empty-color",-1),Nn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),On=n("span",{class:"token punctuation"},"/>",-1),Vn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),In=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Un=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"gradient1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3498DB"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(72, 201, 176)"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"25"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"hsl(48, 89%, 60%, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Crimson"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"75"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#8A2BE2"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"gradient2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3498DB"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"rgb(72, 201, 176)"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"25"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"hsl(48, 89%, 60%, 0.2)"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Crimson"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"75"'),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#8A2BE2"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),s(`
          `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Hn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Jn=n("p",null,"The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone. The following examples give some inspiration:",-1),Kn={class:"language-vue","data-ext":"vue"},Ln={class:"language-vue"},Mn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Pn={class:"token tag"},Qn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Rn=n("span",{class:"token attr-name"},":progress",-1),Wn={class:"token attr-value"},Xn=n("span",{class:"token punctuation attr-equals"},"=",-1),Yn=n("span",{class:"token punctuation"},'"',-1),Zn=n("span",{class:"token punctuation"},'"',-1),$n=n("span",{class:"token attr-name"},":empty-color",-1),ns=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),ss=n("span",{class:"token attr-name"},":thickness",-1),ts=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')],-1),as=n("span",{class:"token attr-name"},":empty-thickness",-1),os=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("40"),n("span",{class:"token punctuation"},'"')],-1),ps=n("span",{class:"token punctuation"},"/>",-1),es={class:"token tag"},cs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),ls=n("span",{class:"token attr-name"},":progress",-1),rs={class:"token attr-value"},us=n("span",{class:"token punctuation attr-equals"},"=",-1),is=n("span",{class:"token punctuation"},'"',-1),ks=n("span",{class:"token punctuation"},'"',-1),ys=n("span",{class:"token attr-name"},":empty-color",-1),_s=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),ds=n("span",{class:"token attr-name"},"line",-1),gs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("butt"),n("span",{class:"token punctuation"},'"')],-1),hs=n("span",{class:"token attr-name"},"line-mode",-1),ms=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in-over"),n("span",{class:"token punctuation"},'"')],-1),fs=n("span",{class:"token attr-name"},":thickness",-1),vs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),bs=n("span",{class:"token attr-name"},":empty-thickness",-1),qs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("100"),n("span",{class:"token punctuation"},'"')],-1),Cs=n("span",{class:"token punctuation"},"/>",-1),Fs={class:"token tag"},xs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Bs=n("span",{class:"token attr-name"},":progress",-1),ws={class:"token attr-value"},As=n("span",{class:"token punctuation attr-equals"},"=",-1),Es=n("span",{class:"token punctuation"},'"',-1),Ss=n("span",{class:"token punctuation"},'"',-1),js=n("span",{class:"token attr-name"},":empty-color",-1),Gs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),zs=n("span",{class:"token attr-name"},"line-mode",-1),Ds=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out-over"),n("span",{class:"token punctuation"},'"')],-1),Ts=n("span",{class:"token attr-name"},":thickness",-1),Ns=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),Os=n("span",{class:"token attr-name"},":empty-thickness",-1),Vs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("20"),n("span",{class:"token punctuation"},'"')],-1),Is=n("span",{class:"token punctuation"},"/>",-1),Us={class:"token tag"},Hs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Js=n("span",{class:"token attr-name"},":progress",-1),Ks={class:"token attr-value"},Ls=n("span",{class:"token punctuation attr-equals"},"=",-1),Ms=n("span",{class:"token punctuation"},'"',-1),Ps=n("span",{class:"token punctuation"},'"',-1),Qs=n("span",{class:"token attr-name"},":empty-color",-1),Rs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient4"),n("span",{class:"token punctuation"},'"')],-1),Ws=n("span",{class:"token attr-name"},"line-mode",-1),Xs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out-over"),n("span",{class:"token punctuation"},'"')],-1),Ys=n("span",{class:"token attr-name"},":thickness",-1),Zs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("10"),n("span",{class:"token punctuation"},'"')],-1),$s=n("span",{class:"token attr-name"},":empty-thickness",-1),nt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("20"),n("span",{class:"token punctuation"},'"')],-1),st=n("span",{class:"token punctuation"},"/>",-1),tt={class:"token tag"},at=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),ot=n("span",{class:"token attr-name"},":progress",-1),pt={class:"token attr-value"},et=n("span",{class:"token punctuation attr-equals"},"=",-1),ct=n("span",{class:"token punctuation"},'"',-1),lt=n("span",{class:"token punctuation"},'"',-1),rt=n("span",{class:"token attr-name"},":empty-color",-1),ut=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient5"),n("span",{class:"token punctuation"},'"')],-1),it=n("span",{class:"token attr-name"},"line-mode",-1),kt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out-over"),n("span",{class:"token punctuation"},'"')],-1),yt=n("span",{class:"token attr-name"},":thickness",-1),_t=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')],-1),dt=n("span",{class:"token attr-name"},":empty-thickness",-1),gt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("20"),n("span",{class:"token punctuation"},'"')],-1),ht=n("span",{class:"token punctuation"},"/>",-1),mt={class:"token tag"},ft=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),vt=n("span",{class:"token attr-name"},":progress",-1),bt={class:"token attr-value"},qt=n("span",{class:"token punctuation attr-equals"},"=",-1),Ct=n("span",{class:"token punctuation"},'"',-1),Ft=n("span",{class:"token punctuation"},'"',-1),xt=n("span",{class:"token attr-name"},":empty-color",-1),Bt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient6"),n("span",{class:"token punctuation"},'"')],-1),wt=n("span",{class:"token attr-name"},"line",-1),At=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("butt"),n("span",{class:"token punctuation"},'"')],-1),Et=n("span",{class:"token attr-name"},":thickness",-1),St=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("4"),n("span",{class:"token punctuation"},'"')],-1),jt=n("span",{class:"token attr-name"},":empty-thickness",-1),Gt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("100"),n("span",{class:"token punctuation"},'"')],-1),zt=n("span",{class:"token punctuation"},"/>",-1),Dt=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Tt=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Nt=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
  `),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token function-variable function"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"gradient1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.15"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"70"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.15"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"70"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"90"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"60"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#8A2BE2"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#8A2BE2"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"98"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"99"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"96"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"98"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#e6e9f0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"99.9"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient4"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"49"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"black"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"black"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"90"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"95"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0.2"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient5"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"49"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"80"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient6"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"89"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"91"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"93"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"95"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"97"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"99"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"gradient7"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"88"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#D4AC0D"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"90"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#27AE60"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"93"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#E74C3C"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"96"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"99"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Ot=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1);function Vt(It,Ut){const u=e("v-e-p"),y=e("empty-color-random"),i=e("CodeGroupItem"),k=e("CodeGroup"),_=e("example-container"),d=e("empty-color-gradient"),g=e("empty-color-gradient-crazy");return m(),f("div",null,[q,a(_,{class:"mb-16"},{default:p(({progress:t,loading:c,slider:Ht,noData:l,determinate:r})=>[a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"empty-color":"DimGray"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"empty-color":"#1ABC9C"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"empty-color":"rgba(255, 87, 51, 0.7)"},null,8,["progress","loading","no-data","determinate"]),a(y,{progress:t,loading:c,"no-data":l,determinate:r},null,8,["progress","loading","no-data","determinate"])]),code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",C,[n("pre",F,[n("code",null,[x,s(`
  `),n("span",B,[w,s(),A,n("span",E,[S,j,s(o(t),1),G]),s(),z,D,T]),s(`
  `),n("span",N,[O,s(),V,n("span",I,[U,H,s(o(t),1),J]),s(),K,L,M]),s(`
  `),n("span",P,[Q,s(),R,n("span",W,[X,Y,s(o(t),1),Z]),s(),$,nn,sn]),s(`
`),tn,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),an,a(d,{class:"mb-16"},{code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",on,[n("pre",pn,[n("code",null,[en,s(`
  `),n("span",cn,[ln,s(),rn,n("span",un,[kn,yn,s(o(t),1),_n]),s(),dn,gn,hn]),s(`
  `),n("span",mn,[fn,s(),vn,n("span",bn,[qn,Cn,s(o(t),1),Fn]),s(),xn,Bn,wn]),s(`
  `),n("span",An,[En,s(),Sn,n("span",jn,[Gn,zn,s(o(t),1),Dn]),s(),Tn,Nn,On]),s(`
`),Vn,s(`
`),In,Un,Hn,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),Jn,a(g,null,{code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",Kn,[n("pre",Ln,[n("code",null,[Mn,s(`
  `),n("span",Pn,[Qn,s(),Rn,n("span",Wn,[Xn,Yn,s(o(t),1),Zn]),s(),$n,ns,s(),ss,ts,s(),as,os,ps]),s(`
  `),n("span",es,[cs,s(),ls,n("span",rs,[us,is,s(o(t),1),ks]),s(),ys,_s,s(),ds,gs,s(),hs,ms,s(),fs,vs,s(),bs,qs,Cs]),s(`
  `),n("span",Fs,[xs,s(),Bs,n("span",ws,[As,Es,s(o(t),1),Ss]),s(),js,Gs,s(),zs,Ds,s(),Ts,Ns,s(),Os,Vs,Is]),s(`
  `),n("span",Us,[Hs,s(),Js,n("span",Ks,[Ls,Ms,s(o(t),1),Ps]),s(),Qs,Rs,s(),Ws,Xs,s(),Ys,Zs,s(),$s,nt,st]),s(`
  `),n("span",tt,[at,s(),ot,n("span",pt,[et,ct,s(o(t),1),lt]),s(),rt,ut,s(),it,kt,s(),yt,_t,s(),dt,gt,ht]),s(`
  `),n("span",mt,[ft,s(),vt,n("span",bt,[qt,Ct,s(o(t),1),Ft]),s(),xt,Bt,s(),wt,At,s(),Et,St,s(),jt,Gt,zt]),s(`
`),Dt,s(`
`),Tt,Nt,Ot,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1})])}const Kt=h(b,[["render",Vt],["__file","emptyColor.html.vue"]]);export{Kt as default};
