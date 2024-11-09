<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code preselected-state="Loading">
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
      </vep>
    </template>
    <template #code="{ progress, loading }">
      <slot name="code" :progress :loading> </slot>
    </template>
  </example-code>
</template>
