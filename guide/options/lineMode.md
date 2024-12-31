---
description: Descriptive string in form "mode [offset]" that defines, how the progress line is aligned in relation to empty line.
aside: false
head:
  - - meta
    - name: keywords
      content: legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js
---

# `lineMode`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                                                                 | default  |
| ------ | ---------------------------------------------------------------------- | -------- |
| String | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]" | "center" |

Descriptive string in form `"mode [offset]"` that defines, how the progress line is aligned in relation to empty line.
The first value ist the `mode` and the optional second is the `offset` that is any negative or positive
Number and defines the distance between the progress and empty lines. 

`offset` can be only combined with the `in` and `out`
modes. You can understand the modes as the presets that help you to align lines as you want to.

| mode       | description                                                                     |
|------------|---------------------------------------------------------------------------------|
| `center`   | this is the default value and both lines are aligned at the baseline (centered) |
| `in`       | the progress line is inside the empty line                                      |
| `in-over`  | the progress line overlaps the empty line and growth inside                     |
| `out`      | the progress line is outside the empty line                                     |
| `out-over` | the progress line overlaps the empty line and growth outside                    |
| `bottom`   | the progress line is aligned at the bottom of the empty line                    |
| `top`      | the progress line is aligned at the top of the empty line                       |

###### Usage: 📜

```vue
<ve-progress line-mode="in 10" />
<ve-progress line-mode="bottom" />
```

### Example
<script setup>
  import LineModeBasic from '../../.vitepress/theme/Guide/LineMode/LineModeBasic.vue';
</script>

<p>

<LineModeBasic>
<template #code="{ data }">

```js-vue
<ve-progress :progress="{{data.progress}}" line-mode="{{data.lineMode}}"/>
```
</template>
</LineModeBasic>

</p>
