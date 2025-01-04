---
description: The color of the progress circle fill area.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `colorFill`

<Badge class="mt-2" type="success" text="Animated" />

| type             | values                                                | default       |
|------------------|-------------------------------------------------------|---------------|
| String \| Object | any CSS color as String or Object to specify gradient | "transparent" |

Defines the fill color of the progress circle. The property accepts any CSS color like `#123`,
`rgba(230, 233, 240, 0.1)`, or `lime`, or an object to define gradients.

The general scheme to define the gradient is as follows:

- `:color="{ colors [, radial ]}"`
    - `radial` (optional): Boolean, default is `false`. Defines whether the gradient is radial or linear.
    - `colors`: Array of objects defining the gradient colors. Each object should have:
        - `color`: CSS color string (e.g., `"#6546f7"`)
        - `offset`: String representing the relative start/stop position in the gradient (e.g., `"10"`). It should be a
          number between 0 and 100.
        - `opacity` (optional): Number representing the opacity (e.g., `1`)

::: warning
Progress circle overlaps the empty circle!
In the examples, you will see the fill color partially covering the empty line.
:::

::: tip
According to default SVG behavior, the fill area of the circle is aligned at the baseline of the progress line.
With the
[`linePosition`](linePosition.md) property this behavior can be adjusted.
:::

###### Usage: 📜

```vue

<ve-progress color-fill="#3f79ff" />
<ve-progress color-fill="lime" />
<ve-progress color-fill="rgba(230, 233, 240, 0.1)" />
<ve-progress
  :color-fill="{
    radial: false,
    colors: [
      { color: '#6546f7', offset: '0', opacity: 1 },
      { color: 'lime', offset: '100', opacity: 0.6 },
    ],
  }"
/>
```

### Examples

<script setup>
  import ColorFillBasic from "../../.vitepress/theme/Guide/ColorFill/ColorFillBasic.vue";
  import ColorFillGradient from "../../.vitepress/theme/Guide/ColorFill/ColorFillGradient.vue";
  import ColorGradientAdvanced from "../../.vitepress/theme/Guide/ColorFill/ColorGradientAdvanced.vue";
</script>

<ColorFillBasic>
<template #code>

<<< @/.vitepress/theme/Guide/ColorFill/Snippet1.vue{vue}

</template>
</ColorFillBasic>

The examples below demonstrate how gradient colors can be defined

<ColorFillGradient>
<template #code>

<<< @/.vitepress/theme/Guide/ColorFill/Snippet2.vue{vue}

</template>
</ColorFillGradient>

The gradients give a lot of room for experimentation, and you can achieve a lot of exciting effects with colors alone.
The following examples give some inspiration:

<ColorGradientAdvanced>
<template #code>

<<< @/.vitepress/theme/Guide/ColorFill/Snippet3.vue{vue}

</template>
</ColorGradientAdvanced>
