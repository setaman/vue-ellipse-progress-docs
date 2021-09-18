# `angle`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Number    | any Number | -90 |

With the `angle` prop the circle can be rotated and thus the starting point can be changed.

### Usage 📜

```vue
<ve-progress :angle="90" />
```

### Examples

huo

<Angle>
<template #code="{ data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{data.progress}}" :angle="{{data.angle}}"/>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</Angle>
