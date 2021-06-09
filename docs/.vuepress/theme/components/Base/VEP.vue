<template>
  <ClientOnly>
    <component v-if="component" :is="component" v-bind="$attrs" >
      <template #default>
        <slot></slot>
      </template>
      <template #legend>
        <slot name="legend"></slot>
      </template>
      <template #caption>
        <slot name="caption"></slot>
      </template>
    </component>
  </ClientOnly>
</template>

<script>
export default {
  name: "VEP",
  props: ["options"],
  data() {
    return {
      component: null
    }
  },
  mounted () {
    import("vue-ellipse-progress").then(module => {
      this.component = module.VeProgress;
    })
  }
}
</script>

<style scoped>

</style>
