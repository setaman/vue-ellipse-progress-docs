import{_ as m,r as e,o as v,c as q,a as n,d as s,b as a,w as o,t as p,e as y}from"./app-eef40e08.js";const b={},C=y('<h1 id="emptycolorfill" tabindex="-1"><a class="header-anchor" href="#emptycolorfill" aria-hidden="true">#</a> <code>emptyColorFill</code></h1><h6 id="animated-✔️" tabindex="-1"><a class="header-anchor" href="#animated-✔️" aria-hidden="true">#</a> Animated: ✔️</h6><table><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>String | Object</td><td>any CSS color as String or Object to specify gradient</td><td>&quot;transparent&quot;</td></tr></tbody></table><p>Defines the fill color of the empty circle. The property accepts any CSS color like <code>#123</code>, <code>rgba(230, 233, 240, 0.1)</code> or <code>lime</code> or an Object to define gradients.</p><p>The general scheme to define the gradient is defined like follows:</p><ul><li><code>:color=&quot;{ colors [, radial ]}&quot;</code><ul><li><code>radial</code> - default <code>false</code>. Boolean that defines, whether the gradient is radial or linear</li><li><code>colors</code> - array that contains the gradient colors as Objects <code>{ color: &quot;#6546f7&quot;, offset: &quot;10&quot; [, opacity: 1] }</code></li></ul></li></ul>',6),F={class:"custom-container warning"},x=n("p",{class:"custom-container-title"},"WARNING",-1),w=n("code",null,"colorFill",-1),B={class:"custom-container tip"},G=n("p",{class:"custom-container-title"},"TIP",-1),S=n("code",null,"emptyLinePosition",-1),T=y(`<h6 id="usage-📜" tabindex="-1"><a class="header-anchor" href="#usage-📜" aria-hidden="true">#</a> Usage: 📜</h6><div class="language-vue" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#3f79ff<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>lime<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">empty-color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rgba(230, 233, 240, 0.1)<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span>
  <span class="token attr-name">:empty-color-fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
    radial: false,
    colors: [
      { color: &#39;#6546f7&#39;, offset: &#39;0&#39;, opacity: 1 },
      { color: &#39;lime&#39;, offset: &#39;100&#39;, opacity: 0.6 },
    ],
  }<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3>`,3),j={class:"language-vue","data-ext":"vue"},A={class:"language-vue"},z=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),N={class:"token tag"},I=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),V=n("span",{class:"token attr-name"},":progress",-1),E={class:"token attr-value"},L=n("span",{class:"token punctuation attr-equals"},"=",-1),O=n("span",{class:"token punctuation"},'"',-1),D=n("span",{class:"token punctuation"},'"',-1),M=n("span",{class:"token attr-name"},"empty-color-fill",-1),P=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("DimGray"),n("span",{class:"token punctuation"},'"')],-1),R=n("span",{class:"token punctuation"},"/>",-1),W={class:"token tag"},U=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),H=n("span",{class:"token attr-name"},":progress",-1),J={class:"token attr-value"},K=n("span",{class:"token punctuation attr-equals"},"=",-1),Q=n("span",{class:"token punctuation"},'"',-1),X=n("span",{class:"token punctuation"},'"',-1),Y=n("span",{class:"token attr-name"},"color-fill",-1),Z=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("blue"),n("span",{class:"token punctuation"},'"')],-1),$=n("span",{class:"token attr-name"},"line-mode",-1),nn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in 10"),n("span",{class:"token punctuation"},'"')],-1),sn=n("span",{class:"token attr-name"},"empty-color-fill",-1),tn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#1ABC9C"),n("span",{class:"token punctuation"},'"')],-1),an=n("span",{class:"token punctuation"},"/>",-1),on={class:"token tag"},pn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),en=n("span",{class:"token attr-name"},":progress",-1),cn={class:"token attr-value"},ln=n("span",{class:"token punctuation attr-equals"},"=",-1),rn=n("span",{class:"token punctuation"},'"',-1),un=n("span",{class:"token punctuation"},'"',-1),kn=n("span",{class:"token attr-name"},"empty-color-fill",-1),_n=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rgba(255, 87, 51, 0.7)"),n("span",{class:"token punctuation"},'"')],-1),yn=n("span",{class:"token punctuation"},"/>",-1),dn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),hn=n("p",null,"The examples below demonstrate how gradient colors can be defined",-1),gn={class:"language-vue","data-ext":"vue"},fn={class:"language-vue"},mn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),vn={class:"token tag"},qn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),bn=n("span",{class:"token attr-name"},":progress",-1),Cn={class:"token attr-value"},Fn=n("span",{class:"token punctuation attr-equals"},"=",-1),xn=n("span",{class:"token punctuation"},'"',-1),wn=n("span",{class:"token punctuation"},'"',-1),Bn=n("span",{class:"token attr-name"},":empty-color-fill",-1),Gn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),Sn=n("span",{class:"token punctuation"},"/>",-1),Tn={class:"token tag"},jn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),An=n("span",{class:"token attr-name"},":progress",-1),zn={class:"token attr-value"},Nn=n("span",{class:"token punctuation attr-equals"},"=",-1),In=n("span",{class:"token punctuation"},'"',-1),Vn=n("span",{class:"token punctuation"},'"',-1),En=n("span",{class:"token attr-name"},":empty-color-fill",-1),Ln=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),On=n("span",{class:"token punctuation"},"/>",-1),Dn={class:"token tag"},Mn=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Pn=n("span",{class:"token attr-name"},":progress",-1),Rn={class:"token attr-value"},Wn=n("span",{class:"token punctuation attr-equals"},"=",-1),Un=n("span",{class:"token punctuation"},'"',-1),Hn=n("span",{class:"token punctuation"},'"',-1),Jn=n("span",{class:"token attr-name"},":empty-color-fill",-1),Kn=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),Qn=n("span",{class:"token punctuation"},"/>",-1),Xn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),Yn=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),Zn=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
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
`)])],-1),$n=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1),ns=n("p",null,"The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone. The following examples give some inspiration:",-1),ss={class:"language-vue","data-ext":"vue"},ts={class:"language-vue"},as=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")],-1),os={class:"token tag"},ps=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),es=n("span",{class:"token attr-name"},":progress",-1),cs={class:"token attr-value"},ls=n("span",{class:"token punctuation attr-equals"},"=",-1),rs=n("span",{class:"token punctuation"},'"',-1),us=n("span",{class:"token punctuation"},'"',-1),is=n("span",{class:"token attr-name"},":empty-color-fill",-1),ks=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient1"),n("span",{class:"token punctuation"},'"')],-1),_s=n("span",{class:"token punctuation"},"/>",-1),ys={class:"token tag"},ds=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),hs=n("span",{class:"token attr-name"},":progress",-1),gs={class:"token attr-value"},fs=n("span",{class:"token punctuation attr-equals"},"=",-1),ms=n("span",{class:"token punctuation"},'"',-1),vs=n("span",{class:"token punctuation"},'"',-1),qs=n("span",{class:"token attr-name"},":empty-color-fill",-1),bs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient2"),n("span",{class:"token punctuation"},'"')],-1),Cs=n("span",{class:"token attr-name"},"color",-1),Fs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#7579ff"),n("span",{class:"token punctuation"},'"')],-1),xs=n("span",{class:"token attr-name"},"empty-color",-1),ws=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("transparent"),n("span",{class:"token punctuation"},'"')],-1),Bs=n("span",{class:"token attr-name"},":thickness",-1),Gs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("5"),n("span",{class:"token punctuation"},'"')],-1),Ss=n("span",{class:"token attr-name"},":empty-thickness",-1),Ts=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("3"),n("span",{class:"token punctuation"},'"')],-1),js=n("span",{class:"token attr-name"},"lineMode",-1),As=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("out 5"),n("span",{class:"token punctuation"},'"')],-1),zs=n("span",{class:"token punctuation"},"/>",-1),Ns={class:"token tag"},Is=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Vs=n("span",{class:"token attr-name"},":progress",-1),Es={class:"token attr-value"},Ls=n("span",{class:"token punctuation attr-equals"},"=",-1),Os=n("span",{class:"token punctuation"},'"',-1),Ds=n("span",{class:"token punctuation"},'"',-1),Ms=n("span",{class:"token attr-name"},":empty-color-fill",-1),Ps=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient3"),n("span",{class:"token punctuation"},'"')],-1),Rs=n("span",{class:"token attr-name"},"thickness",-1),Ws=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),Us=n("span",{class:"token attr-name"},"empty-color",-1),Hs=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("transparent"),n("span",{class:"token punctuation"},'"')],-1),Js=n("span",{class:"token punctuation"},"/>",-1),Ks={class:"token tag"},Qs=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),Xs=n("span",{class:"token attr-name"},":progress",-1),Ys={class:"token attr-value"},Zs=n("span",{class:"token punctuation attr-equals"},"=",-1),$s=n("span",{class:"token punctuation"},'"',-1),nt=n("span",{class:"token punctuation"},'"',-1),st=n("span",{class:"token attr-name"},":empty-color-fill",-1),tt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient4"),n("span",{class:"token punctuation"},'"')],-1),at=n("span",{class:"token attr-name"},"line",-1),ot=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("butt"),n("span",{class:"token punctuation"},'"')],-1),pt=n("span",{class:"token attr-name"},"empty-color",-1),et=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#324c7e"),n("span",{class:"token punctuation"},'"')],-1),ct=n("span",{class:"token attr-name"},":thickness",-1),lt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("46"),n("span",{class:"token punctuation"},'"')],-1),rt=n("span",{class:"token attr-name"},":emptyThickness",-1),ut=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("8"),n("span",{class:"token punctuation"},'"')],-1),it=n("span",{class:"token attr-name"},":size",-1),kt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("180"),n("span",{class:"token punctuation"},'"')],-1),_t=n("span",{class:"token attr-name"},"dash",-1),yt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("strict 60 0.8"),n("span",{class:"token punctuation"},'"')],-1),dt=n("span",{class:"token attr-name"},"lineMode",-1),ht=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in"),n("span",{class:"token punctuation"},'"')],-1),gt=n("span",{class:"token punctuation"},"/>",-1),ft={class:"token tag"},mt=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),vt=n("span",{class:"token attr-name"},":progress",-1),qt={class:"token attr-value"},bt=n("span",{class:"token punctuation attr-equals"},"=",-1),Ct=n("span",{class:"token punctuation"},'"',-1),Ft=n("span",{class:"token punctuation"},'"',-1),xt=n("span",{class:"token attr-name"},":empty-color-fill",-1),wt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient5"),n("span",{class:"token punctuation"},'"')],-1),Bt=n("span",{class:"token attr-name"},":empty-thickness",-1),Gt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),St=n("span",{class:"token punctuation"},"/>",-1),Tt={class:"token tag"},jt=n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("ve-progress")],-1),At=n("span",{class:"token attr-name"},":progress",-1),zt={class:"token attr-value"},Nt=n("span",{class:"token punctuation attr-equals"},"=",-1),It=n("span",{class:"token punctuation"},'"',-1),Vt=n("span",{class:"token punctuation"},'"',-1),Et=n("span",{class:"token attr-name"},":empty-color-fill",-1),Lt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("gradient4"),n("span",{class:"token punctuation"},'"')],-1),Ot=n("span",{class:"token attr-name"},":thickness",-1),Dt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')],-1),Mt=n("span",{class:"token attr-name"},":empty-thickness",-1),Pt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("1"),n("span",{class:"token punctuation"},'"')],-1),Rt=n("span",{class:"token attr-name"},"color",-1),Wt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#7579ff"),n("span",{class:"token punctuation"},'"')],-1),Ut=n("span",{class:"token attr-name"},"empty-color",-1),Ht=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("#324c7e"),n("span",{class:"token punctuation"},'"')],-1),Jt=n("span",{class:"token attr-name"},"dash",-1),Kt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("strict 60 0.8"),n("span",{class:"token punctuation"},'"')],-1),Qt=n("span",{class:"token attr-name"},"lineMode",-1),Xt=n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("in-over"),n("span",{class:"token punctuation"},'"')],-1),Yt=n("span",{class:"token punctuation"},"/>",-1),Zt=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")],-1),$t=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")],-1),na=n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
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
`)])],-1),sa=n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")],-1);function ta(aa,oa){const _=e("RouterLink"),u=e("v-e-p"),d=e("empty-color-fill-random"),i=e("CodeGroupItem"),k=e("CodeGroup"),h=e("example-container"),g=e("empty-color-fill-gradient"),f=e("empty-color-fill-gradient-crazy");return v(),q("div",null,[C,n("div",F,[x,n("p",null,[s("If you define the "),a(_,{to:"/guide/options/colorFill.html"},{default:o(()=>[w]),_:1}),s(", the empty circle fill area wil be covered by the progress circle.")])]),n("div",B,[G,n("p",null,[s("According to default SVG behaviour, the fill area of the circle is aligned at the baseline of the empty line. With the "),a(_,{to:"/guide/options/emptyLinePosition.html"},{default:o(()=>[S]),_:1}),s(" property this behaviour can be adjusted.")])]),T,a(h,{class:"mb-16"},{default:o(({progress:t,loading:c,slider:pa,noData:l,determinate:r})=>[a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"empty-color-fill":"DimGray"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"color-fill":"blue","empty-color-fill":"#1ABC9C","line-mode":"in 10"},null,8,["progress","loading","no-data","determinate"]),a(u,{class:"mr-2",size:160,progress:t,loading:c,"no-data":l,determinate:r,"empty-color-fill":"rgba(255, 87, 51, 0.7)"},null,8,["progress","loading","no-data","determinate"]),a(d,{progress:t,loading:c,"no-data":l,determinate:r},null,8,["progress","loading","no-data","determinate"])]),code:o(({progress:t})=>[a(k,null,{default:o(()=>[a(i,null,{default:o(()=>[n("div",j,[n("pre",A,[n("code",null,[z,s(`
  `),n("span",N,[I,s(),V,n("span",E,[L,O,s(p(t),1),D]),s(),M,P,R]),s(`
  `),n("span",W,[U,s(),H,n("span",J,[K,Q,s(p(t),1),X]),s(),Y,Z,s(),$,nn,s(),sn,tn,an]),s(`
  `),n("span",on,[pn,s(),en,n("span",cn,[ln,rn,s(p(t),1),un]),s(),kn,_n,yn]),s(`
