import{_ as g,r as i,o as m,c as v,b as a,w as o,a as t,d as n,t as e,e as y}from"./app-eef40e08.js";const b={},f=y(`<h1 id="dot" tabindex="-1"><a class="header-anchor" href="#dot" aria-hidden="true">#</a> <code>dot</code></h1><h6 id="animated-✔️" tabindex="-1"><a class="header-anchor" href="#animated-✔️" aria-hidden="true">#</a> Animated: ✔️</h6><table><thead><tr><th>type</th><th>values</th><th>default</th></tr></thead><tbody><tr><td>Number | String | Object</td><td>Accepts size, color and other styles as Number, descriptive string <code>&quot;size [color]&quot;</code> or object <code>{size [, backgroundColor, widht, borderRadius ...]}</code></td><td>0</td></tr></tbody></table><p>The <code>dot</code> property lets you define a point indicator at the end of the progress line. You have a lot of freedom to customize the dot using a Number, descriptive String, or an Object to inject any CSS styles.</p><p><strong>Number</strong>: <code>:dot=&quot;10&quot;</code> - specifies a round dot with 10px width and height and default <code>#713dfd</code> color</p><p><strong>Descriptive string</strong>: <code>dot=&quot;size [color]&quot;</code> - <code>size</code> can be just a Number or a percent value like <code>5%</code>, the calculation for percent values is similar to <strong><a href="#thickness"><code>thickness</code></a></strong> and depends on the <strong><a href="#size"><code>size</code></a></strong>. <code>color</code> is optional and lets you quickly define the color of the dot. The order of properties is important for parsing the String, and you can set the <code>color</code> only if the <code>size</code> is defined.</p><p><strong>Object</strong>: <code>:dot=&quot;{ size: Number | String [, any CSS inline style with Vue syntax] }&quot;</code> - to customize the point, you can define the prop as an Object. <code>size</code> is required and can be just a Number or a String to define a percent value. Only defining the prop as an Object you have the possibility to add any styles to the dot you want to, using Vue syntax for defining inline styles, you can even completely break the positioning of the dot, if you need. You cannot override the <code>height</code> of the dot since it is important for internal calculation and must be controllable.</p><h3 id="usage-📜" tabindex="-1"><a class="header-anchor" href="#usage-📜" aria-hidden="true">#</a> Usage 📜</h3><div class="language-vue" data-ext="vue"><pre class="language-vue"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">:dot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">dot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5% blue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ve-progress</span> <span class="token attr-name">:dot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ size: 10, backgroundColor: &#39;red&#39;}<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>Let&#39;s start with simple cases</p>`,11),q={class:"language-vue","data-ext":"vue"},x={class:"language-vue"},C=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")],-1),z={class:"token tag"},w=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),N=t("span",{class:"token attr-name"},":progress",-1),S={class:"token attr-value"},j=t("span",{class:"token punctuation attr-equals"},"=",-1),D=t("span",{class:"token punctuation"},'"',-1),E=t("span",{class:"token punctuation"},'"',-1),O=t("span",{class:"token attr-name"},":dot",-1),V=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("15"),t("span",{class:"token punctuation"},'"')],-1),B=t("span",{class:"token punctuation"},"/>",-1),G={class:"token tag"},Y=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),L=t("span",{class:"token attr-name"},":progress",-1),T={class:"token attr-value"},U=t("span",{class:"token punctuation attr-equals"},"=",-1),A=t("span",{class:"token punctuation"},'"',-1),I=t("span",{class:"token punctuation"},'"',-1),K=t("span",{class:"token attr-name"},"dot",-1),P=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("8 lightgray"),t("span",{class:"token punctuation"},'"')],-1),H=t("span",{class:"token punctuation"},"/>",-1),R={class:"token tag"},F=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),J=t("span",{class:"token attr-name"},":progress",-1),M={class:"token attr-value"},Q=t("span",{class:"token punctuation attr-equals"},"=",-1),W=t("span",{class:"token punctuation"},'"',-1),X=t("span",{class:"token punctuation"},'"',-1),Z=t("span",{class:"token attr-name"},"dot",-1),$=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2% lightgray"),t("span",{class:"token punctuation"},'"')],-1),tt=t("span",{class:"token punctuation"},"/>",-1),nt=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")],-1),st=t("div",{class:"mt-16"}," Here the dot becomes anything you wish ",-1),at={class:"language-vue","data-ext":"vue"},ot={class:"language-vue"},et=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")],-1),ct={class:"token tag"},pt=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),lt=t("span",{class:"token attr-name"},":progress",-1),ut={class:"token attr-value"},it=t("span",{class:"token punctuation attr-equals"},"=",-1),rt=t("span",{class:"token punctuation"},'"',-1),kt=t("span",{class:"token punctuation"},'"',-1),dt=t("span",{class:"token attr-name"},"line-mode",-1),_t=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("out"),t("span",{class:"token punctuation"},'"')],-1),ht=t("span",{class:"token attr-name"},":empty-thickness",-1),gt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')],-1),mt=t("span",{class:"token attr-name"},"color",-1),vt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Navy"),t("span",{class:"token punctuation"},'"')],-1),yt=t("span",{class:"token attr-name"},":dot",-1),bt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
        size: 10,
        backgroundColor: 'transparent',
        border: '2px DEEPSKYBLUE solid',
      }`),t("span",{class:"token punctuation"},'"')],-1),ft=t("span",{class:"token punctuation"},"/>",-1),qt={class:"token tag"},xt=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),Ct=t("span",{class:"token attr-name"},":progress",-1),zt={class:"token attr-value"},wt=t("span",{class:"token punctuation attr-equals"},"=",-1),Nt=t("span",{class:"token punctuation"},'"',-1),St=t("span",{class:"token punctuation"},'"',-1),jt=t("span",{class:"token attr-name"},"line-mode",-1),Dt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("out"),t("span",{class:"token punctuation"},'"')],-1),Et=t("span",{class:"token attr-name"},":thickness",-1),Ot=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("50"),t("span",{class:"token punctuation"},'"')],-1),Vt=t("span",{class:"token attr-name"},":empty-thickness",-1),Bt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')],-1),Gt=t("span",{class:"token attr-name"},"line",-1),Yt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("butt"),t("span",{class:"token punctuation"},'"')],-1),Lt=t("span",{class:"token attr-name"},"color",-1),Tt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Navy"),t("span",{class:"token punctuation"},'"')],-1),Ut=t("span",{class:"token attr-name"},":dot",-1),At=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
        size: 50,
        backgroundColor: 'DarkCyan',
        width: '4px',
      }`),t("span",{class:"token punctuation"},'"')],-1),It=t("span",{class:"token punctuation"},"/>",-1),Kt={class:"token tag"},Pt=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),Ht=t("span",{class:"token attr-name"},":progress",-1),Rt={class:"token attr-value"},Ft=t("span",{class:"token punctuation attr-equals"},"=",-1),Jt=t("span",{class:"token punctuation"},'"',-1),Mt=t("span",{class:"token punctuation"},'"',-1),Qt=t("span",{class:"token attr-name"},"line-mode",-1),Wt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("in"),t("span",{class:"token punctuation"},'"')],-1),Xt=t("span",{class:"token attr-name"},":thickness",-1),Zt=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("70"),t("span",{class:"token punctuation"},'"')],-1),$t=t("span",{class:"token attr-name"},":empty-thickness",-1),tn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')],-1),nn=t("span",{class:"token attr-name"},"line",-1),sn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("butt"),t("span",{class:"token punctuation"},'"')],-1),an=t("span",{class:"token attr-name"},":color",-1),on=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
        radial: true,
        colors: [
        {
            color: 'blue',
            offset: 0,
        },
        {
            color: 'blue',
            offset: 47,
        },
        {
            color: 'transparent',
            offset: 48,
        },
        {
            color: 'transparent',
            offset: 100,
        }
    ]    
    }`),t("span",{class:"token punctuation"},'"')],-1),en=t("span",{class:"token attr-name"},":dot",-1),cn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
        size: 70,
        backgroundColor: 'DarkCyan',
        width: '2px',
      }`),t("span",{class:"token punctuation"},'"')],-1),pn=t("span",{class:"token punctuation"},"/>",-1),ln=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")],-1),un={class:"language-vue","data-ext":"vue"},rn={class:"language-vue"},kn=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")],-1),dn={class:"token tag"},_n=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),hn=t("span",{class:"token attr-name"},":progress",-1),gn={class:"token attr-value"},mn=t("span",{class:"token punctuation attr-equals"},"=",-1),vn=t("span",{class:"token punctuation"},'"',-1),yn=t("span",{class:"token punctuation"},'"',-1),bn=t("span",{class:"token attr-name"},"line-mode",-1),fn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("in"),t("span",{class:"token punctuation"},'"')],-1),qn=t("span",{class:"token attr-name"},"empty-color",-1),xn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("transparent"),t("span",{class:"token punctuation"},'"')],-1),Cn=t("span",{class:"token attr-name"},":determinate",-1),zn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("determinate"),t("span",{class:"token punctuation"},'"')],-1),wn=t("span",{class:"token attr-name"},"dot",-1),Nn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("10 gray"),t("span",{class:"token punctuation"},'"')],-1),Sn=t("span",{class:"token punctuation"},"/>",-1),jn={class:"token tag"},Dn=t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ve-progress")],-1),En=t("span",{class:"token attr-name"},":progress",-1),On={class:"token attr-value"},Vn=t("span",{class:"token punctuation attr-equals"},"=",-1),Bn=t("span",{class:"token punctuation"},'"',-1),Gn=t("span",{class:"token punctuation"},'"',-1),Yn=t("span",{class:"token attr-name"},"line-mode",-1),Ln=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("in"),t("span",{class:"token punctuation"},'"')],-1),Tn=t("span",{class:"token attr-name"},":thickness",-1),Un=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("70"),t("span",{class:"token punctuation"},'"')],-1),An=t("span",{class:"token attr-name"},":empty-thickness",-1),In=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')],-1),Kn=t("span",{class:"token attr-name"},"line",-1),Pn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("butt"),t("span",{class:"token punctuation"},'"')],-1),Hn=t("span",{class:"token attr-name"},"color",-1),Rn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Navy"),t("span",{class:"token punctuation"},'"')],-1),Fn=t("span",{class:"token attr-name"},":dot",-1),Jn=t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
      size: 70,
      backgroundColor: 'DarkCyan',
      width: '1px',
    }`),t("span",{class:"token punctuation"},'"')],-1),Mn=t("span",{class:"token punctuation"},"/>",-1),Qn=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")],-1),Wn=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("scss"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")],-1),Xn=t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".my-circle"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token selector"},".ep-circle--progress__dot"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token selector"},"&:after"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},"content"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" block"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" absolute"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 15px"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 15px"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" transparent"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"border"),t("span",{class:"token punctuation"},":"),n(" 2px gray solid"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"border-radius"),t("span",{class:"token punctuation"},":"),n(" 50%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"right"),t("span",{class:"token punctuation"},":"),n(" -50%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"top"),t("span",{class:"token punctuation"},":"),n(" -48%"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".my-circle2"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token selector"},".ep-circle--progress__dot"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token selector"},"&:after"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},"content"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" block"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" absolute"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 1px"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 70%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" DarkCyan"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"bottom"),t("span",{class:"token punctuation"},":"),n(" 15%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),n(" 5px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token selector"},"&:before"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},"content"),t("span",{class:"token punctuation"},":"),n(),t("span",{class:"token string"},'""'),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" block"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" absolute"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 1px"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n(" 70%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"background-color"),t("span",{class:"token punctuation"},":"),n(" DarkCyan"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"border-radius"),t("span",{class:"token punctuation"},":"),n(" 50%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"bottom"),t("span",{class:"token punctuation"},":"),n(" 15%"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token property"},"right"),t("span",{class:"token punctuation"},":"),n(" 5px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])],-1),Zn=t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")],-1);function $n(ts,ns){const u=i("v-e-p"),r=i("CodeGroupItem"),k=i("CodeGroup"),d=i("example-container"),_=i("Dot");return m(),v("div",null,[f,a(d,null,{default:o(({loading:s,progress:c,slider:h,noData:p,determinate:l})=>[a(u,{progress:c,loading:s,"no-data":p,determinate:l,dot:15},null,8,["progress","loading","no-data","determinate"]),a(u,{progress:c,loading:s,"no-data":p,determinate:l,dot:"8 lightgray"},null,8,["progress","loading","no-data","determinate"]),a(u,{progress:c,loading:s,"no-data":p,determinate:l,dot:"2% lightgray"},null,8,["progress","loading","no-data","determinate"])]),code:o(({progress:s})=>[a(k,null,{default:o(()=>[a(r,null,{default:o(()=>[t("div",q,[t("pre",x,[t("code",null,[C,n(`
  `),t("span",z,[w,n(),N,t("span",S,[j,D,n(e(s),1),E]),n(),O,V,n(),B]),n(`
  `),t("span",G,[Y,n(),L,t("span",T,[U,A,n(e(s),1),I]),n(),K,P,n(),H]),n(`
  `),t("span",R,[F,n(),J,t("span",M,[Q,W,n(e(s),1),X]),n(),Z,$,n(),tt]),n(`
