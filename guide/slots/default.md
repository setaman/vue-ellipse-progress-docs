---
description: The default scoped slot is used to customize the presentation of the circle legend.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `default`

Use this scoped slot, if you want to customize the presentation of the circle legend and make a use of the animated counter,
so your formatting is still animated. This works similar to the [`legendFormatter`](#legendformatter) and is just
an alternative way to provide a custom format. You can access animated counter properties through the scoped slot
props and adjust the presentation of the legend to your needs.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #default="{ counterTick }">
    <div>
      {{ counterTick.currentValue }}
    </div>
  </template>
</ve-progress>
```

| Exposed props           |                                                                                                                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `currentValue`          | The current value of the counter at specific animation tick. It's always a Number and represents a value that is passed as [`legend`](legend.md) or [`progress`](progress.md) to the circle |
| `currentFormattedValue` | Current value formatted as a String. It's a String representation of the `currentValue` including the formatting wich may be applied with [`legend`](legend.md)                             |

### Examples

There are really no limits and you can customize the appearance of the legend as you like.
Here are a few examples for the beginning:

<script setup>
import DefaultSlot from '../../.vitepress/theme/Guide/Slots/DefaultSlot.vue';
import DefaultSlotColored from '../../.vitepress/theme/Guide/Slots/DefaultSlotColored.vue';
</script>

<DefaultSlot>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/Snippet1.vue{vue}

</template>
</DefaultSlot>

<p>

<DefaultSlotColored>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/Snippet2.vue{vue}

</template>
</DefaultSlotColored>

</p>
