# `dash`

###### Animated: ✔️

| type   | values                   | default |
|--------|--------------------------|---------|
| String | "[strict] count spacing" |         |

Descriptive string in form `"[strict] count spacing"` that adds dashed empty progress line. This property provides the 
optional strict mode. In this mode you can define the explicit number of dashes as count with the given relative 
spacing as number in range >= 0 and < 1. Without strict mode the default behavior of the SVG stroke-dasharray property is 
used, where the size and spacings of the dashes are defined. Both values `count` and `spacing` are mandatory.

###### Usage: 📜

```vue
<ve-progress dash="strict 60 0.5" /> - 60 dashes with 0.5 relative spacing
<ve-progress dash="10 10" /> - 10 pixels big dashes with 10 pixels spacing, the number of dashes depends on the empty circle circumference
```

### Example

<dash>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{data.progress}}" dash="{{data.dash}}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</dash>
