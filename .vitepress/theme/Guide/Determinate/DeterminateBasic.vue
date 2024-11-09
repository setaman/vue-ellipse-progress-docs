<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code preselected-state="Determinate">
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
      </vep>
    </template>
    <template #code="{ progress, determinate }">
      <slot name="code" :progress :determinate> </slot>
    </template>
  </example-code>
</template>
