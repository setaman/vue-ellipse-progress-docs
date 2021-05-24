<template>
  <i :class="`icon uil uil-${icon}`" :style="{fontSize: size}"></i>
</template>

<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "1.8rem"
    }
  }
}
</script>

<style scoped lang="scss">
.icon {
  line-height: 1rem;
}

</style>
