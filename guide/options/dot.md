---
description: Customize the point indicator at the end of the progress line.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line, dot
---

# `dot`

<Badge class="mt-2" type="success" text="Animated" />

| type                       | values                                                                                                                                              | default |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| Number \| String \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0       |

The `dot` property lets you define a point indicator at the end of the progress line. You have a lot of freedom to
customize the dot using a Number, descriptive String, or an Object to inject any CSS styles.

**Number**: `:dot="10"` - specifies a round dot with 10px width and height and default `#713dfd` color.

**Descriptive string**: `dot="size [color]"` - `size` can be just a Number or a percent value like `5%`. The calculation
for percent values is similar to **[`thickness`](thickness.md)** and depends on the **[`size`](size.md)**. `color` is
optional and lets you quickly define the color of the dot. The order of properties is important for parsing the String,
and you can set the `color` only if the `size` is defined.

**Object**: `:dot="{ size: Number | String [, any CSS inline style with Vue syntax] }"` - to customize the point, you
can define the prop as an Object. `size` is required and can be just a Number or a String to define a percent value.
Only by defining the prop as an Object, you have the possibility to add any styles to the dot you want to, using Vue
syntax for defining inline styles. You can even completely break the positioning of the dot if you need to. You cannot
override the `height` of the dot since it is important for internal calculation and must be controllable.

### Usage 📜

```vue
<ve-progress :dot="10" />
<ve-progress dot="5% blue" />
<ve-progress :dot="{ size: 10, backgroundColor: 'red'}" />
```

### Examples

<script setup>
  import DotBasic from "../../.vitepress/theme/Guide/Dot/DotBasic.vue";
  import DotAdvanced from "../../.vitepress/theme/Guide/Dot/DotAdvanced.vue";
  import DotCustom from "../../.vitepress/theme/Guide/Dot/DotCustom.vue";
  import DotConic from "../../.vitepress/theme/Guide/Dot/DotConic.vue";
</script>

Let's start with simple cases

<DotBasic class="mb-10">
<template #code="{ progress }">

<<< @/.vitepress/theme/Guide/Dot/Snippet1.vue

</template>
</DotBasic>

Here the dot becomes anything you wish

<DotAdvanced class="mb-10">
<template #code="{ progress }">

<<< @/.vitepress/theme/Guide/Dot/Snippet2.vue

</template>
</DotAdvanced>

The examples below show how to dig into the dot internals and customize it with CSS styles.
We can access the dot element with the `.ep-circle--progress__dot` selector and style it like any other element.

Note that the examples are using the **[`:deep()`](https://vuejs.org/api/sfc-css-features.html#deep-selectors)** selector
to target the dot element inside the scoped styles.

<DotCustom>
<template #code="{ progress }">

<<< @/.vitepress/theme/Guide/Dot/Snippet3.vue

</template>
</DotCustom>

### Conic gradient

You [asked for it,](https://github.com/setaman/vue-ellipse-progress/issues/107), years later we still miss the ability 
to define conic gradients
for SVG elements. 
Fortunately, modern CSS provides tricks to achieve lines with conic gradients.

Under the hood, the `dot` is created with a regular HTML element, and therefore we can apply any CSS tricks to it too.
Totally unexpected, we can create a conic gradient by (mis)using the `dot` property.

Below examples are based on the [CodePen](https://codepen.io/jeremyfrank/pen/PoajdwX), all credits go to the author.
I have adapted the code to demonstrate how good enough conic gradients can be integrated within this plugin. To let the magic
happen, we make the dot to have the height and width of the whole circle, make it round with border-radius and mimic
the empty and the progress lines with `before` and `after` pseudo-elements. To make the conic gradient to move along the **[`progress`](progress.md)** value,
we bind the progress to the gradient color offset with **[`v-bind`](https://vuejs.org/api/sfc-css-features#v-bind-in-css)**.

<DotConic>
<template #code="{ progress }">

<<< @/.vitepress/theme/Guide/Dot/Snippet4.vue

</template>
</DotConic>

By far, this is not the most perfect conic gradient solution,
it loses some smoothness in contrast to other circle parts, and 
you have to hack into the plugin internals. 

Actually, you can achieve the same effect without the plugin.
On the other hand, it demonstrates the plugin's flexibility, and you still can profit from other features.
Take this as a workaround and an inspiration for your experiments.
