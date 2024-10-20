# `thickness`

###### Animated: ✔️

| type           | values                                    | default |
| -------------- | ----------------------------------------- | ------- |
| Number\|String | \>=0 as Number or percent value as String | "5%"    |

Defines the progress line thickness, which can be a Number >=0 or a percentage value as a String.
When specified as a percentage, the thickness is calculated relative to the **[`size`](./size.md)**.

::: tip
Make sure to take a look at **[`emptyThickness`](./emptyThickness.md)**, **[`lineMode`](./lineMode.md)**, **[`linePosition`](./linePosition.md)**
and other properties to learn how you can create unique circles
:::

###### Usage: 📜

```vue
<ve-progress :thickness="10" />
<ve-progress thickness="10%" />
```

### Examples

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" :size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="1">
</v-e-p>
<v-e-p class="mr-2" :size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="5">
</v-e-p>
<v-e-p class="mr-2" :size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="15">
</v-e-p>
<v-e-p class="mr-2" :size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="25">
</v-e-p>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :thickness="1" />
  <ve-progress :progress="50" :thickness="5" />
  <ve-progress :progress="50" :thickness="15" />
  <ve-progress :progress="50" :thickness="25" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

When defined as a string, the thickness can be specified as a percentage,
allowing it to scale relative to the **[`size`](./size.md)**:

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="100" thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="200" thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="300" thickness="10%"/>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :size="100" thickness="10%" />
  <ve-progress :progress="50" :size="200" thickness="10%" />
  <ve-progress :progress="50" :size="300" thickness="10%" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

In the following example you can see how the thickness of the progress line affects other parts of the circle.
Move the slider to see the effect:

<Thickness/>
