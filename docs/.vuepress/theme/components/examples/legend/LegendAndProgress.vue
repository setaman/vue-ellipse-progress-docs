<template>
  <example-container :range="[0, 5]">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="slider"
      />
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
export default {
  name: "LegendAndProgress",
  components: { VEP, ExampleContainer },
};
</script>

<style scoped></style>
