# `emptyLinePosition`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| String  |"center \| out \| in [offset]"          |"center" |

Descriptive string in form `"mode [offset]"` that defines how the empty line is aligned in relation to the empty circle fill area.
Available modes are  `center`, `in` and `out`. Additionally, with the `out` mode you can provide an `offset` value as any Number.
In general, this prop makes it possible to mimic the SVG2 `stroke-aligment`, which is currently not supported in any browser.

###### Usage: 📜

```vue
<ve-progress empty-line-position="in 10" />
<ve-progress empty-line-mode="out" />
```

### Example

<EmptyLinePosition>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{data.progress}}" 
    empty-color-fill="#265cff" 
    :empty-thickness="30" 
    emptyColor="rgba(230, 233, 240, 0.1)" 
    empty-line-position="{{data.mode}}{{ data.offset}}"
  />
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</EmptyLinePosition>
