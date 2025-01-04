<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const size = 150;
</script>

<template>
  <example-code preselected-state="Loading">
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :loader="{ color: '#F08080' }"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :loader="{
          color: 'MediumPurple',
          lineMode: 'in 10',
          opacity: 1,
          thickness: 4,
          duration: 4000,
        }"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :loader="{
          color: {
            radial: true,
            colors: [
              {
                color: '#3260FC',
                offset: '49',
                opacity: 1,
              },
              {
                color: '#3260FC',
                offset: '80',
                opacity: 1,
              },
              {
                color: '#3260FC',
                offset: '100',
                opacity: 0,
              },
            ],
          },
          opacity: 1,
          thickness: 15,
        }"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
