# `data`

<Badge class="mt-2" type="success" text="Animated" />

| type  | values      | default |
|-------|-------------|---------|
| Array | [{ props }] |         |

The `data` property lets you define more complex chart-like progress circles. It is an array of objects with almost all
documented properties that define multiple circles in one.

You can specify 2 or more circles as Objects in an array as `data`. Each circle can be individually configured using almost every available 
property. It is not necessary to specify all properties, they will be merged with global props, the circle specific props will 
overwrite the global. The circles are rendered inside each other.

:::warning
Excluded props: lineMode, emptyThickness, legend. These properties will be ignored, if data is specified. 
Also, the legend of this circle remains hidden.
:::

:::tip Gap
The [`gap`](gap.md) property defines the distance between circles.
:::

### Usage 📜

```vue
<ve-progress :data="[{progress: 15, color: 'red'}, {progress: 30, color: 'blue'}]"/>
```

### Examples

<DataExamples class="mb-16">
<template #code="{ progress, data, gap }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :gap="{{ gap }}"
    :data="{{ data }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
<template #code2="{ progress, data, gap }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :gap="{{ gap }}"
    :data="{{ data }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
<template #code3="{ progress, data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :data="{{ data }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
<template #code4="{ progress, data4, data5, data6, data7, angle }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}"
    color="rgb(51,54,177)"
    empty-color="transparent"
    :loading="true"
    thickness="2"
    :gap="4"
    :data="{{ data4 }}"
  />
  
  <ve-progress 
    :progress="{{ progress }}"
    color="transparent"
    empty-color="transparent"
    :thickness="2"
    :gap="-4"
    dot="4 blue"
    :angle="{{ angle }}"
    :reverse="{{ reverse }}"
    :data="{{ data5 }}"
  />
  
  <ve-progress 
    :progress="{{ progress }}"
    color="transparent"
    empty-color="transparent"
    :thickness="2"
    :gap="-4"
    dot="4 blue"
    :angle="{{ angle }}"
    :reverse="{{ reverse }}"
    :data="{{ data6 }}"
  />
  
  <ve-progress 
    :progress="{{ progress }}"
    color="blue"
    empty-color="transparent"
    :thickness="2"
    :gap="5"
    dot="4 blue"
    :data="{{ data7 }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
<template #code8="{ progress, data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}"
    :data="{{ data }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
<template #code9="{ progress, data }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}"
    :size="150"
    line="butt"
    :thickness="40"
    :gap="-40"
    :data="{{ data }}"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</DataExamples>
