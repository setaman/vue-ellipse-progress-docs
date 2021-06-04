<template>
  <example-container>
    <template #default="{ progress, loading, noData, determinate }">
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="200">
        <span slot="legend-caption">200</span>
      </ve-progress>
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="160">
        <span slot="legend-caption">160</span>
      </ve-progress>
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="120">
        <span slot="legend-caption">120</span>
      </ve-progress>
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="80">
        <span slot="legend-caption">80</span>
      </ve-progress>
      <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="40">
        <span slot="legend-caption">40</span>
      </ve-progress>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
export default {
  name: "SizeBasic",
  components: {ExampleContainer}
}
</script>

<style scoped>

</style>
