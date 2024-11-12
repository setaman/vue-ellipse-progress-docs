---
description: Specifies the type of the circle. If it is set to true, only the half of the circle will be drawn.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `half`

| type    | values | default |
|---------|--------|---------|
| Boolean |        | false   |

If set to `true`, only half of the circle will be drawn

### Usage 📜

```vue
<ve-progress half/>
<ve-progress :half="true" />
```

### Examples

<script setup>
  import HalfBasic from "../../.vitepress/theme/Guide/Half/HalfBasic.vue";
</script>

<HalfBasic>
<template #code="{ half, reverse }">

```js-vue
<ve-progress :half="{{ half }}" :progress="{{ progress }}"/>
<ve-progress :half="{{ half }}" :angle="0" :progress="{{ progress }}"/>
<ve-progress :half="{{ half }}" :angle="90" :progress="{{ progress }}"/>
```

</template>
</HalfBasic>

Add example on how to reduce circle size from issue.

