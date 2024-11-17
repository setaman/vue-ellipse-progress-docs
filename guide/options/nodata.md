---
description: The component provides a `noData` state for the case that your data is not available. The circle progress is still empty.
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `noData`

<Badge class="mt-2" type="success" text="Animated" />

| type    | values | default |
|---------|--------|---------|
| Boolean |        | false   |

The `noData` state is perfect for when your data is missing. The progress circle remains empty, clearly indicating the
absence of data. In this state, the component hides the **[`legend`](legend.md)**, making it noticeable that there's no
data or an error occurred during loading.

::: warning Invalid progress
The component will take the no data state also if you provide an invalid **[`progress`](progress.md)** value
:::


```vue
<ve-progress noData />
<ve-progress :noData="true" />
```

### Examples

<script setup>
  import NoData from "../../.vitepress/theme/Guide/NoData/NoData.vue";
</script>

<p>

<NoData>
<template #code="{ noData, progress }">

```js-vue
<ve-progress :noData="{{ noData }}" :progress="{{ progress }}">
  <template #legend>
      <span>/100</span>
  </template>
  <template #legend-caption>
      <span>i'm a caption</span>
  </template>
</ve-progress>

<ve-progress :noData="{{ noData }}" progress="Bad progress">
  <template #legend-caption>
      <span>Bad progress</span>
  </template>
</ve-progress>
```

</template>
</NoData>

</p>
