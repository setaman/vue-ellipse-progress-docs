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
    <template #code="{ progress, slider }">
      <slot name="code" :progress="progress" :legend="slider"> </slot>
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
