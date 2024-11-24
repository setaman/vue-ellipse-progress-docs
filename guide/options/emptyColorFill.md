---
description: The fill color of the empty circle.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `emptyColorFill`

<Badge class="mt-2" type="success" text="Animated" />

| type             | values                                                | default       |
|------------------|-------------------------------------------------------|---------------|
| String \| Object | any CSS color as String or Object to specify gradient | "transparent" |

Defines the fill color of the empty circle. The property accepts any CSS color like `#123`, `rgba(230, 233, 240, 0.1)`
or `lime` or an Object to define gradients.

The general scheme to create the gradient is defined like follows:

- `:empty-color-fill="{ colors [, radial ]}"`
  - `radial` (optional): Boolean, default is `false`. Defines whether the gradient is radial or linear.
  - `colors`: Array of objects defining the gradient colors. Each object should have:
    - `color`: CSS color string (e.g., `"#6546f7"`)
    - `offset`: String representing the relative start/stop position in the gradient (e.g., `"10"`). It should be a number between 0 and 100.
    - `opacity` (optional): Number representing the opacity (e.g., `1`)

::: warning
If you define the [`colorFill`](colorFill.md), the progress circle wil cover the empty circle fill area.
:::

::: tip
According to default SVG behavior, the fill area of the circle is aligned at the baseline of the empty line. 
With the [`emptyLinePosition`](emptyLinePosition.md) property this behavior can be adjusted.
:::

###### Usage: 📜

```vue
<ve-progress empty-color-fill="#3f79ff" />
<ve-progress empty-color-fill="lime" />
<ve-progress empty-color-fill="rgba(230, 233, 240, 0.1)" />
<ve-progress
  :empty-color-fill="{
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

### Examples

<script setup>
  import ColorFillBasic from "../../.vitepress/theme/Guide/EmptyColorFill/ColorFillBasic.vue";
  import ColorFillGradient from "../../.vitepress/theme/Guide/EmptyColorFill/ColorFillGradient.vue";
  import ColorGradientAdvanced from "../../.vitepress/theme/Guide/EmptyColorFill/ColorGradientAdvanced.vue";
</script>

<p>

<ColorFillBasic class="mb-10">
<template #code>

<<< @/.vitepress/theme/Guide/EmptyColorFill/Snippet1.vue{vue}

</template>
</ColorFillBasic>

</p>

The examples below demonstrate how gradient colors can be defined

<ColorFillGradient class="mb-10">
<template #code>

<<< @/.vitepress/theme/Guide/EmptyColorFill/Snippet2.vue{vue}

</template>
</ColorFillGradient>

The gradients give a lot of room for experimentation, and you can achieve a lot of exciting effects with colors alone.
The following examples give some inspiration:

<ColorGradientAdvanced>
<template #code>

<<< @/.vitepress/theme/Guide/EmptyColorFill/Snippet3.vue{vue}

</template>
</ColorGradientAdvanced>
