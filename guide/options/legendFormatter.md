---
description: Function that returns formatted value as string.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js
---

# `legendFormatter`

<Badge class="mt-2" type="success" text="Animated" />

| type     | values                                                                    | default |
|----------|---------------------------------------------------------------------------|---------|
| Function | `(props: object) => string` Function returning formatted value  as string |         |

You can provide a function to format the circle legend. The function can return any string
value, even HTML!
You have full freedom to format the value of the [`legend`](legend.md) or [`progress`](progress.md) as you like.

The circle legend is animated and counts up and down depending on the circle [`animation`](animation.md) configuration.
The function takes a counter properties object as an argument and is
called on every counter tick providing the current value of the counter that can be used to format the legend.

::: tip
Alternatively you can use [`scoped slot`](../slots/default.md) for custom formatting.
:::

### Usage

```vue
<ve-progress
  :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
/>
```

| Exposed props           |                                                                                                                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `currentValue`          | The current value of the counter at specific animation tick. It's always a Number and represents a value that is passed as [`legend`](legend.md) or [`progress`](progress.md) to the circle |
| `currentFormattedValue` | Current value formatted as a String. It's a String representation of the `currentValue` including the formatting wich may be applied with [`legend`](legend.md)                             |

### Examples

<script setup>
  import LegendFormatterBasic from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterBasic.vue";
  import LegendFormatterHtml from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterHtml.vue";
  import LegendFormatterProps from "../../.vitepress/theme/Guide/LegendFormatter/LegendFormatterProps.vue";
</script>

In the following example, we take the raw `currentValue` value and format it as a string

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

The formatting function can return HTML as a string to customize the styles of the rendered circle legend.
You can add more elements, images and pretty much anything here

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

The internal counter component provides additional properties that might be useful. The properties are calculated for
each counter tick.

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
