---
description: The animation property defines the initial animation of the progress circle line.
aside: false
head:
  - - meta
    - name: keywords
      content: color, gradient, progress circle, progress bar, vue, vue3, vuejs, vue.js, dash, dashed, line
---

# `animation`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                                                        | default            |
|--------|---------------------------------------------------------------|--------------------|
| String | "default \| rs \| loop \| reverse \| bounce [duration delay]" | "default 1000 400" |

Descriptive string in form `type [duration delay]` that defines the initial animation of progress circle line filling. 
`type` is one from predefined animations and the optional `duration` and `delay` are Number values.
The order matters: `delay` comes only after `duration`.


|            | values                                      |
|------------|---------------------------------------------|
| `type`     | `default \| rs \| reverse \| bounce\| loop` |
| `duration` | any positiv Number                          |
| `delay  `  | any positiv Number                          |

###### Usage: 📜

```vue
<ve-progress animation="rs" />
<ve-progress animation="reverse 1000" />
<ve-progress animation="loop 2000 500" />
```

### Example

<script setup>
  import AnimationBasic from "../../.vitepress/theme/Guide/Animation/AnimationBasic.vue";
</script>

<p>

<AnimationBasic>
<template #code="{ animation, progress }">

```js-vue
<template>
  <ve-progress animation="{{animation}}" :progress="{{progress}}"/>
</template>
```

</template>
</AnimationBasic>

</p>
