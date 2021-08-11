# `legend`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Boolean\| | false  |

Boolean that defines whether the circle legend value (**[`progress`](./progress.md)** or **[`legend`](./legend.md)**)
should be hidden.

::: warning Legend behavior
A non-valid value for **[`progress`](./progress.md)**, the use of the **[`data`](./data.md)** property
and the **[`loading`](./loading.md)** state also hide the legend.
:::

### Usage 📜

```vue
<ve-progress hide-legend />
<ve-progress :hide-legend="true" />
<ve-progress :hide-legend="false" />
```

### Examples

<hide-legend>
<template #code="{ progress, hideLegend }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :hide-legend="{{ hideLegend }}"/>
  <ve-progress :progress="{{ progress }}" :hide-legend="{{ hideLegend }}">
    <template #legend-caption>
      <p>
        i'm a caption and the legend is <b>{{ hideLegend ? "hidden" : "visible" }}</b>
      </p>
    </template>
  </ve-progress>
  <ve-progress :progress="{{ progress }}" :hide-legend="{{ hideLegend }}">
    <template #legend-caption>
      <p>
        "legend"as circle legend
      </p>
    </template>
  </ve-progress>
  <ve-progress progress="evilProgress" :hide-legend="{{ hideLegend }}">
    <template #legend-caption>
      <p>
        i have a very evil "progress" value
      </p>
    </template>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</hide-legend>
