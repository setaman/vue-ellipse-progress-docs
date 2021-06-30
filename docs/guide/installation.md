# Installation

The library is available as NPM package and can be alternatively included via CDN. 
The installation with a package manager is recommended, 
this way there is the possibility to use the library either in plugin mode or to import it directly as a component.

::: warning Vue compatibility
Please note that for Vue 3 compatibility you have to use most recent <Badge type="tip" text="2.x" vertical="middle" /> 
version of the library. Vue 2 users have
to use <Badge type="tip" text="1.x" vertical="middle" /> version.
:::

## Package Manager

Use the package manager of your choice to install the library from NPM. After the installation you have the choice to 
initialize the component as a plugin or to import it directly.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm i vue-ellipse-progress
```

  </CodeGroupItem>

  <CodeGroupItem title="Yarn">

```bash:no-line-numbers
yarn add vue-ellipse-progress
```
  </CodeGroupItem>
</CodeGroup>

### Initialize as Plugin

Import and initialize the component in your `main.js`. By default, after initialization, the component is available as 
`<ve-progress/>` and can be use anywhere. You also are free to define a custom name:

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
  <ve-progress :progress="50"/>    
</template>
<script>
  import { VeProgress } from "vue-ellipse-progress";

  export default {
  name: "MyComponent",
  components: { VeProgress },
}
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

