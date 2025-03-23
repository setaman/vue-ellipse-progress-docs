---
description: The legend property is used to display a value inside the circle. It can be used for simple formatting of the circle legend
aside: false
head:
  - - meta
    - name: keywords
      content: legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js
---

# `legend`

<Badge class="mt-2" type="success" text="Animated" />

| type             | values                                             | default |
|------------------|----------------------------------------------------|---------|
| Number \| String | any number with `.` or `","` as decimals delimiter |         |

The `legend` property is used to display a value inside the circle.
It accepts any Number or String, allowing for flexible formatting options.

This property is useful when you want to display values beyond the typical
progress range of -100 to 100, apply custom formatting, or show initial counter values with leading zeros.

You can use `"."` or `","` as a delimiter for simple formatting, or set an initial
counter-placeholder like "0045.00". Just ensure it's a valid JavaScript Number.

::: warning Legend vs progress
The [`progress`](progress.md) property is always required. When both `legend` and [`progress`](progress.md) are defined,
`legend` will take over as the displayed value inside the
circle. The `progress` property is still required and should be calculated based on the `legend` value as needed.
:::

::: tip
With [`legendFormatter`](legendFormatter.md) or [`scoped slot`](../slots/default.md),
you can get creative with the circle legend and highly customize it.
Want to hide the circle legend?
Use the [`hideLegend`](hideLegend.md) property.
:::

###### Usage: 📜

```vue
<ve-progress :legend="150" />
<ve-progress legend="020" />
<ve-progress legend="200,50" />
```

### Examples

<script setup>
  import LegendBasic from "../../.vitepress/theme/Guide/Legend/LegendBasic.vue";
  import LegendAndProgress from "../../.vitepress/theme/Guide/Legend/LegendAndProgress.vue";
  import LegendFormatting from "../../.vitepress/theme/Guide/Legend/LegendFormatting.vue";
</script>

Here we imagine the `legend` to be a value between 0 and 4000.
The `progress` is calculated as a percentage of the `legend` value

<LegendBasic class="mb-10">
<template #code="{ progress, slider }">

```js-vue
<template>
  <ve-progress :legend="legend" :progress="{{ progress }}"/>
</template>
<script setup>
  import { ref, computed } from "vue";

  const maxLegendValue = 4000;
  const legend = ref({{ slider }});
  
  const progress = computed(() => {
    return (legend.value * 100) / maxLegendValue;
  });
</script>
```

</template>
</LegendBasic>

The following example clarifies the relationship between `legend` and [`progress`](progress.md). Imagine you need to
display a product rating from 0 to 5 stars, and the rating is 3.5 stars. If you set the [`progress`](progress.md) to
3.5, it will fill the circle to 3.5 percent, which is not what we want. Instead, we want to display the percentage of 5
as progress. This is where `legend` becomes very useful. In our component, we can calculate the progress as follows:

```js
const rating = 3.5;
const progress = rating * 100 / 5; // the rating percentage
```

And then apply the values:

```vue
<ve-progress :progress="progress" :legend="rating" />
```

As a result, the rating can be displayed as a circle legend, and the progress will be calculated correctly:

<LegendAndProgress class="mb-10">
<template #code="{ progress, slider }">

```js-vue
<template>
  <ve-progress :legend="stars" :progress="{{ progress }}"/>
</template>
<script setup>
  import { ref, computed } from "vue";

  const maxStars = 5;
  const stars = ref({{ slider }});
  
  const progress = computed(() => {
    return (stars.value * 100) / maxStars;
  });
</script>
```

</template>
</LegendAndProgress>

With the `legend` is a String, you can use custom decimal delimiters and easily format the displayed value:

<LegendFormatting class="mb-10">
<template #code="{ progress }">

```js-vue
<ve-progress :legend="3000" :progress="{{ progress }}" />
<ve-progress legend="20,50" :progress="{{ progress }}" />
<ve-progress legend="01000" :progress="{{ progress }}" />
<ve-progress legend="0050,51100" :progress="{{ progress }}" />
<ve-progress legend="0050.250" :progress="{{ progress }}" />
```

</template>
</LegendFormatting>
