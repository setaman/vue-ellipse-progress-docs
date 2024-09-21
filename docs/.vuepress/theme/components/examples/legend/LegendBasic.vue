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
    <template #code="{ progress, slider }">
      <slot name="code" :progress="progress" :legend="slider"> </slot>
    </template>
  </example-container>
</template>

<script setup>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import { ref } from "vue";

const maxLegendValue = ref(4000);
</script>

<style scoped></style>
