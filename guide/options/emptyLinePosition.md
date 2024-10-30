# `emptyLinePosition`

###### Animated: ✔️

| type   | values                         | default  |
| ------ | ------------------------------ | -------- |
| String | "center \| out \| in [offset]" | "center" |

Descriptive string in form `"mode [offset]"` that defines how the empty line is aligned in relation to the empty circle fill area.
Available modes are `center`, `in` and `out`. Additionally, with the `out` mode you can provide any `offset` Number value.
In general, this prop makes it possible to mimic the SVG2 `stroke-aligment`, which is currently not supported in any browser.

###### Usage: 📜

```vue
<ve-progress empty-line-position="in 10" />
<ve-progress empty-line-position="out" />
```

### Example
<script setup>
  import EmptyLinePositionBasic from '../../.vitepress/theme/Guide/EmptyLinePosition/EmptyLinePositionBasic.vue';
</script>

<p>

<EmptyLinePositionBasic>
<template #code="{ data }">

```js-vue
<ve-progress
  empty-line-position="{{ data.emptyLinePosition }}"
  empty-color-fill="#265cff"
  :empty-thickness="30"
  empty-color="rgba(230, 233, 240, 0.1)"
  :progress="{{data.progress}}"
 />
```

</template>
</EmptyLinePositionBasic>

</p>
