---
description: The circle-progress scoped slot is used to customize the appearance of the circle progress.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, conic gradient circle
---

# `circle-progress` <Badge type="tip" text="2.2.0" vertical="middle" />

To take full control over the appearance of the circle progress, you can use the `circle-progress` slot.
This scoped slot allows you to replace the default circle progress with any SVG or HTML content you want.
The slot exposes all the (parsed) props passed to the component and also all necessary internal data to create default circle progress.

::: tip Experimental feature
This feature lets you sneak into the internals of the plugin and gives you a lot of power to customize the circle.
It's challenging to provide good defaults for all possible use cases as you can place any content inside the slot.
So you might encounter some strange inconsistencies in conjunction with other props.
Basically,
the slot just drops its content instead of the default circle progress and doesn't care much about how it fits into the rest of the component.
Now it's up to you to make it look good.
:::

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #circle-progress="{ attrs }">
    <circle
      :r="attrs.radius"
      :cx="attrs.position"
      :cy="attrs.position"
      fill="transparent"
      :stroke="attrs.color"
      :stroke-width="attrs.thickness"
      :stroke-linecap="attrs.line"
      :stroke-dasharray="attrs.circumference"
      :style="attrs.styles"
    >
    </circle>
  </template>
</ve-progress>
```

The `attrs` object contains all the necessary data to create circle progress. Here are a few important properties:

| Property                  | Notes                                                                                                                     |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `radius`                  | radius of the circle calculated depending on other props                                                                  |
| `postion`                 | calculated position to place the circle correctly inside the SVG                                                          |
| `circumference`           | the circumference (SVG path length) of the progress circle                                                                |
| `styles`                  | all the necessary styles to add smooth animations                                                                         |
| `strokeDashOffset`        | offset calculated based on the progress value, applicable only for circle elements like `<circle>` or `<ellipse>`         |
| `calculateProgressOffset` | helper function accepting element path length to help you to calculate progress offset for SVG elements other than circle |
| `class`  `animationClass` | Classes to apply animations                                                                                               |

Inspect the `attrs` object to see all the available properties and their values. After the migration to TypeScript, 
the plugin will provide you with a better type definitions.
The following examples will explain how and when to use these properties.

### Slot recipe

1. Draw your SVG element inside the slot. If the element is not an ellipse-like element, you have to position it correctly by yourself.
2. Set the `stroke-dasharray` attribute to the path length of the SVG element. For the ellipse-like elements, you can use the `attrs.circumference` value.
3. Set the `stroke-dashoffset` attribute to the `attrs.strokeDashOffset` value for the ellipse-like elements. This value is calculated depending on the progress value.
For other SVG elements, you can use the `attrs.calculateProgressOffset(pathLength)` function to calculate the progress offset.

### Recreating the circle

<script setup>
import RecreatingCircle from '../../.vitepress/theme/Guide/Slots/CircleProgress/RecreatingCircle.vue';
import RecreatingCircleEllipse from '../../.vitepress/theme/Guide/Slots/CircleProgress/RecreatingCircleEllipse.vue';
import PolygonSvg from '../../.vitepress/theme/Guide/Slots/CircleProgress/PolygonSvg.vue';
import CustomSvg from '../../.vitepress/theme/Guide/Slots/CircleProgress/CustomSvg.vue';
</script>

First, we will recreate the default circle progress.
I assume often you will use the slot to apply some custom styles or classes to the default circle progress.
The plugin is optimized to show circular progress bars, so all the exposed properties in the `attrs` object are 
ready to be used to create a circle.
The following example shows the exact SVG element that the plugin uses under the hood to create the default circle progress.

<RecreatingCircle>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/CircleProgress/Snippet1.vue

</template>
</RecreatingCircle>

The same also can be done with the `<ellipse>` SVG element.

<RecreatingCircleEllipse>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/CircleProgress/Snippet2.vue

</template>
</RecreatingCircleEllipse>

### Beyond the circle

You can put anything inside the slot.
There is no guarantee that the exposed properties will fit your SVG element.
For example, the `strokeDashOffset` that "cuts"
the circle line depending on the `progress` value is calculated depending on the circle circumference
and therefore wouldn't work correctly for other SVG elements.

The function `attrs.calculateProgressOffset` helps you to calculate the progress offset for other SVG elements, with one caveat:
you have to pass the path length of the element to the function.

::: tip Getting the path length
You can use `svgElement.getTotalLength()` to get the path length of the SVG element.
In the future, this experimental feature might be improved to overcome this inconvenience.
:::


<p class="mt-16">
Let's start with a simple example. Here we are drawing a polygon that still can show progress.           
</p>

<PolygonSvg>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/CircleProgress/Snippet3.vue

</template>
</PolygonSvg>

::: warning
Pay attention to the behavior in different modes.
In the modes [`loading`](../options/loading.md) and [`determinate`](../options/determinate.md) the circle fallbacks 
to the default [`loader`](../options/loader.md) circle.
In the future, you might get more control over this behavior.
:::

<p class="mt-16">
Below are a few custom examples with SVG shapes
taken directly from <a href="https://www.svgshapes.in" target="_blank">https://www.svgshapes.in</a>.
</p>

<CustomSvg>
<template #code>

<<< @/.vitepress/theme/Guide/Slots/CircleProgress/Snippet4.vue

</template>
</CustomSvg>

