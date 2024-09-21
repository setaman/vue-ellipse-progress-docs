# `determinate`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Boolean   |        | false   |

In determinate state the component indicates that the data is being loaded, but also shows the progress circle and the
**[`legend`](./legend.md)** that is faded out in the **[`loading`](./loading.md)** state.

::: tip Custom loader
Custom loading circle can be created with **[`loader`](./loader.md)** !
:::

### Usage 📜

```vue
<ve-progress determinate />
<ve-progress :determinate="true" />
```

### Examples

<example-container preselectedState="Determinate">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" :size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate"></v-e-p>
</template>
<template #code="{ determinate, progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :determinate="{{ determinate }}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
