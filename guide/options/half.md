# `half`

| type      | values | default |
| --------- | ------ | ------- |
| Boolean   |        | false   |

Specifies the type of the circle. If it is set to `true`, only the half of the circle will be drawn.

### Usage 📜

```vue
<ve-progress half/>
<ve-progress :half="true" />
```

### Examples

<half>
<template #code="{ progress, half }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :half="{{ half }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</half>

