<template>
  <example-container :range="[-4000, maxLegendValue]">
    <template #default="{ progress, loading, slider, noData, determinate }">
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
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "LegendBasic",
  components: { VEP, ExampleContainer },
  data: () => ({
    maxLegendValue: 4000,
  }),
};
</script>

<style scoped></style>
