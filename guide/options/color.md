---
description: The color of the progress circle line.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `color`

###### Animated: ✔️

| type             | values                                                | default   |
|------------------|-------------------------------------------------------|-----------|
| String \| Object | any CSS color as String or Object to specify gradient | "#3f79ff" |

Defines the color of progress circle line. The property accepts any CSS color like `#123`, `rgba(230, 233, 240, 0.1)`
or `lime` or an Object defining gradients.

The general scheme to create the gradient is defined like follows:

- `:color="{ colors [, radial ]}"`
    - `radial` (optional): Boolean, default is `false`. Defines whether the gradient is radial or linear.
    - `colors`: Array of objects defining the gradient colors. Each object should have:
        - `color`: CSS color string (e.g., `"#6546f7"`)
        - `offset`: String representing the relative start/stop position in the gradient (e.g., `"10"`). It should be a number between 0 and 100.
        - `opacity` (optional): Number representing the opacity (e.g., `1`)

###### Usage: 📜

```vue

<ve-progress color="#3f79ff" />
<ve-progress color="lime" />
<ve-progress color="rgba(230, 233, 240, 0.1)" />
<ve-progress
  :color="{
    radial: false,
    colors: [
      { color: '#6546f7', offset: '0', opacity: 1 },
      { color: 'lime', offset: '100', opacity: 0.6 },
    ],
  }"
/>
```

::: tip SVG Gradient
The coloring concept is based on the [SVG specification](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients).
Only offset and opacity are supported for now.
In the future releases, more advanced gradient features will be added
:::

::: tip Conic gradient
You [asked for it,](https://github.com/setaman/vue-ellipse-progress/issues/107), years later we still miss the ability
to define conic gradients for SVG elements. Nevertheless, I'll show ou an itresting workaround with **[`dot`](dot.md#conic-gradient)** 
:::

### Examples

<script setup>
  import ColorGradient from "../../.vitepress/theme/Guide/Color/ColorGradient.vue";
  import ColorBasic from "../../.vitepress/theme/Guide/Color/ColorBasic.vue";
  import ColorGradientAdvanced from "../../.vitepress/theme/Guide/Color/ColorGradientAdvanced.vue";
</script>

Define the color as string is straightforward.

<ColorBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Color/Snippet1.vue{vue}

</template>
</ColorBasic>

The examples below demonstrate how gradient colors can be defined. Make sure to switch circle states to see, what
cool [loader](<.(loader.md)>)
affects you can achieve with gradient colors.

<ColorGradient>
<template #code>

<<< @/.vitepress/theme/Guide/Color/Snippet2.vue{55 vue}

</template>
</ColorGradient>

The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone.
The following examples give some inspiration:

<ColorGradientAdvanced>
<template #code>

<<< @/.vitepress/theme/Guide/Color/Snippet3.vue{vue}

</template>
</ColorGradientAdvanced>

