# `legendFormatter`

###### Animated: ✔️

| type   | values      | default |
| ------ | ----------- | ------- |
| Function | Function that returns formatted value  as string |         |

Is a Function that must return a legend value or HTML string. The function takes counter properties object as argument and
is called on every counter tick. Here the formatting of [`legend`](./legend.md) or [`progress`](./progress.md)
is completely up to you and you have the full freedom to adjust the presentation to your needs. The function can return any
String value, even HTML.

::: tip
Alternatively you can use [`scoped slot`](../slots/default.md) for custom formatting.
:::

### Usage

```vue
<ve-progress
  :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
/>
```

### Examples

The function takes counter properties Object as argument that you can use to define custom formatting.
`currentValue` is the most relevant property, as it is the actual value at specific counter tick. The return value will be
displayed as the legend of the circle. Here is a simple example:

<example-container class="mb-16" >
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p 
  :progress="progress" 
  :loading="loading" 
  :no-data="noData" 
  :determinate="determinate"
  :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
></v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}"
    :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

The formatting function can return HTML as a string to customize the styles of the rendered circle legend.
You can add more elements, images and pretty much anything here

<LegendFormatterHtml class="mb-16">
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{progress}}" 
    :legend-formatter="
      ({ currentValue }) => `
        <span style='color: ${currentValue < 0 ? 'red' : 'green'}; font-weight: bold; border-bottom: 2px gray solid'>
          ${new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
          })
            .format(currentValue)
            .trim()
          }
          </span>
        `
      "
    />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</LegendFormatterHtml>

The internal counter component provides additional properties that might be useful. The properties are calculated for each counter tick.

<LegendFormatterProps>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{progress}}" :legend-formatter="customFormatter"/>
</template>
<script>
export default {
  methods: {
    customFormatter(counterTickProps) {
      return `"currentFormattedValue":
        ${counterTickProps.currentFormattedValue}
        `;
    }
  }
};
</script>
```

</CodeGroupItem>
</CodeGroup>
</template>
</LegendFormatterProps>
