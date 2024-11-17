# `line`

<Badge class="mt-2" type="success" text="Animated" />

| type   | values                   | default |
| ------ | -------------------------| ------- |
| Number | "round \| square \| butt" | "round" |

Is a String value from `round | square | butt`. Defines the progress circle line cap.
Internally the CSS property `stroke-linecap` is used.

###### Usage: 📜

```vue
<ve-progress line="round" />
```

### Example

<script setup>
  import LineBasic from '../../.vitepress/theme/Guide/Line/LineBasic.vue';
</script>

<LineBasic>
<template #code>

<<< @/.vitepress/theme/Guide/Line/Snippet1.vue{vue}

</template>
</LineBasic>
