# `angle`

###### Animated: ✔️

| type   | values     | default |
|--------|------------|---------|
| Number | any Number | -90     |

With the `angle` prop the circle can be rotated and thus the starting point can be changed.

### Usage 📜

```vue
<ve-progress :angle="90" />
```

### Examples

<script setup>
  import AngleBasic from "../../.vitepress/theme/Guide/Angle/AngleBasic.vue";
</script>

<AngleBasic>
<template #code="{ angle, reverse }">

```js-vue
<ve-progress :angle="{{ angle }}" :progress="{{ progress }}"/>
```

</template>
</AngleBasic>
