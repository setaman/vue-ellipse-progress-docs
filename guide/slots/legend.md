---
description: The legend scoped slot is used to customize the presentation of the circle legend.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `legend`

In this slot, you can put an additional element that you want to display beside the circle legend.
This is simply a legacy slot from the time when the [**`default`**](default.md) slot did not exist yet.
It can be helpful in some situations but is much less powerful.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #legend>
    <span>/150</span>
  </template>
</ve-progress>
```

### Examples

<script setup>
import LegendSlot from '../../.vitepress/theme/Guide/Slots/LegendSlot.vue';
</script>

<p>

<LegendSlot>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/Snippet3.vue

</template>
</LegendSlot>

</p>
