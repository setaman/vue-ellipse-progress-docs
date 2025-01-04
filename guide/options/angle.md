---
description: The angle property is used to rotate the progress circle. It can be used to change the starting point of the circle.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `angle`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values     | default |
|--------|------------|---------|
| Number | any Number | -90     |

With the `angle` prop the circle can be rotated and thus the starting point can be changed.

### Usage 📜

```vue
<ve-progress :angle="90" />
```

### Examples

<script setup>
  import AngleBasic from "../../.vitepress/theme/Guide/Angle/AngleBasic.vue";
</script>

<p>

<AngleBasic>
<template #code="{ angle, progress }">

```js-vue
<ve-progress :angle="{{ angle }}" :progress="{{ progress }}"/>
```

</template>
</AngleBasic>

</p>
