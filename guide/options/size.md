---
description: The width and height of the circle in pixel.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `size`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values | default |
|--------|--------|---------|
| Number | >= 0   | 200     |

Defines the width and height of the circle in pixel. Specifically, the value defines the dimensions of the circle container,
exact size of the circle circumference and diameter depends on the properties **[`lineMode`](lineMode.md)**, **[`thickness`](thickness.md)**,
**[`emptyThickness`](emptyThickness.md)** and **[`dot`](./dot)**! The `size` property defines the absolut width and height the component
will take on the page.

::: tip
Check the **[`lineMode`](lineMode.md)**, **[`thickness`](thickness.md)**, **[`emptyThickness`](emptyThickness.md)** and
**[`dot`](dot.md)** properties to understand how the progress and empty lines behave depending on the different values. Also,
by default the **[`thickness`](thickness.md)** and **[`emptyThickness`](emptyThickness.md)** scale relatively to the `size`.
:::

###### Usage: 📜

```vue
<ve-progress :size="200" />
```

### Basic Example

<script setup>
  import SizeBasic from '../../.vitepress/theme/Guide/Size/SizeBasic.vue';
  import SizeDependencies from '../../.vitepress/theme/Guide/Size/SizeDependencies.vue';
</script>

<p>

<SizeBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Size/Snippet1.vue{vue}

</template>
</SizeBasic>

</p>

### Size depending calculations

The following examples demonstrates that the `size` property determines the outer boundaries of the component.
The internal calculations always adjust to the specified size, the circle lines always remain within the boundaries.

<SizeDependencies/>

