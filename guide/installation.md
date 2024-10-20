# Installation

The library is available as NPM package and can be alternatively included via CDN.
The installation with a package manager is recommended,
this way there is the possibility to use the library either in plugin mode or to import it directly as a component.

::: warning Vue compatibility
Please note that for Vue 3 compatibility you have to use most recent <Badge type="tip" text="2.x" vertical="middle" />
version of the library which is a default version starting with `v2.2.0` tag. 
Vue 2 users have
to use <Badge type="tip" text="1.x" vertical="middle" /> version that is now considered as legacy.
The docs for the legacy version can be found in [v1-legacy](https://github.com/setaman/vue-ellipse-progress/tree/v1-legacy?tab=readme-ov-file) branch.
:::

## Package Manager

Use your favorite package manager to install the library from NPM. After the installation you have the choice to
initialize the component as a plugin or to import it directly.

::: tabs

@tab npm

```bash
npm i vue-ellipse-progress
```

@tab yarn

```bash
yarn add vue-ellipse-progress
```
:::


### Initialize as Plugin

Import and initialize the component in your `main.js`. By default, after initialization, the component is available as
`<ve-progress/>` and can be used everywhere. You also are free to define a custom name:

```js
import { createApp } from "vue";
import App from "./App.vue";

import veProgress from "vue-ellipse-progress";
createApp(App).use(veProgress);

// define custom name and use as <vep .../>
// createApp(App).use(veProgress, "vep");
```

### Import component

You also have the option to import the component directly:

```vue
<template>
  <ve-progress :progress="50" />
</template>
<script>
import { VeProgress } from "vue-ellipse-progress";

export default {
  name: "MyComponent",
  components: { VeProgress },
};
</script>
```

## CDN

To use the component without a build tool you can customize and get the `veprogress.umd.min.js` file from [JSDelivr](https://www.jsdelivr.com/package/npm/vue-ellipse-progress).
Just add the following line to your HTML and initialize the component as plugin:

```html{6,12,15}
<!DOCTYPE html>
<html lang="en">
  <body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-ellipse-progress/dist/veprogress.umd.min.js"></script>

    <script>
      const { createApp } = Vue;

      const App = {
        template: `<div> <ve-progress :progress="50"/></div>`,
        };
      const app = createApp(App);
      app.use(veprogress);
      app.mount("#app");

    </script>
  </body>
</html>
```

## SSR

In this section we will look on how to initialize the plugin in Nuxt.js - a popular Vue.js framework 
for SSR development. We will follow the official Nuxt documentation for Vue [plugins initialization](https://v3.nuxtjs.org/guide/directory-structure/plugins)
to register the plugin on **client** side.

### Nuxt.js 3

In the `/plugins` directory create the file `veProgress.client.js` with the content:
```js
import veProgress from "vue-ellipse-progress";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(veProgress);
});
```
Note that Nuxt 3 will automatically scann your `/plugins` directory to register plugins. Then you can immediately use the 
component everywhere:
```vue
<template>
    <client-only>
      <ve-progress :progress="50" />
    </client-only>
</template>
```

### Nuxt.js 2

:::warning
Please note that Nuxt.js 2 works with Vue.js 2 and you have to use the compatible `1.x` plugin version
:::

In the `/plugins` directory create the file `vue-ellipse-progress.js` with the content:
```js
import Vue from 'vue';
import VueEllipseProgress from "vue-ellipse-progress";
Vue.use(VueEllipseProgress);
```
In your ` nuxt.config.js` register the plugin:

```js
plugins: [
    {
      src: '@/plugins/vue-ellipse-progress.js',
      mode: 'client'
    }
  ]
```
Now the component can be used everywhere:
```vue
<template>
  <client-only>
     <vue-ellipse-progress :progress="50" />
  </client-only>
</template>
```

### Advanced use cases

In some development environments or tools there is no plugin system. To use the plugin, it must be imported dynamically 
during hydration. This is the case for example in static site generator (SSG) like Vuepress that powers this documentation.
In such case you can import the library in a lifecycle hook and initialize the plugin in your custom wrapper component. Example:

```vue
<!-- /MyVeProgressWrapper.vue-->
<template>
  <ClientOnly>
    <component v-if="component" :is="component" />
  </ClientOnly>
</template>

<script>
export default {
  data: () => ({
      component: null,
  }),
  mounted() {
    import("vue-ellipse-progress").then((module) => {
      this.component = module.VeProgress;
    });
  },
};
</script>
```

## TypeScript

Currently, the plugin does not officially support TypeScript. But the transfer to TypeScript with proper typing is 
planned for future releases.

If you encounter some TS related errors while trying to use the plugin for example in your fresh Vue 3 app, add the file 
`veProgress.d.ts` in the root of your app:

```ts
declare module "vue-ellipse-progress";
```

Any contributions to improve the TS support are very welcome!
