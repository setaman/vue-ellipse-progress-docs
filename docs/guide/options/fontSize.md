# `fontSize`

###### Animated: ✔️

| type   | values                      | default |
|--------|-----------------------------|---------|
| String | any valid CSS value         | "1rem"  |

Defines the font color of the circle legend and accepts any valid CSS value.

::: tip
The property **[`legendFormatter`](./legendFormatter.md)** and **[`slots`](../slots.md)** offer much more flexibility for customization
:::

###### Usage: 📜

```vue
<ve-progress font-size="2rem" />
```

### Examples

<example-container >
<template #default="{ loading, progress, slider, noData, determinate }">
  <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" font-size="2rem"></v-e-p>
  <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" font-size="10px"></v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" font-size="2rem" />
</template>
<template>
  <ve-progress :progress="{{ progress }}" font-size="10px" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
