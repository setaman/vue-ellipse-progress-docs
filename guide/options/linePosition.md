# `linePosition`

###### Animated: ✔️

| type   | values                         | default  |
| ------ | ------------------------------ | -------- |
| String | "center \| out \| in [offset]" | "center" |

Descriptive string in form `"mode [offset]"` that defines how the progress line is aligned in relation to the circle fill area.
Available modes are `center`, `in` and `out`. Additionally, with the `out` mode you can provide any `offset` Number value.
In general, this prop makes it possible to mimic the SVG2 `stroke-aligment`, which is currently not supported in any browser.

###### Usage: 📜

```vue
<ve-progress line-position="in 10" />
<ve-progress line-position="out" />
```

### Example
<script setup>
  import LinePositionBasic from '../../.vitepress/theme/Guide/LinePosition/LinePositionBasic.vue';
</script>

<p>

<LinePositionBasic>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```js-vue
<ve-progress line-position="{{data.linePosition}}" color-fill="#2a2c3c" :progress="{{data.progress}}"/>
```

</CodeGroupItem>
</CodeGroup>
</template>
</LinePositionBasic>

</p>
