<template>
  <example-container :range="[0, 5]">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :legend="slider"/>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "LegendBasic",
  components: {VEP, ExampleContainer},
}
</script>

<style scoped>

</style>
