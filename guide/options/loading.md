---
description: Boolean that forces loading state. The component provides an indeterminate loading state for the case that your data is not available immediately. With this property set to true you can use the component as the indeterminate progress.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `loading`

###### Animated: ✔️

| type    | values | default |
|---------|--------|---------|
| Boolean |        | false   |

Boolean that forces loading state. The component provides an indeterminate loading state when your data is not
immediately available. With this property set to `true`, you can use the component as an indeterminate progress
indicator.

::: tip Custom loader
Custom loading circle can be created with **[`loader`](loader.md)**!
To show a determinate loading, use **[`determinate`](determinate.md)**.
:::

::: warning Legend behavior
The use of the `loading` state hides the **[`legend`](legend.md)**.
:::

### Usage 📜

```vue
<ve-progress loading />
<ve-progress :loading="true" />
```

### Examples

<script setup>
  import LoadingBasic from "../../.vitepress/theme/Guide/Loading/LoadingBasic.vue";
</script>

<p>

<LoadingBasic>
<template #code="{ loading, progress }">

```js-vue
<template>
  <ve-progress :loading="{{ loading }}" :progress="{{ progress }}"/>
</template>
```

</template>
</LoadingBasic>

</p>
