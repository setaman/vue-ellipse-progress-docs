<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :data="[
          {
            dot: '20 rgb(220,220,220)',
          },
          {
            color: 'Tomato',
            half: true,
            emptyColor: 'rgba(255,160,122,0.5)',
          },
          {
            color: 'MediumSeaGreen',
          },
        ]"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
