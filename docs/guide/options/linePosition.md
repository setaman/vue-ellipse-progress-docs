# `linePosition`

###### Animated: ✔️

| type   | values                         | default  |
| ------ | ------------------------------ | -------- |
| String | "center \| out \| in [offset]" | "center" |

Descriptive string in form `"mode [offset]"` that defines how the progress line is aligned in relation to the circle fill area.
Available modes are `center`, `in` and `out`. Additionally, with the `out` mode you can provide an `offset` value as any Number.
In general, this prop makes it possible to mimic the SVG2 `stroke-aligment`, which is currently not supported in any browser.

###### Usage: 📜

```vue
<ve-progress line-position="in 10" />
<ve-progress line-position="out" />
```

### Example

<LinePosition>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{data.progress}}" empty-color-fill="#2a2c3c" line-position="{{data.mode}}{{data.offset}}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</LinePosition>
