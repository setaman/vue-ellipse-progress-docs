<template>
  <example-container :range="[0, 5]">
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
    rating: 3.5,
  }),
  methods: {
    calculateProgress(currentValue) {
      return currentValue * 100 / 5;
    }
  },
}
</script>

<style scoped>

</style>
