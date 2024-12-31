---
description: Defines the data for multiple circles in one.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `data`

<Badge class="mt-2" type="success" text="Animated" />

| type  | values      | default |
|-------|-------------|---------|
| Array | [{ props }] |         |

The `data` property lets you define more complex chart-like progress circles. It is an array of objects with almost all
documented properties that define multiple circles in one.

You can specify 2 or more circles as Objects in an array as `data`. Each circle can be individually configured using
almost every available
property. It is not necessary to specify all properties, they will be merged with global props, the circle specific
props will
overwrite the global. The circles are rendered inside each other.

:::warning
Excluded props: lineMode, emptyThickness, legend. These properties will be ignored if data is specified.
Also, the legend of this circle remains hidden.
:::

:::tip Gap
The [`gap`](gap.md) property defines the distance between circles.
:::

### Usage 📜

```vue
<ve-progress :data="[{progress: 15, color: 'red'}, {progress: 30, color: 'blue'}]" />
```

### Examples

<script setup>
  import DataBasic from "../../.vitepress/theme/Guide/Data/DataBasic.vue";
  import DataDotHalf from "../../.vitepress/theme/Guide/Data/DataDotHalf.vue";
  import DataLoader from "../../.vitepress/theme/Guide/Data/DataLoader.vue";
  import DataMinimal from "../../.vitepress/theme/Guide/Data/DataMinimal.vue";
  import DataChart from "../../.vitepress/theme/Guide/Data/DataChart.vue";
</script>

Like the following example demonstrates, almost any props can be specified
for each circle that will override global props. Here we can see that
yellow circle has its own gap property

<DataBasic class="mb-10">
<template #code="{ gap, progress }">

```js-vue{2,20}
<ve-progress 
  :gap="{{ gap }}"
  :size="250"
  :data="[
    {
      color: 'blue',
      thickness: 1,
    },
    {
      color: 'red',
      emptyColor: '#F08080',
      thickness: 3,
    },
    {
      color: 'green',
      thickness: 5,
      loading: true,
    },
    {
      gap: 30,
      color: '#FFD700',
      thickness: 7,
      reverse: true,
      determinate: true,
    },
  ]"
  :progress="{{ progress }}" 
/>
```

</template>
</DataBasic>

Of course, it is possible to specify a **[`dot`](./dot)** or have a **[`half`](./half.md)** circle.

<DataDotHalf class="mb-10">
<template #code="{ progress }">

```js-vue
<ve-progress 
  :data="[
    {
      dot: '20 rgb(220,220,220)',
    },
    {
      color: 'Tomato',
      half: true,
      emptyColor: 'rgba(255,160,122,0.5)',
    },
    {
      color: 'MediumSeaGreen',
    },
  ]"
  :progress="{{ progress }}" 
/>
```

</template>
</DataDotHalf>

It also applies to **[`dash`](./dash)**, **[`loader`](./loader.md)** and **[`animation`](./animation.md)** properties.

<DataLoader class="mb-10">
<template #code="{ progress }">

```js-vue
<ve-progress 
  :data="[
    {
      dash: 'strict 60 0.8',
    },
    {
      color: 'Tomato',
      loading: true,
      loader: {
        color: 'rgba(255,160,122,1)',
        duration: 500,
        lineMode: 'in 10',
      },
    },
    {
      color: 'MediumSeaGreen',
      animation: 'loop 2000 1000',
    },
  ]"
  :progress="{{ progress }}" 
/>
```

</template>
</DataLoader>

[//]: # (`data` enables us to create stunning loaders like these)
[//]: # (Add coll animated loaders)
          
It is also important to mention that no property in
<code>data</code> Objects is required. We can create circles by just
passing an array of empty objects. But (global)
**[`progress`](./progress.md)** still must be set.

<DataMinimal class="mb-10">
<template #code="{ progress }">

```js-vue
<ve-progress :data="[{}, {}, {}]" :progress="{{ progress }}" />
```

</template>
</DataMinimal>

Even almost real charts can be created. But this requires tricky manual
calculations The following example is for demonstration purposes only and
should not be taken too seriously. For such use cases, appropriate chart
libraries should be used.


<DataChart class="mb-10">
<template #code="{ progress }">

<<< @/.vitepress/theme/Guide/Data/Snippet1.vue{vue}

</template>
</DataChart>
