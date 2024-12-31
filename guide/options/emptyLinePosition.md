---
description: The empty line position property defines the alignment of the empty line in relation to the empty circle fill area.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `emptyLinePosition`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                         | default  |
| ------ | ------------------------------ | -------- |
| String | "center \| out \| in [offset]" | "center" |

Descriptive string in form `"mode [offset]"` that defines how the empty line is aligned in relation to the empty circle fill area.
Available modes are `center`, `in` and `out`. Additionally, with the `out` mode you can provide any `offset` Number value.
In general, this prop makes it possible to mimic the SVG2 `stroke-aligment`, which is currently not supported in any browser.

###### Usage: 📜

```vue
<ve-progress empty-line-position="in 10" />
<ve-progress empty-line-position="out" />
```

### Example
<script setup>
  import EmptyLinePositionBasic from '../../.vitepress/theme/Guide/EmptyLinePosition/EmptyLinePositionBasic.vue';
</script>

<p>

<EmptyLinePositionBasic>
<template #code="{ data }">

```js-vue
<ve-progress
  empty-line-position="{{ data.emptyLinePosition }}"
  :empty-thickness="{{ data.emptyThickness }}"
  :thickness="10"
  empty-color-fill="#596bff"
  empty-color="rgba(230, 233, 240, 1)"
  :progress="{{data.progress}}"
 />
```

</template>
</EmptyLinePositionBasic>

</p>
