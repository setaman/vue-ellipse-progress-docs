---
description: Customize the font size of the progress circle legend.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line, dot
---

# `fontSize`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                      | default |
|--------|-----------------------------|---------|
| String | any valid CSS value         | "1rem"  |

Defines the font size of the circle legend and accepts any valid CSS value.

::: tip
The property **[`legendFormatter`](legendFormatter.md)**
and **[`slots`](../slots/default.md)** offer much more flexibility for customization
:::

###### Usage: 📜

```vue
<ve-progress font-size="2rem" />
```

### Examples

<script setup>
  import FontSize from "../../.vitepress/theme/Guide/FontSize/FontSize.vue";
</script>

<p>

<FontSize>
<template #code="{ progress }">

```js-vue
<ve-progress font-size="2rem" :progress="{{ progress }}" />
<ve-progress font-size="10px" :progress="{{ progress }}" />
```

</template>
</FontSize>

</p>
