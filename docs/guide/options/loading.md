# `loading`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Boolean   |        | false   |

Boolean that forces loading state. The component provides an indeterminate loading state for the case that your data is 
not available immediately. With this property set to true you can use the component as the indeterminate progress.

::: tip Custom loader
Custom loading circle can be created with **[`loader`](./loader.md)** !
:::

::: warning Legend behavior
The use of the `loading` state hide the legend.
:::

### Usage 📜

```vue
<ve-progress loading />
<ve-progress :loading="true" />
```

### Examples

<example-container preselectedState="Loading">
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"></v-e-p>
</template>
<template #code="{ loading, progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :loading="{{ loading }}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
