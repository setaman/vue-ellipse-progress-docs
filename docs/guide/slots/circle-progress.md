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

The `attrs` object contains all the necessary data to create a circle progress. Here a few important properties:

|                           | values                                                                                                                    |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `radius`                  | radius of the circle calculated depending on other props                                                                  |
| `postion`                 | calculated position to place the circle correctly inside the SVG                                                          |
| `circumference`           | the circumference of the progress circle                                                                                  |
| `styles`                  | all the necessary styles to add smooth animations                                                                         |
| `strokeDashOffset`        | offset calculated based on the progress value, applicable only for circle elements like `<circle>` or `<ellipse>`         |
| `calculateProgressOffset` | helper function accepting element path length to help you to calculate progress offset for SVG elements other than circle |

Inspect the `attrs` object to see all the available properties and their values. After the migration to TypeScript, 
the plugin will provide you with a better type definitions.
The following examples will explain how and when to use these properties.

// TODO: need a short recepie for the slot, 1. need to set "stroke-dasharray".
2. need to set "stroke-dashoffset" for circle elements etc.

### Recreating the circle

First, we will recreate the default circle progress.
I assume often you will use the slot to apply some custom styles or classes to the default circle progress.
The plugin is optimized to show circular progress bars, so all the exposed properties in the `attrs` object are 
ready to be used to create a circle.
The following example shows the exact SVG element that the plugin uses under the hood to create the default circle progress.

<example-container>
<template #default="{ loading, slider, noData, determinate }">
<v-e-p :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate">
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
</v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}">
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
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

The same also can be done with the `<ellipse>` SVG element.

<example-container>
<template #default="{ loading, slider, noData, determinate }">
<v-e-p :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate">
  <template #circle-progress="{ attrs }">
    <ellipse
      :cx="attrs.position"
      :cy="attrs.position"
      :rx="attrs.radius"
      :ry="attrs.radius"
      :stroke-dasharray="attrs.circumference"
      :stroke-dashoffset="attrs.strokeDashOffset"
      :stroke-width="attrs.thickness"
      :stroke="attrs.color"
      :stroke-linecap="attrs.line"
      :class="[attrs.class, attrs.animationClass]"
      fill="transparent"
      :style="attrs.styles"
    />
  </template>
</v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}">
     <template #circle-progress="{ attrs }">
        <ellipse
          :cx="attrs.position"
          :cy="attrs.position"
          :rx="attrs.radius"
          :ry="attrs.radius"
          :stroke-dasharray="attrs.circumference"
          :stroke-dashoffset="attrs.strokeDashOffset"
          :stroke-width="attrs.thickness"
          :stroke="attrs.color"
          :stroke-linecap="attrs.line"
          :class="[attrs.class, attrs.animationClass]"
          fill="transparent"
          :style="attrs.styles"
        />
      </template>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

### Beyond the circle

You can put anything inside the slot.
There is no guarantee that the exposed properties will fit your SVG element.
For example, the `strokeDashOffset` that "cuts"
the circle line depending on the `progress` value is calculated depending on the circle circumference
and therefore wouldn't work correctly for other SVG elements.
The `attrs.calculateProgressOffset` helps you to calculate the progress offset for other SVG elements, with one caveat:
you have to pass the path length of the element to the function.

::: tip Getting the path length
You can use `svgElement.getTotalLength()` to get the path length of the SVG element.
In the future, this experimental feature might be improved to overcome this inconvenience.
:::


<p class="mt-16">
Let's start with a simple example. Here we are drawing a polygon that still can show progress.           
</p>

<polygon-progress>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50">
    <template #circle-progress="{ attrs }">
      <polygon
        ref="polygon"
        :stroke-dashoffset="attrs.calculateProgressOffset(pathLength)"
        :stroke-dasharray="pathLength"
        points="10,10 190,100 10,190"
        style="fill: #7b68ee"
        :stroke-width="attrs.thickness"
        :stroke-linecap="attrs.line"
        :stroke="attrs.color"
        :style="attrs.styles"
      />
    </template>
  </ve-progress>
</template>

<script setup>
  import { ref, watch } from "vue";

  const pathLength = ref(0);
  const polygon = ref();

  watch(polygon, () => {
    pathLength.value = polygon.value?.getTotalLength() ?? 0;
  });
</script>
```

</CodeGroupItem>
</CodeGroup>
</template>
</polygon-progress>
