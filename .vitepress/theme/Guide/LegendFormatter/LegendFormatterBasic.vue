<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code>
    <template #default="{ loading, progress, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend-formatter="({ currentValue }) => `My Format ${currentValue}`"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress></slot>
    </template>
  </example-code>
</template>
