---
description: The progress property takes a Number value in the range [-100, 100] and defines the filled area from progress circle line in percent.
aside: false
---

# `progress`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values      | default |
|--------|-------------|---------|
| Number | [-100, 100] |         |

The `progress` property takes a Number value in the range \[-100, 100] and defines the filled area from progress circle
line in percent. By default, `progress` is shown as the **legend** in the middle of the circle. 
`progress` is animated
and counts up or down on any value changes with duration defined in **[`animation.duration`](animation.md)** property. 

A negative value can be used to fill the progress line counterclockwise. Alternatively the same effect can be achieved
with the **[`reverse`](reverse.md)** property.

::: warning Progress and Legend
The `progress` is always used to fill the progress circle line, it should be always in the range [-100, 100] and
not valid Numbers lead to **[`noData`](nodata.md)** state. For advanced use cases please use **[`legend`](legend.md)**
and take a look at **[`legendFormatter`](legendFormatter.md)** or the **[`default slot`](../slots/default.md)**.

If **[`legend`](legend.md)** is defined the `progress` will **not** be displayed as the circle legend.
:::

###### Usage: 📜

```vue
<ve-progress :progress="50" />
```

### Basic Example

<p>

<ExampleCode>
<template #code="{progress}">

<<< @/.vitepress/theme/Guide/Progress/Snippet1.vue#snippet{js-vue}

</template>
</ExampleCode>

</p>
