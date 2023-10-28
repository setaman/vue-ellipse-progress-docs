---
pageClass: quick-start
---

# vue-ellipse-progress

[![npm (tag)](https://img.shields.io/npm/v/vue-ellipse-progress/next?color=success&label=NPM&style=for-the-badge)](https://www.npmjs.com/package/vue-ellipse-progress)
![GitHub](https://img.shields.io/github/license/setaman/vue-ellipse-progress?style=for-the-badge)
![GitHub Workflow Status (with event)](https://img.shields.io/github/actions/workflow/status/setaman/vue-ellipse-progress/build.yml?style=for-the-badge)

A dependency-free simple, flexible and smooth Vue.js plugin to create beautiful circle progress bars, implemented with SVG.
Start creating circles in three steps:

```js
// install
npm i vue-ellipse-progress@next
// initialize
import veProgress from "vue-ellipse-progress";
createApp(App).use(veProgress);
// use
<ve-progress :progress="50"/>
```

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
  <div>
    <CardLink link="/guide/installation.html" title="Installation options">
      Learn what possibilities you have to include the component in your project
    </CardLink>
  </div>
  <div>
    <CardLink class="fill" link="/guide/options/" title="Configuration">
      Explore wide range of configuration options through the properties and slots
    </CardLink>
  </div>
<div>
    <CardLink link="/guide/compatibility.html" title="Compatibility">
      Check, if the plugin meets your compatibility requirements 
    </CardLink>
  </div>
  <div>
    <CardLink class="fill" link="/guide/contribution.html" title="Contribution">
      Any help is very much appreciated
    </CardLink>
  </div>
</div>
