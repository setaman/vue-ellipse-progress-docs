# `lineMode`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| String  |"center \| out \| out-over \| in \| in-over \| top \| bottom [offset]" |"center"  |

Descriptive string in form `"mode [offset]"` that defines, how the progress line is aligned in relation to empty line.
The first value ist the `mode` and the optional second is the `offset` that is any negative or positive 
Number and defines the distance between the progress and empty lines. `offset` can be only combined with the `in` and `out` 
modes. You can understand the modes as the presets that help you to align lines as you want to.

| mode    | description                                 |
|---------|---------------------------------------------|
| `center`|  this is the default value and both lines are aligned at the baseline (centered)|
| `in`  |the progress line is inside the empty line|
| `in-over`| the progress line is both inside the empty circle and overlaps the empty line|
| `out`|  the progress line is outside the empty line|
| `out-over`|  the progress line is both outside the empty circle and overlaps the empty line|
| `bottom`|  the progress line is aligned at the bottom of the empty line|
| `top`|  the progress line is aligned at the top of the empty line|

###### Usage: 📜

```vue
<ve-progress line-mode="in 10" />
<ve-progress line-mode="bottom" />
```

### Example

<LineMode>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{data.progress}}" line-mode="{{data.mode}} {{data.offset}}"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</LineMode>
