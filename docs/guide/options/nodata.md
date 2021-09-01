# `noData`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Boolean   |        | false   |

The component provides a `noData` state for the case that your data is not available. The circle progress is still empty.
In the `noData` the component visually communicates that the data is not present and hides the **[`legend`](./legend.md)**.
This behavior is useful if there is no data or an error occurred during loading.

::: warning Invalid progress
The component will take the no data state even if you provide an invalid **[`progress`](./progress.md)** value
:::

### Usage 📜

```vue
<ve-progress noData />
<ve-progress :noData="true" />
```

### Examples

<example-container preselectedState="No data">
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate">
    <template #legend>
        <span>/100</span>
    </template>
    <template #caption>
        <span>i'm a caption</span>
    </template>
</v-e-p>
</template>
<template #code="{ noData, progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :noData="{{ noData }}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
