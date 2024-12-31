---
description: The loader property is used to customize the loading circle that is shown in the states loading and determinate.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line
---

# `loader`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                                                      | default |
|--------|-------------------------------------------------------------|---------|
| Object | {\[ thickness, color, lineMode, line, duration, opacity \]} |         |

With this prop defined as Object, you can customize the loading circle that is shown in the states
[loading](loading.md) and [determinate](determinate.md). Accepted properties are [`color`](color.md), [`thickness`](thickness.md), [`line`](line.md),
[`lineMode`](lineMode.md), `duration` and `opacity`. `duration` and `opacity` are specific for loading circle. Any valid CSS 
opacity value can be set as `opacity`. `duration` specifies the speed of the loader animation in milliseconds. 

If the loader option is not 
specified, the loading circle replicates the progress circle with a 0.55 default value for `opacity` and 1000 `duration`.

### Usage 📜

```vue
<ve-progress :loader="{ color: 'green', lineMode: 'in 10', opacity: 0.6, duration: 1200 }" />
```

### Examples

<script setup>
  import LoaderBasic from "../../.vitepress/theme/Guide/Loader/LoaderBasic.vue";
</script>

<p>

<LoaderBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Loader/Snippet1.vue

</template>
</LoaderBasic>

</p>


