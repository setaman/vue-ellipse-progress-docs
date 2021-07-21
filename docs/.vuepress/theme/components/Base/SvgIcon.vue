<template>
  <img class="svg-icon" :width="size" :src="withBase(`/icons/${icon}.svg`)" alt="VuePress Logo">
</template>

<script>
import { withBase } from "@vuepress/client"
export default {
  name: "SvgIcon",
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 21
    }
  },
  methods: {
    withBase(path) {
      return withBase(path);
    }
  },
}
</script>

<style scoped>

</style>