`),dn,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),hn,a(g,{class:"mb-16"},{code:o(({progress:t})=>[a(k,null,{default:o(()=>[a(i,null,{default:o(()=>[n("div",gn,[n("pre",fn,[n("code",null,[mn,s(`
  `),n("span",vn,[qn,s(),bn,n("span",Cn,[Fn,xn,s(p(t),1),wn]),s(),Bn,Gn,Sn]),s(`
  `),n("span",Tn,[jn,s(),An,n("span",zn,[Nn,In,s(p(t),1),Vn]),s(),En,Ln,On]),s(`
  `),n("span",Dn,[Mn,s(),Pn,n("span",Rn,[Wn,Un,s(p(t),1),Hn]),s(),Jn,Kn,Qn]),s(`
`),Xn,s(`
`),Yn,Zn,$n,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),ns,a(f,null,{code:o(({progress:t})=>[a(k,null,{default:o(()=>[a(i,null,{default:o(()=>[n("div",ss,[n("pre",ts,[n("code",null,[as,s(`
  `),n("span",os,[ps,s(),es,n("span",cs,[ls,rs,s(p(t),1),us]),s(),is,ks,_s]),s(`
  `),n("span",ys,[ds,s(` 
    `),hs,n("span",gs,[fs,ms,s(p(t),1),vs]),s(` 
    `),qs,bs,s(` 
    `),Cs,Fs,s(`
    `),xs,ws,s(`
    `),Bs,Gs,s(`
    `),Ss,Ts,s(`
    `),js,As,zs]),s(`
  `),n("span",Ns,[Is,s(` 
    `),Vs,n("span",Es,[Ls,Os,s(p(t),1),Ds]),s(` 
    `),Ms,Ps,s(` 
    `),Rs,Ws,s(`
    `),Us,Hs,Js]),s(`
  `),n("span",Ks,[Qs,s(` 
    `),Xs,n("span",Ys,[Zs,$s,s(p(t),1),nt]),s(` 
    `),st,tt,s(` 
    `),at,ot,s(`
    `),pt,et,s(`
    `),ct,lt,s(`
    `),rt,ut,s(`
    `),it,kt,s(`
    `),_t,yt,s(`
    `),dt,ht,gt]),s(`
  `),n("span",ft,[mt,s(),vt,n("span",qt,[bt,Ct,s(p(t),1),Ft]),s(),xt,wt,s(),Bt,Gt,St]),s(`
  `),n("span",Tt,[jt,s(` 
    `),At,n("span",zt,[Nt,It,s(p(t),1),Vt]),s(` 
    `),Et,Lt,s(` 
    `),Ot,Dt,s(`
    `),Mt,Pt,s(`
    `),Rt,Wt,s(`
    `),Ut,Ht,s(`
    `),Jt,Kt,s(`
    `),Qt,Xt,Yt]),s(`
`),Zt,s(`
`),$t,na,sa,s(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1})])}const ca=m(b,[["render",ta],["__file","emptyColorFill.html.vue"]]);export{ca as default};
