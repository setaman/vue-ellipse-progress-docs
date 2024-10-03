# `fontColor`

###### Animated: ✔️

| type   | values                      | default |
|--------|-----------------------------|---------|
| String | any valid CSS value         | "gray"  |

Defines the font color of the circle legend and accepts any valid CSS value.

::: tip
The property **[`legendFormatter`](./legendFormatter.md)** and **[`slots`](../slots/default.md)** offer much more flexibility for customization
:::

###### Usage: 📜

```vue
<ve-progress font-color="blue" />
```

### Examples

<example-container >
<template #default="{ loading, progress, slider, noData, determinate }">
  <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" font-color="blue"></v-e-p>
  <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" font-color="#7B68EE"></v-e-p>
  <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" font-color="DarkSalmon"></v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" font-color="blue" />
  <ve-progress :progress="{{ progress }}" font-color="#7B68EE" />
  <ve-progress :progress="{{ progress }}" font-color="DarkSalmon" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
