---
description: Dashed circle progress line.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line, stroke-dasharray
---

# `dash`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                   | default |
|--------|--------------------------|---------|
| String | "[strict] amount spacing" |         |

Descriptive string in the form `"[strict] amount spacing"` that adds a dashed empty progress line. This property offers
an optional strict mode. In strict mode, you can define the exact number of dashes (`amount`) with the given relative
spacing (`spacing`) as a number between 0 and 1. Without strict mode, the default behavior of the SVG `stroke-dasharray`
property is used, where `amount` specifies the size of the dashes, the number of dashes is determined by the circle circumference.
Both `amount` and `spacing` values are mandatory.

###### Usage: 📜

```vue
<ve-progress dash="strict 60 0.5" /> - exact 60 dashes with 0.5 relative spacing
<ve-progress dash="10 10" /> - 10 pixels big dashes with 10 pixels spacing, the number of dashes depends on the empty circle circumference
```

### Example

<script setup>
  import DashBasic from "../../.vitepress/theme/Guide/Dash/DashBasic.vue";
</script>

<p>

<DashBasic>
<template #code="{ dash, progress }">

```js-vue
<template>
  <ve-progress dash="{{dash}}" :progress="{{progress}}"/>
</template>
```

</template>
</DashBasic>

</p>
