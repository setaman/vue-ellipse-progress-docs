---
description: Function that returns formatted value as string
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `legendFormatter`

<Badge class="mt-2" type="success" text="Animated" />

| type     | values                                                                   | default |
|----------|--------------------------------------------------------------------------|---------|
| Function | `(props: object) => string` Function returning formatted value as string |         |

The `legendFormatter` property allows you to provide a custom function to format the circle legend displayed in the
center of the circle.
This function can
return any string value, including HTML, giving you full control over the legend's appearance.

The circle legend is animated according to the circle's [`animation`](animation.md) configuration.
The `legendFormatter` will be called on every animation tick, providing the current value of the counter that can be
used to format the legend.
The value of the counter at a specific animation tick represents the value that is passed as
[`legend`](legend.md) or [`progress`](progress.md) to the circle.

::: tip
Alternatively, you can use a [`scoped slot`](../slots/default.md) for custom formatting.
:::

### Usage

```vue
<ve-progress
  :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
/>
```

| Exposed props           | Description                                                                                                                                                                                      |
|-------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `currentValue`          | The current value of the counter at a specific animation tick. It's always a Number and represents the value that is passed as [`legend`](legend.md) or [`progress`](progress.md) to the circle. |
| `currentFormattedValue` | The current value formatted as a String. It's a String representation of the `currentValue`, including any formatting applied with [`legend`](legend.md).                                        |

### Examples

<script setup>
  import LegendFormatterBasic from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterBasic.vue";
  import LegendFormatterHtml from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterHtml.vue";
  import LegendFormatterProps from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterProps.vue";
</script>

In the following example, we take the raw `currentValue` and format it as a string:

<LegendFormatterBasic class="mb-10">
<template #code="{ progress }">

```js-vue
<ve-progress
  :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
  :progress="{{ progress }}"
/>
```

</template>
</LegendFormatterBasic>

The formatting function can return HTML as a string to customize the styles of the rendered circle legend. You can add
more elements, images, and pretty much anything here:

<LegendFormatterHtml class="mb-10">
<template #code>

```js-vue
<ve-progress
  :progress="{{progress}}"
  :legend-formatter="
    ({ currentValue }) => `
      <span style='color: ${currentValue < 0 ? 'red' : 'green'}; font-weight: bold; border-bottom: 2px gray solid'>
        ${new Intl.NumberFormat('de-DE', {
          style: 'currency',
          currency: 'EUR',
        })
          .format(currentValue)
          .trim()}
        </span>
      `
  "
/>

```

</template>
</LegendFormatterHtml>

The internal counter component provides additional properties that might be useful. These properties are calculated for
each counter tick:

<LegendFormatterProps>
<template #code="{ progress, legend }">

```js-vue
<template>
  <ve-progress 
    :legend="{{ legend }}" 
    :legend-formatter="customFormatter" 
    :progress="{{ progress }}"
  />
</template>
<script setup lang="ts">

type CounterProps = {
  currentValue: number;
  currentFormattedValue: string;
  [key: string]: unknown;
};

const customFormatter = (props: CounterProps) => {
  return `"currentFormattedValue":
    ${props.currentFormattedValue}
  `;
 }
</script>
```

</template>
</LegendFormatterProps>
