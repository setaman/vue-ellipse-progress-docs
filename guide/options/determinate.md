# `determinate`

###### Animated: ✔️

| type    | values | default |
|---------|--------|---------|
| Boolean |        | false   |

In the determinate state, the component not only shows the progress circle but also indicates that data is being loaded.
The **[`legend`](legend.md)** is visible, unlike in the **[`loading`](loading.md)** state where it fades out.


::: tip Custom loader
Custom loading circle can be created with **[`loader`](loader.md)** !
:::

### Usage 📜

```vue
<ve-progress determinate />
<ve-progress :determinate="true" />
```

### Examples

<script setup>
  import DeterminateBasic from "../../.vitepress/theme/Guide/Determinate/DeterminateBasic.vue";
</script>

<p>

<DeterminateBasic>
<template #code="{ determinate, progress }">

```js-vue
<template>
  <ve-progress :determinate="{{ determinate }}" :progress="{{ progress }}"/>
</template>
```

</template>
</DeterminateBasic>

</p>
