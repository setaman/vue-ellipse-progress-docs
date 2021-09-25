# `animation`

###### Animated: ✔️

| type   | values                                                                 | default  |
| ------ | ---------------------------------------------------------------------- | -------- |
| String | "default \| rs \| loop \| reverse \| bounce [duration delay]"| "default 1000 400" |

Descriptive string in form `type [duration delay]` that defines the initial animation of progress circle line filling. 
`type` is one from predefined animations and the optional `duration` and `delay` are Number values. 
Note that the order is important and that you can define `delay` only after `duration`.


|            | values                                                                     |
| ---------- | ------------------------------------------------------------------------------- |
| `type`     | `default \| rs \| reverse \| bounce\| loop`                                     |
| `duration` | any positiv Number                                                              |
| `delay  `  | any positiv Number                                                              |

###### Usage: 📜

```vue
<ve-progress animation="rs" />
<ve-progress animation="reverse 1000" />
<ve-progress animation="loop 2000 500" />
```

### Example

<Animation>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{data.progress}}" animation="{{data.type}} {{data.duration}} {{data.delay}}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</Animation>
