---
description: The legend-caption scoped slot is used to customize the presentation of the circle legend caption.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `legend-caption`

In this slot, you can put any HTML and style it on your own. 
The slot is aligned below the legend.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #legend-caption>
    <div>
      Some caption
    </div>
  </template>
</ve-progress>
```

### Examples

<script setup>
import LegendCaptionSlot from '../../.vitepress/theme/Guide/Slots/LegendCaptionSlot.vue';
</script>

<p>

<LegendCaptionSlot>
<template #code="{ slider, progress }">

```js-vue
<ve-progress :progress="{{ progress }}" :legend="{{ slider }}">
  <template #legend>
    <span> /200</span>
  </template>
  <template #caption>
    <div>Tasks Done</div>
  </template>
<ve-progress>
```

</template>
</LegendCaptionSlot>

</p>
