---
description: The prop flips the circle, and the progress circle fills counterclockwise. Alternatively you can just set a negative value for progress.
aside: false
head:
  - - meta
    - name: keywords
      content: legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js
---

# `reverse`

| type    | values | default |
|---------|--------|---------|
| Boolean |        | false   |

The prop flips the circle, and the progress circle fills counterclockwise. Alternatively you can set
a negative value for [`progress`](./progress.md).

### Usage 📜

```vue
<ve-progress reverse/>
<ve-progress :reverse="true" />
```

### Examples

<script setup>
  import ReverseBasic from "../../.vitepress/theme/Guide/Reverse/ReverseBasic.vue";
</script>

<p>

<ReverseBasic class="mb-10">
<template #code="{ progress, reverse }">

```js-vue
<ve-progress :reverse="{{ reverse }}" :progress="{{ progress }}"/>
```

</template>
</ReverseBasic>

</p>

