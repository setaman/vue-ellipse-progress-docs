---
description: Customize the font color of the progress circle legend.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line, dot
---

# `fontColor`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                      | default |
|--------|-----------------------------|---------|
| String | any valid CSS value         | "gray"  |

Defines the font color of the circle legend and accepts any valid CSS value.

::: tip
The property **[`legendFormatter`](legendFormatter.md)** and **[`slots`](../slots/default.md)** offer much more flexibility for customization
:::

###### Usage: 📜

```vue
<ve-progress font-color="blue" />
```

### Examples

<script setup>
  import FontColor from "../../.vitepress/theme/Guide/FontColor/FontColor.vue";
</script>

<p>

<FontColor>
<template #code="{ progress }">

```js-vue
<ve-progress font-color="blue" :progress="{{ progress }}"/>
<ve-progress font-color="#7B68EE" :progress="{{ progress }}"/>
<ve-progress font-color="DarkSalmon" :progress="{{ progress }}"/>
```

</template>
</FontColor>

</p>
