<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const maxLegendValue = 4000;

const progress = (legend: number) => {
  return (legend * 100) / maxLegendValue;
};
</script>

<template>
  <example-code :range="[-4000, 4000]">
    <template #default="{ loading, slider, noData, determinate }">
      <vep
        :progress="progress(slider)"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="slider"
      >
      </vep>
    </template>
    <template #code="{ slider }">
      <slot name="code" :slider :progress="progress(slider)"> </slot>
    </template>
  </example-code>
</template>
