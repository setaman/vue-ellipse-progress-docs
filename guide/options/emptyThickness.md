# `emptyThickness`

###### Animated: ✔️

| type           | values                                    | default |
| -------------- | ----------------------------------------- | ------- |
| Number\|String | \>=0 as Number or percent value as String | "5%"    |

Defines the empty line thickness as a Number >=0 or a percentage value as a String.
When specified as a percentage, the thickness is calculated relative to **[`size`](size.md)**.

::: tip
Make sure to take a look at **[`thickness`](thickness.md)**, **[`lineMode`](lineMode.md)**, **[`linePosition`](linePosition.md)**
and other properties to learn how you can create unique circles
:::

###### Usage: 📜

```vue
<ve-progress :empty-thickness="10" />
<ve-progress empty-thickness="10%" />
```

### Examples
<script setup>
  import ThicknessBasic from '../../.vitepress/theme/Guide/EmptyThickness/ThicknessBasic.vue';
  import ThicknessRelative from '../../.vitepress/theme/Guide/EmptyThickness/ThicknessRelative.vue';
  import ThicknessDependencies from '../../.vitepress/theme/Guide/EmptyThickness/ThicknessDependencies.vue';
</script>

<p>

<ThicknessBasic>
<template #code>

<<< @/.vitepress/theme/Guide/EmptyThickness/Snippet1.vue{vue}

</template>
</ThicknessBasic>

</p>

When defined as a string, the thickness can be specified as a percentage,
allowing it to scale relative to the **[`size`](size.md)**:

<ThicknessRelative>
<template #code>

<<< @/.vitepress/theme/Guide/EmptyThickness/Snippet2.vue{vue}

</template>
</ThicknessRelative>

In the following example you can see how the thickness of the empty line affects other parts of the circle.
Move the slider to see the effect:

<ThicknessDependencies>
<template #code="{ progress }">

```js-vue
<ve-progress :empty-thickness="{{progress}}" dot="20 white" :progress="{{progress}}" />
```
</template>
</ThicknessDependencies>
