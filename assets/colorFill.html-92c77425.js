import{_ as m,r as e,o as v,c as q,a as n,d as s,b as a,w as p,t as o,e as _}from"./app-eef40e08.js";const b={},C=_('<h1 id="colorfill" tabindex="-1"><a class="header-anchor" href="#colorfill" aria-hidden="true">#</a> <code>colorFill</code></h1><h6 id="animated-✔️" tabindex="-1"><a class="header-anchor" href="#animated-✔️" aria-hidden="true">#</a> Animated: ✔️</h6><table><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>String | Object</td><td>any CSS color as String or Object to specify gradient</td><td>&quot;transparent&quot;</td></tr></tbody></table><p>Defines the fill color of the progress circle. The property accepts any CSS color like <code>#123</code>, <code>rgba(230, 233, 240, 0.1)</code> or <code>lime</code> or an Object to define gradients.</p><p>The general scheme to define the gradient is defined like follows:</p><ul><li><code>:color=&quot;{ colors [, radial ]}&quot;</code><ul><li><code>radial</code> - default <code>false</code>. Boolean that defines, whether the gradient is radial or linear</li><li><code>colors</code> - array that contains the gradient colors as Objects <code>{ color: &quot;#6546f7&quot;, offset: &quot;10&quot; [, opacity: 1] }</code></li></ul></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Progress circle overlaps the emtpy circle! In the examples you will see the fill color partially covering the empty line.</p></div>',7),F={class:"custom-container tip"},x=n("p",{class:"custom-container-title"},"TIP",-1),w=n("code",null,"linePosition",-1),B=_(`<h6 id="usage-📜" tabindex="-1"><a class="header-anchor" href="#usage-📜" aria-hidden="true">#</a> Usage: 📜</h6><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#3f79ff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lime<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(230, 233, 240, 0.1)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span>
  <span class="token attr-name">:color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    radial: false,
    colors: [
      { color: &#39;#6546f7&#39;, offset: &#39;0&#39;, opacity: 1 },
      { color: &#39;lime&#39;, offset: &#39;100&#39;, opacity: 0.6 },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3>`,3),G={class:"language-vue","data-ext":"vue"},S={class:"language-vue"},T=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),j={class:"token tag"},A=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),z=n("span",{class:"token attr-name"},":progress",-1),N={class:"token attr-value"},I=n("span",{class:"token punctuation attr-equals"},"=",-1),V=n("span",{class:"token punctuation"},'"',-1),E=n("span",{class:"token punctuation"},'"',-1),O=n("span",{class:"token attr-name"},"color-fill",-1),P=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("DimGray"),n("span",{class:"token punctuation"},'"')],-1),D=n("span",{class:"token punctuation"},"/>",-1),M={class:"token tag"},R=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),L=n("span",{class:"token attr-name"},":progress",-1),W={class:"token attr-value"},U=n("span",{class:"token punctuation attr-equals"},"=",-1),H=n("span",{class:"token punctuation"},'"',-1),J=n("span",{class:"token punctuation"},'"',-1),K=n("span",{class:"token attr-name"},"color-fill",-1),Q=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#1ABC9C"),n("span",{class:"token punctuation"},'"')],-1),X=n("span",{class:"token punctuation"},"/>",-1),Y={class:"token tag"},Z=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),$=n("span",{class:"token attr-name"},":progress",-1),nn={class:"token attr-value"},sn=n("span",{class:"token punctuation attr-equals"},"=",-1),tn=n("span",{class:"token punctuation"},'"',-1),an=n("span",{class:"token punctuation"},'"',-1),on=n("span",{class:"token attr-name"},"color-fill",-1),pn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rgba(255, 87, 51, 0.7)"),n("span",{class:"token punctuation"},'"')],-1),en=n("span",{class:"token punctuation"},"/>",-1),cn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),ln=n("p",null,"The examples below demonstrate how gradient colors can be defined",-1),rn={class:"language-vue","data-ext":"vue"},un={class:"language-vue"},kn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),_n={class:"token tag"},dn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),yn=n("span",{class:"token attr-name"},":progress",-1),gn={class:"token attr-value"},hn=n("span",{class:"token punctuation attr-equals"},"=",-1),fn=n("span",{class:"token punctuation"},'"',-1),mn=n("span",{class:"token punctuation"},'"',-1),vn=n("span",{class:"token attr-name"},":color-fill",-1),qn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),bn=n("span",{class:"token punctuation"},"/>",-1),Cn={class:"token tag"},Fn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),xn=n("span",{class:"token attr-name"},":progress",-1),wn={class:"token attr-value"},Bn=n("span",{class:"token punctuation attr-equals"},"=",-1),Gn=n("span",{class:"token punctuation"},'"',-1),Sn=n("span",{class:"token punctuation"},'"',-1),Tn=n("span",{class:"token attr-name"},":color-fill",-1),jn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),An=n("span",{class:"token punctuation"},"/>",-1),zn={class:"token tag"},Nn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),In=n("span",{class:"token attr-name"},":progress",-1),Vn={class:"token attr-value"},En=n("span",{class:"token punctuation attr-equals"},"=",-1),On=n("span",{class:"token punctuation"},'"',-1),Pn=n("span",{class:"token punctuation"},'"',-1),Dn=n("span",{class:"token attr-name"},":color-fill",-1),Mn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),Rn=n("span",{class:"token punctuation"},"/>",-1),Ln=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Wn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Un=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
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
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#8A2BE2\\t"'),n("span",{class:"token punctuation"},","),s(`
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
`)])],-1),Hn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Jn=n("p",null,"The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone. The following examples give some inspiration:",-1),Kn={class:"language-vue","data-ext":"vue"},Qn={class:"language-vue"},Xn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Yn={class:"token tag"},Zn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),$n=n("span",{class:"token attr-name"},":progress",-1),ns={class:"token attr-value"},ss=n("span",{class:"token punctuation attr-equals"},"=",-1),ts=n("span",{class:"token punctuation"},'"',-1),as=n("span",{class:"token punctuation"},'"',-1),os=n("span",{class:"token attr-name"},":color-fill",-1),ps=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),es=n("span",{class:"token punctuation"},"/>",-1),cs={class:"token tag"},ls=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),rs=n("span",{class:"token attr-name"},":progress",-1),us={class:"token attr-value"},is=n("span",{class:"token punctuation attr-equals"},"=",-1),ks=n("span",{class:"token punctuation"},'"',-1),_s=n("span",{class:"token punctuation"},'"',-1),ds=n("span",{class:"token attr-name"},":color-fill",-1),ys=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),gs=n("span",{class:"token attr-name"},"color",-1),hs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#7579ff"),n("span",{class:"token punctuation"},'"')],-1),fs=n("span",{class:"token attr-name"},"empty-color",-1),ms=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("transparent"),n("span",{class:"token punctuation"},'"')],-1),vs=n("span",{class:"token attr-name"},":thickness",-1),qs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')],-1),bs=n("span",{class:"token attr-name"},":empty-thickness",-1),Cs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')],-1),Fs=n("span",{class:"token attr-name"},"lineMode",-1),xs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out 5"),n("span",{class:"token punctuation"},'"')],-1),ws=n("span",{class:"token punctuation"},"/>",-1),Bs={class:"token tag"},Gs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Ss=n("span",{class:"token attr-name"},":progress",-1),Ts={class:"token attr-value"},js=n("span",{class:"token punctuation attr-equals"},"=",-1),As=n("span",{class:"token punctuation"},'"',-1),zs=n("span",{class:"token punctuation"},'"',-1),Ns=n("span",{class:"token attr-name"},":color-fill",-1),Is=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),Vs=n("span",{class:"token attr-name"},"thickness",-1),Es=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),Os=n("span",{class:"token attr-name"},"empty-color",-1),Ps=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("transparent"),n("span",{class:"token punctuation"},'"')],-1),Ds=n("span",{class:"token punctuation"},"/>",-1),Ms={class:"token tag"},Rs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Ls=n("span",{class:"token attr-name"},":progress",-1),Ws={class:"token attr-value"},Us=n("span",{class:"token punctuation attr-equals"},"=",-1),Hs=n("span",{class:"token punctuation"},'"',-1),Js=n("span",{class:"token punctuation"},'"',-1),Ks=n("span",{class:"token attr-name"},":color-fill",-1),Qs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient4"),n("span",{class:"token punctuation"},'"')],-1),Xs=n("span",{class:"token attr-name"},"line",-1),Ys=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("butt"),n("span",{class:"token punctuation"},'"')],-1),Zs=n("span",{class:"token attr-name"},"empty-color",-1),$s=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#324c7e"),n("span",{class:"token punctuation"},'"')],-1),nt=n("span",{class:"token attr-name"},":thickness",-1),st=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("46"),n("span",{class:"token punctuation"},'"')],-1),tt=n("span",{class:"token attr-name"},":emptyThickness",-1),at=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("8"),n("span",{class:"token punctuation"},'"')],-1),ot=n("span",{class:"token attr-name"},":size",-1),pt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("180"),n("span",{class:"token punctuation"},'"')],-1),et=n("span",{class:"token attr-name"},"dash",-1),ct=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("strict 60 0.8"),n("span",{class:"token punctuation"},'"')],-1),lt=n("span",{class:"token attr-name"},"lineMode",-1),rt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in"),n("span",{class:"token punctuation"},'"')],-1),ut=n("span",{class:"token punctuation"},"/>",-1),it={class:"token tag"},kt=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),_t=n("span",{class:"token attr-name"},":progress",-1),dt={class:"token attr-value"},yt=n("span",{class:"token punctuation attr-equals"},"=",-1),gt=n("span",{class:"token punctuation"},'"',-1),ht=n("span",{class:"token punctuation"},'"',-1),ft=n("span",{class:"token attr-name"},":color-fill",-1),mt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient5"),n("span",{class:"token punctuation"},'"')],-1),vt=n("span",{class:"token attr-name"},":empty-thickness",-1),qt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),bt=n("span",{class:"token punctuation"},"/>",-1),Ct={class:"token tag"},Ft=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),xt=n("span",{class:"token attr-name"},":progress",-1),wt={class:"token attr-value"},Bt=n("span",{class:"token punctuation attr-equals"},"=",-1),Gt=n("span",{class:"token punctuation"},'"',-1),St=n("span",{class:"token punctuation"},'"',-1),Tt=n("span",{class:"token attr-name"},":color-fill",-1),jt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient4"),n("span",{class:"token punctuation"},'"')],-1),At=n("span",{class:"token attr-name"},":thickness",-1),zt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),Nt=n("span",{class:"token attr-name"},":empty-thickness",-1),It=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')],-1),Vt=n("span",{class:"token attr-name"},"color",-1),Et=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#7579ff"),n("span",{class:"token punctuation"},'"')],-1),Ot=n("span",{class:"token attr-name"},"empty-color",-1),Pt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#324c7e"),n("span",{class:"token punctuation"},'"')],-1),Dt=n("span",{class:"token attr-name"},"dash",-1),Mt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("strict 60 0.8"),n("span",{class:"token punctuation"},'"')],-1),Rt=n("span",{class:"token attr-name"},"lineMode",-1),Lt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in-over"),n("span",{class:"token punctuation"},'"')],-1),Wt=n("span",{class:"token punctuation"},"/>",-1),Ut=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Ht=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Jt=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
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
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#754fc1"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.3"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#366bfc"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"100"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.3"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"gradient3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
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
      `),n("span",{class:"token literal-property property"},"gradient4"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.2"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
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
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"transparent"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"90"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"transparent"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"95"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"transparent"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"95"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.1"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"colorGradient"),n("span",{class:"token operator"},":"),s("  "),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"radial"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"colors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"50"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.0"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"#3260FC"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"offset"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"70"'),n("span",{class:"token punctuation"},","),s(`
            `),n("span",{class:"token literal-property property"},"opacity"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"0.0"'),n("span",{class:"token punctuation"},","),s(`
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
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])],-1),Kt=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1);function Qt(Xt,Yt){const d=e("RouterLink"),u=e("v-e-p"),y=e("color-fill-random"),i=e("CodeGroupItem"),k=e("CodeGroup"),g=e("example-container"),h=e("color-fill-gradient"),f=e("color-fill-gradient-crazy");return v(),q("div",null,[C,n("div",F,[x,n("p",null,[s("According to default SVG behaviour, the fill area of the circle is aligned at the baseline of the progress line. With the "),a(d,{to:"/guide/options/linePosition.html"},{default:p(()=>[w]),_:1}),s(" property this behaviour can be adjusted.")])]),B,a(g,{class:"mb-16"},{default:p(({progress:t,loading:c,slider:Zt,noData:l,determinate:r})=>[a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"color-fill":"DimGray"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"color-fill":"#1ABC9C"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"color-fill":"rgba(255, 87, 51, 0.7)"},null,8,["progress","loading","no-data","determinate"]),a(y,{progress:t,loading:c,"no-data":l,determinate:r},null,8,["progress","loading","no-data","determinate"])]),code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",G,[n("pre",S,[n("code",null,[T,s(`
  `),n("span",j,[A,s(),z,n("span",N,[I,V,s(o(t),1),E]),s(),O,P,D]),s(`
  `),n("span",M,[R,s(),L,n("span",W,[U,H,s(o(t),1),J]),s(),K,Q,X]),s(`
  `),n("span",Y,[Z,s(),$,n("span",nn,[sn,tn,s(o(t),1),an]),s(),on,pn,en]),s(`
`),cn,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),ln,a(h,{class:"mb-16"},{code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",rn,[n("pre",un,[n("code",null,[kn,s(`
  `),n("span",_n,[dn,s(),yn,n("span",gn,[hn,fn,s(o(t),1),mn]),s(),vn,qn,bn]),s(`
  `),n("span",Cn,[Fn,s(),xn,n("span",wn,[Bn,Gn,s(o(t),1),Sn]),s(),Tn,jn,An]),s(`
  `),n("span",zn,[Nn,s(),In,n("span",Vn,[En,On,s(o(t),1),Pn]),s(),Dn,Mn,Rn]),s(`
`),Ln,s(`
`),Wn,Un,Hn,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),Jn,a(f,null,{code:p(({progress:t})=>[a(k,null,{default:p(()=>[a(i,null,{default:p(()=>[n("div",Kn,[n("pre",Qn,[n("code",null,[Xn,s(`
  `),n("span",Yn,[Zn,s(),$n,n("span",ns,[ss,ts,s(o(t),1),as]),s(),os,ps,es]),s(`
  `),n("span",cs,[ls,s(` 
    `),rs,n("span",us,[is,ks,s(o(t),1),_s]),s(` 
    `),ds,ys,s(` 
    `),gs,hs,s(`
    `),fs,ms,s(`
    `),vs,qs,s(`
    `),bs,Cs,s(`
    `),Fs,xs,ws]),s(`
  `),n("span",Bs,[Gs,s(` 
    `),Ss,n("span",Ts,[js,As,s(o(t),1),zs]),s(` 
    `),Ns,Is,s(` 
    `),Vs,Es,s(`
    `),Os,Ps,Ds]),s(`
  `),n("span",Ms,[Rs,s(` 
    `),Ls,n("span",Ws,[Us,Hs,s(o(t),1),Js]),s(` 
    `),Ks,Qs,s(` 
    `),Xs,Ys,s(`
    `),Zs,$s,s(`
    `),nt,st,s(`
    `),tt,at,s(`
    `),ot,pt,s(`
    `),et,ct,s(`
    `),lt,rt,ut]),s(`
  `),n("span",it,[kt,s(),_t,n("span",dt,[yt,gt,s(o(t),1),ht]),s(),ft,mt,s(),vt,qt,bt]),s(`
  `),n("span",Ct,[Ft,s(` 
    `),xt,n("span",wt,[Bt,Gt,s(o(t),1),St]),s(` 
    `),Tt,jt,s(` 
    `),At,zt,s(`
    `),Nt,It,s(`
    `),Vt,Et,s(`
    `),Ot,Pt,s(`
    `),Dt,Mt,s(`
    `),Rt,Lt,Wt]),s(`
`),Ut,s(`
`),Ht,Jt,Kt,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1})])}const na=m(b,[["render",Qt],["__file","colorFill.html.vue"]]);export{na as default};
