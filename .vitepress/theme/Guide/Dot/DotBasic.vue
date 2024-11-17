<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const size = 150;
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :dot="15"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        dot="8 lightgray"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        dot="2% lightgray"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
