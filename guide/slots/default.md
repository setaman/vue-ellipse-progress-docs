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

### Examples

There are really no limits and you can customize the appearance of the legend as you like.
Here are a few examples for the beginning:

<script setup>
import DefaultSlot from '../../.vitepress/theme/Guide/Slots/DefaultSlot.vue'
</script>

<DefaultSlot>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/Snippet1.vue{vue}

</template>
</DefaultSlot>
d
