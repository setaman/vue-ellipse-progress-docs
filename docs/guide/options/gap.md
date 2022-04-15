# `gap`

###### Animated: ✔️

| type   | values     | default |
|--------|------------|---------|
| Number | any Number |         |

Defines the gap in pixels from one circle to the previous circle. It will be applied only if [`data`](#./data.md) prop is used.
The gap ca be specified for each circle in the [`data`](#./data.md).

### Usage 📜

```vue
<ve-progress :gap="10"/>
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
