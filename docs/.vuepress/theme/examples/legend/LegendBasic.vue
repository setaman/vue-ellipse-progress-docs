<template>
  <example-container :range="[-4000, maxLegendValue]">
    <template #default="{ progress, loading, noData, determinate }">
      <v-e-p :progress="calculateProgress(progress)" :loading="loading" :no-data="noData" :determinate="determinate" :legend="progress"/>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "LegendBasic",
  components: {VEP, ExampleContainer},
  data: () => ({
    maxLegendValue: 4000
  }),
  methods: {
    calculateProgress(currentValue) {
      return currentValue * 100 / this.maxLegendValue;
    }
  },
}
</script>

<style scoped>

</style>
