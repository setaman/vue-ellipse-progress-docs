---
description: Boolean that defines whether the circle legend (progress or legend) should be hidden.
aside: false
head:
  - - meta
    - name: keywords
      content: hide, legend, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `hideLegend`

<Badge class="mt-2" type="success" text="Animated" />

| type    | values | default |
|---------|--------|---------|
| Boolean | false  |         |

Boolean that defines whether the circle legend (**[`progress`](progress.md)** or **[`legend`](legend.md)**) should be
hidden.

::: warning Legend behavior
A non-valid value for **[`progress`](progress.md)**, the use of the **[`data`](data.md)** property, or the *
*[`loading`](loading.md)** and **[`noData`](noData)** states will also hide the legend.
:::

### Usage 📜

```vue
<ve-progress hide-legend />
<ve-progress :hide-legend="true" />
<ve-progress :hide-legend="false" />
```

### Examples

<script setup>
  import HideLegendBasic from "../../.vitepress/theme/Guide/HideLegend/HideLegendBasic.vue";
</script>

<HideLegendBasic>
<template #code="{ progress, hideLegend }">

```js-vue
<template>
  <ve-progress :hide-legend="{{ hideLegend }}" :progress="{{ progress }}"/>
  <ve-progress :hide-legend="{{ hideLegend }}" :progress="{{ progress }}">
    <template #legend-caption>
      <p>
        i'm a caption and the legend is <b>{{ hideLegend ? "hidden" : "visible" }}</b>
      </p>
    </template>
  </ve-progress>
  <ve-progress :hide-legend="{{ hideLegend }}" legend="0150" :progress="{{ progress }}">
    <template #legend-caption>
      <p>
        "legend"as circle legend
      </p>
    </template>
  </ve-progress>
  <ve-progress :hide-legend="{{ hideLegend }}" progress="evilProgress">
    <template #legend-caption>
      <p>
        i have a very evil "progress" value
      </p>
    </template>
  </ve-progress>
</template>
```

</template>
</HideLegendBasic>
