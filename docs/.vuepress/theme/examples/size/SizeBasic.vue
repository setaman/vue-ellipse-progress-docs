<template>
  <example-container>
    <template #default="{ progress, loading, noData, determinate }">
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="200">
        <span slot="legend-caption">200</span>
      </v-e-p>
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="160">
        <span slot="legend-caption">160</span>
      </v-e-p>
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="120">
        <span slot="legend-caption">120</span>
      </v-e-p>
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="80">
        <span slot="legend-caption">80</span>
      </v-e-p>
      <v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :size="40">
        <span slot="legend-caption">40</span>
      </v-e-p>
    </template>
    <template #code>
      <slot name="code">

      </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "SizeBasic",
  components: {VEP, ExampleContainer}
}
</script>

<style scoped>

</style>
