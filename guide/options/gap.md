---
description: Defines the gap in pixels from one circle to the previous circle.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `gap`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values     | default |
|--------|------------|---------|
| Number | any Number | 0       |

Defines the gap in pixels from one circle to the previous circle. It will be applied only if [`data`](data.md) prop is used.
The gap ca be specified for each circle in the [`data`](data.md).

### Usage 📜

```vue
<ve-progress :gap="10"/>
```

### Examples

<script setup>
  import GapBasic from "../../.vitepress/theme/Guide/Gap/GapBasic.vue";
  import GapAnimations from "../../.vitepress/theme/Guide/Gap/GapAnimations.vue";
</script>

<p>

<GapBasic class="mb-10">
<template #code="{ gap, progress }">

```js-vue
<ve-progress 
  :gap="{{ gap }}"
  :data="[
    {
      color: 'blue',
      thickness: 1
    },
    {
      color: 'red',
      thickness: 3
    },
    {
      color: 'green',
      thickness: 5
    },
    {
      color: 'yellow',
      thickness: 7
    }
  ]"
  :progress="{{ progress }}" 
/>
```

</template>
</GapBasic>

</p>

The `gap` can also be used to create hypnotizing loading animations. Below are some examples that can be created by changing the
`gap` property dynamically in intervalls.

::: warning Different behavior
In different browsers the behavior may vary depending on the implementation of SVG. Make sure that your animations behave consistently.
:::

<GapAnimations>
<template #code>

<<< @/.vitepress/theme/Guide/Gap/Snippet1.vue{vue}

</template>
</GapAnimations>