`),nt,n(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),st,a(d,null,{default:o(({loading:s,progress:c,slider:h,noData:p,determinate:l})=>[a(u,{progress:c,loading:s,"no-data":p,determinate:l,"line-mode":"out","empty-thickness":2,color:"Navy",dot:{size:10,backgroundColor:"transparent",border:"2px DEEPSKYBLUE solid"}},null,8,["progress","loading","no-data","determinate"]),a(u,{progress:c,loading:s,"no-data":p,determinate:l,"line-mode":"out",thickness:50,"empty-thickness":2,line:"butt",color:"Navy",dot:{size:50,backgroundColor:"DarkCyan",width:"4px"}},null,8,["progress","loading","no-data","determinate"]),a(u,{progress:c,loading:s,"no-data":p,determinate:l,"line-mode":"in",thickness:70,"empty-thickness":2,line:"butt",color:{radial:!0,colors:[{color:"blue",offset:0},{color:"blue",offset:47},{color:"transparent",offset:48},{color:"transparent",offset:100}]},dot:{size:70,backgroundColor:"DarkCyan",width:"2px"}},null,8,["progress","loading","no-data","determinate"])]),code:o(({progress:s})=>[a(k,null,{default:o(()=>[a(r,null,{default:o(()=>[t("div",at,[t("pre",ot,[t("code",null,[et,n(`
  `),t("span",ct,[pt,n(` 
    `),lt,t("span",ut,[it,rt,n(e(s),1),kt]),n(` 
    `),dt,_t,n(`
    `),ht,gt,n(`
    `),mt,vt,n(`
    `),yt,bt,n(`
  `),ft]),n(`
  `),t("span",qt,[xt,n(` 
    `),Ct,t("span",zt,[wt,Nt,n(e(s),1),St]),n(` 
    `),jt,Dt,n(`
    `),Et,Ot,n(`
    `),Vt,Bt,n(`
    `),Gt,Yt,n(`
    `),Lt,Tt,n(`
    `),Ut,At,n(`
    `),It]),n(`
  `),t("span",Kt,[Pt,n(` 
    `),Ht,t("span",Rt,[Ft,Jt,n(e(s),1),Mt]),n(` 
    `),Qt,Wt,n(`
    `),Xt,Zt,n(`
    `),$t,tn,n(`
    `),nn,sn,n(`
    `),an,on,n(`
    `),en,cn,n(`
    `),pn]),n(`
`),ln,n(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1}),a(_,{class:"mb-16"},{code:o(({progress:s})=>[a(k,null,{default:o(()=>[a(r,null,{default:o(()=>[t("div",un,[t("pre",rn,[t("code",null,[kn,n(`
  `),t("span",dn,[_n,n(` 
    `),hn,t("span",gn,[mn,vn,n(e(s),1),yn]),n(` 
    `),bn,fn,n(`
    `),qn,xn,n(`
    `),Cn,zn,n(`
    `),wn,Nn,n(`
  `),Sn]),n(`
  `),t("span",jn,[Dn,n(` 
    `),En,t("span",On,[Vn,Bn,n(e(s),1),Gn]),n(` 
    `),Yn,Ln,n(`
    `),Tn,Un,n(`
    `),An,In,n(`
    `),Kn,Pn,n(`
    `),Hn,Rn,n(`
    `),Fn,Jn,n(`
  `),Mn]),n(`
`),Qn,n(`
`),Wn,Xn,Zn,n(`
`)])])])]),_:2},1024)]),_:2},1024)]),_:1})])}const as=g(b,[["render",$n],["__file","dot.html.vue"]]);export{as as default};
