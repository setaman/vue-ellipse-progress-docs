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
            dash: 'strict 60 0.8',
          },
          {
            color: 'Tomato',
            loading: true,
            loader: {
              color: 'rgba(255,160,122,1)',
              duration: 500,
              lineMode: 'in 10',
            },
          },
          {
            color: 'MediumSeaGreen',
            animation: 'loop 2000 1000',
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
