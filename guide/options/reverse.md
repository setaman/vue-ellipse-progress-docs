# `reverse`

| type      | values | default |
| --------- | ------ | ------- |
| Boolean   |        | false   |

The prop flips the circle, and the progress circle fills counterclockwise. Alternatively you can just set
a negative value for [`progress`](#./progress.md).

### Usage 📜

```vue
<ve-progress reverse/>
<ve-progress :reverse="true" />
```

### Examples

<reverse>
<template #code="{ progress, reverse }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :reverse="{{ reverse }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</reverse>

