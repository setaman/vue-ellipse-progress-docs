<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const legends = [3000, "20,50", "01000", "0050,51100", "0050.250"];
</script>

<template>
  <example-code>
    <template #default="{ loading, progress, noData, determinate }">
      <vep
        v-for="l in legends"
        :key="l"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="l"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
