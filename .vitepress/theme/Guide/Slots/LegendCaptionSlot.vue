<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code :range="[0, 200]">
    <template #default="{ slider, progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :legend="slider"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #legend>
          <span> / 200</span>
        </template>
        <template #legend-caption>
          <div>Tasks Done</div>
        </template>
      </vep>
    </template>
    <template #code="{ slider, progress }">
      <slot name="code" :slider :progress> </slot>
    </template>
  </example-code>
</template>
<style scoped></style>
