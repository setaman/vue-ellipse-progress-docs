---
description: The thickness of the progress line can be customized.
aside: false
head:
  - - meta
    - name: keywords
      content: legend, progress, circle, progress bar, vue, vue3, vuejs, vue.js
---

# `thickness`

<Badge class="mt-2" type="success" text="Animated" />

| type           | values                                    | default |
| -------------- | ----------------------------------------- | ------- |
| Number\|String | \>=0 as Number or percent value as String | "5%"    |

Defines the progress line thickness, which can be a Number >=0 or a percentage value as a String.
When specified as a percentage, the thickness is calculated relative to the **[`size`](size.md)**.

::: tip
Make sure to take a look at **[`emptyThickness`](emptyThickness.md)**, **[`lineMode`](lineMode.md)**, **[`linePosition`](linePosition.md)**
and other properties to learn how you can create unique circles
:::

###### Usage: 📜

```vue
<ve-progress :thickness="10" />
<ve-progress thickness="10%" />
```

### Examples

<script setup>
  import ThicknessBasic from '../../.vitepress/theme/Guide/Thickness/ThicknessBasic.vue';
  import ThicknessRelative from '../../.vitepress/theme/Guide/Thickness/ThicknessRelative.vue';
  import ThicknessDependencies from '../../.vitepress/theme/Guide/Thickness/ThicknessDependencies.vue';
</script>

<p>

<ThicknessBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Thickness/Snippet1.vue{vue}

</template>
</ThicknessBasic>

</p>

When defined as a string, the thickness can be specified as a percentage,
allowing it to scale relative to the **[`size`](size.md)**:

<ThicknessRelative>
<template #code>

<<< @/.vitepress/theme/Guide/Thickness/Snippet2.vue{vue}

</template>
</ThicknessRelative>

In the following example you can see how the thickness of the progress line affects other parts of the circle.
Move the slider to see the effect:

<ThicknessDependencies>
<template #code="{ progress }">

```js-vue
<ve-progress :thickness="{{progress}}" dot="20 white" :progress="{{progress}}" />
```
</template>
</ThicknessDependencies>
