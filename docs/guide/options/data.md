# `data`

###### Animated: ✔️

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

### Usage 📜

```vue
<ve-progress :data="[{progress: 15, color: 'red'}, {progress: 30, color: 'blue'}]"/>
```

### Examples

<gap class="mb-16">
<template #code="{ progress, gap }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :gap="{{ gap }}"
    :data="[
      {
        color: 'blue',
        thickness: 1
      },
      {
        color: 'red',
        thickness: 3
      },
      {
        color: 'green',
        thickness: 5
      },
      {
        color: 'yellow',
        thickness: 7
      }
    ]"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</gap>

The `gap` can also be used to create hypnotising loading animations. Below are some examples that can be created by changing the
`gap` property dynamically in intervalls.

::: warning Different behavior
In different browsers the behavior may vary depending on the implementation of SVG. Make sure that your animations behave consistently.
:::

<gap-animation>
</gap-animation>
