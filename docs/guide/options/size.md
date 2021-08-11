# `size`

###### Animated: ✔️

| type   | values | default |
| ------ | ------ | ------- |
| Number | >= 0   | 200     |

Defines the width and height of the circle in pixel. Specifically, the value defines the dimensions of the circle container,
exact size of the circle circumference and diameter depends on the properties **[`lineMode`](#linemode)**, **[`thickness`](./thickness.md)**,
**[`emptyThickness`](#emptythickness)** and **[`dot`](#dot)**! The `size` property defines the absolut width and height the component
will take on the page.

::: tip
Check the **[`lineMode`](./linemode.md)**, **[`thickness`](./thickness.md)**, **[`emptyThickness`](./emptyThickness.md)** and
**[`dot`](./dot.md)** properties to understand how the progress and empty lines behaves depending on the different values. Also,
by default the **[`thickness`](./thickness.md)** and **[`emptyThickness`](./emptyThickness.md)** scale relative to the `size`.
:::

###### Usage: 📜

```vue
<ve-progress :size="200" />
```

### Basic Example

<SizeBasic>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :size="200">
    <span slot="legend-caption">200</span>
  </ve-progress>
  <ve-progress :progress="50" :size="160">
    <span slot="legend-caption">160</span>
  </ve-progress>
  <ve-progress :progress="50" :size="120">
    <span slot="legend-caption">120</span>
  </ve-progress>
  <ve-progress :progress="50" :size="80">
    <span slot="legend-caption">80</span>
  </ve-progress>
  <ve-progress :progress="50" :size="40">
    <span slot="legend-caption">40</span>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</SizeBasic>

### Size depending calculations

The following examples demonstrates that the `size` property determines the outer boundaries of the component.
The internal calculations always adjust to the specified size, the circle lines always remain within the boundaries.

<SizeDependencies/>
