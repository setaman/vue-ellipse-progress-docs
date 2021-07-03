# `legend`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number \| String | any number with `.` or `","` as decimals delimiter |         |

Is any Number or String. This property can be applied for simple formatting of the circle legend. As [`progress`](./progress.md) only 
accepts values in the range [-100, 100], it is usually useful when values outside this range need to be displayed as circle
legend. Defining the value as String you can apply very simple formatting with `"."` or `","` as delimiter or set the initial 
counter placeholder (e.g "0045.00"). Apart from this the value must be a valid JavaScript Number.

::: warning Legend vs progress
The [`progress`](./progress.md) must be defined in any case, if defined, `legend` will replace [`progress`](./progress.md) only
as the displayed circle legend! How the [`progress`](./progress.md) is calculated in relation to `legend` value is also up to you.
:::

::: tip
With [`legendFormatter`](./legendformatter) or [`scoped slot`](#default) you have countless possibilities to customize
the circle legend. To hide the circle legend use the [`hideLegend`](./hideLegend.md) property.
:::

###### Usage: 📜

```vue
<ve-progress :legend="150" />
<ve-progress legend="020" />
<ve-progress legend="200,50" />
```

### Examples

<LegendBasic class="mb-16">
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="progress" :legend="legend"/>
</template>

<script>
export default {
  data: () => ({
    maxLegendValue: 4000,
    legend: 2000,
  }),
  computed: {
    progress() {
      return this.legend * 100 / this.maxLegendValue;
    }
  },
}
</script>
```
</CodeGroupItem>
</CodeGroup>
</template>
</LegendBasic>

The following example brings more clarity to the relationship between `legend` and [`progress`](./progress.md).
Let's say you need to display a rating from 0 to 5 of a product with 3.5 stars. Setting the [`progress`](./progress.md) to 3.5 will
fill the circle to 3.5 percent, and this is not what we need, since we want to display the percentage of 5 as progress.
At this moment `legend` becomes very useful. In our component we can calculate the progress like follows:

```js
...
this.rating = 3.5;
this.progress = this.rating * 100 / 5; // the rating percentage
```
And then apply the values:
```vue
<ve-progress :progress="progress" :legend="rating" />
```
As a result, Rating can be displayed as a circle legend and progress will be calculated correctly:

<LegendAndProgress class="mb-16">
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="progress" :legend="rating"/>
</template>

<script>
export default {
  data: () => ({
    rating: 3.5,
  }),
  computed: {
    progress() {
      return this.rating * 100 / 5;
    }
  },
}
</script>
```
</CodeGroupItem>
</CodeGroup>
</template>
</LegendAndProgress>

With the `legend` defined as String we can set custom decimals delimiter and apply simplest formatting of the displayed
value:

<example-container :show-progress="false">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="20,50" font-size="1.6rem"/>
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="01000" font-size="1.6rem"/>
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="0050,51100" font-size="1.6rem"/>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" legend="20,50"/>
  <ve-progress :progress="50" legend="01000"/>
  <ve-progress :progress="50" legend="0050,51100"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>


