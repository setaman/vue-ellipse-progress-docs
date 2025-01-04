---
description: The line cap of the progress circle can be customized.
aside: false
head:
  - - meta
    - name: keywords
      content: legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js
---

# `line`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                   | default |
| ------ | -------------------------| ------- |
| Number | "round \| square \| butt" | "round" |

Is a String value from `round | square | butt`. Defines the progress circle line cap.
Internally the CSS property `stroke-linecap` is used.

###### Usage: 📜

```vue
<ve-progress line="round" />
```

### Example

<script setup>
  import LineBasic from '../../.vitepress/theme/Guide/Line/LineBasic.vue';
</script>

<p>

<LineBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Line/Snippet1.vue{vue}

</template>
</LineBasic>

</p>
