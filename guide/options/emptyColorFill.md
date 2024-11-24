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

<ColorFillBasic>
<template #code>

<<< @/.vitepress/theme/Guide/EmptyColorFill/Snippet1.vue{vue}

</template>
</ColorFillBasic>

</p>

The examples below demonstrate how gradient colors can be defined

<empty-color-fill-gradient class="mb-16">
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :empty-color-fill="gradient1"/>
  <ve-progress :progress="{{ progress }}" :empty-color-fill="gradient2"/>
  <ve-progress :progress="{{ progress }}" :empty-color-fill="gradient3"/>
</template>
<script>
  export default {
    data: () => ({
      gradient1: {
        colors: [
          {
            color: "#3498DB",
            offset: "0",
            opacity: 0.5
          },
          {
            color: "rgb(72, 201, 176)",
            offset: "25"
          },
          {
            color: "hsl(48, 89%, 60%, 0.2)",
            offset: "50"
          },
          {
            color: "Crimson",
            offset: "75"
          },
          {
            color: "#8A2BE2\t",
            offset: "100"
          }
        ]
      },
      gradient2: {
        radial: true,
        colors: [
          {
            color: "#3498DB",
            offset: "0",
            opacity: 0.5
          },
          {
            color: "rgb(72, 201, 176)",
            offset: "25"
          },
          {
            color: "hsl(48, 89%, 60%, 0.2)",
            offset: "50"
          },
          {
            color: "Crimson",
            offset: "75"
          },
          {
            color: "#8A2BE2",
            offset: "100"
          }
        ]
      },
    }),
}
</script>
```

</CodeGroupItem>
</CodeGroup>
</template>
</empty-color-fill-gradient>

The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone.
The following examples give some inspiration:

<empty-color-fill-gradient-crazy>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :empty-color-fill="gradient1"/>
  <ve-progress 
    :progress="{{ progress }}" 
    :empty-color-fill="gradient2" 
    color="#7579ff"
    empty-color="transparent"
    :thickness="5"
    :empty-thickness="3"
    lineMode="out 5"/>
  <ve-progress 
    :progress="{{ progress }}" 
    :empty-color-fill="gradient3" 
    thickness="2"
    empty-color="transparent"/>
  <ve-progress 
    :progress="{{ progress }}" 
    :empty-color-fill="gradient4" 
    line="butt"
    empty-color="#324c7e"
    :thickness="46"
    :emptyThickness="8"
    :size="180"
    dash="strict 60 0.8"
    lineMode="in"/>
  <ve-progress :progress="{{ progress }}" :empty-color-fill="gradient5" :empty-thickness="2"/>
  <ve-progress 
    :progress="{{ progress }}" 
    :empty-color-fill="gradient4" 
    :thickness="2"
    :empty-thickness="1"
    color="#7579ff"
    empty-color="#324c7e"
    dash="strict 60 0.8"
    lineMode="in-over"/>
</template>
<script>
  export default {
    data: () => ({
      gradient1: {
        radial: true,
        colors: [
          {
            color: "#3260FC",
            offset: "50",
            opacity: "0.15",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.15",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.1",
          },
          {
            color: "#3260FC",
            offset: "90",
            opacity: "1",
          },
          {
            color: "#3260FC",
            offset: "60",
            opacity: "1",
          },
          {
            color: "#3260FC",
            offset: "0",
            opacity: "0",
          },
        ],
      },
      gradient2: {
        radial: true,
        colors: [
          {
            color: "#754fc1",
            offset: "0",
            opacity: "0.3",
          },
          {
            color: "#366bfc",
            offset: "100",
            opacity: "0.3",
          },
        ],
      },
      gradient3: {
        radial: true,
        colors: [
          {
            color: "#3260FC",
            offset: "49",
            opacity: 1,
          },
          {
            color: "black",
            offset: "50",
            opacity: 0,
          },
          {
            color: "black",
            offset: "90",
            opacity: 0,
          },
          {
            color: "#3260FC",
            offset: "95",
            opacity: 1,
          },
          {
            color: "#3260FC",
            offset: "100",
            opacity: 0.2,
          },
        ],
      },
      gradient5: {
        radial: true,
        colors: [
          {
            color: "#3260FC",
            offset: "89",
            opacity: 0,
          },
          {
            color: "#3260FC",
            offset: "91",
            opacity: 1,
          },
          {
            color: "#3260FC",
            offset: "93",
            opacity: 0,
          },
          {
            color: "#3260FC",
            offset: "95",
            opacity: 1,
          },
          {
            color: "#3260FC",
            offset: "97",
            opacity: 0,
          },
          {
            color: "#3260FC",
            offset: "99",
            opacity: 1,
          },
          {
            color: "#3260FC",
            offset: "100",
            opacity: 0,
          },
        ],
      },
      gradient4: {
        radial: true,
        colors: [
          {
            color: "#3260FC",
            offset: "50",
            opacity: "0.2",
          },
          {
            color: "#3260FC",
            offset: "50",
            opacity: "0.15",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.15",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.1",
          },
          {
            color: "#3260FC",
            offset: "90",
            opacity: "0.1",
          },
          {
            color: "transparent",
            offset: "90",
            opacity: "0.1",
          },
          {
            color: "transparent",
            offset: "95",
            opacity: "0.1",
          },
          {
            color: "transparent",
            offset: "95",
            opacity: "0.1",
          },
        ],
      },
      colorGradient:  {
        radial: true,
        colors: [
          {
            color: "#3260FC",
            offset: "50",
            opacity: "0.0",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.0",
          },
          {
            color: "#3260FC",
            offset: "70",
            opacity: "0.1",
          },
          {
            color: "#3260FC",
            offset: "90",
            opacity: "1",
          },
          {
            color: "#3260FC",
            offset: "60",
            opacity: "1",
          },
          {
            color: "#3260FC",
            offset: "0",
            opacity: "0",
          },
        ],
      },  
    }),
}
</script>
```

</CodeGroupItem>
</CodeGroup>
</template>
</empty-color-fill-gradient-crazy>
