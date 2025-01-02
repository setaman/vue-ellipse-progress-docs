<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const size = 150;
</script>

<template>
  <example-code preselected-state="No data">
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
      >
        <template #legend>
          <span>/100</span>
        </template>
        <template #legend-caption>
          <span>i'm a caption</span>
        </template>
      </vep>
      <vep
        progress="Bad progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
      >
        <template #legend-caption>
          <span>Bad progress</span>
        </template>
      </vep>
    </template>
    <template #code="{ progress, noData }">
      <slot name="code" :noData :progress> </slot>
    </template>
  </example-code>
</template>
