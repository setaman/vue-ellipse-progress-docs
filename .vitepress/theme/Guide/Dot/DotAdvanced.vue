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
        line-mode="out"
        :empty-thickness="2"
        color="Navy"
        :dot="{
          size: 10,
          backgroundColor: 'transparent',
          border: '2px DEEPSKYBLUE solid',
        }"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        line-mode="out"
        :thickness="50"
        :empty-thickness="2"
        line="butt"
        color="Navy"
        :dot="{
          size: 50,
          backgroundColor: 'DarkCyan',
          width: '4px',
        }"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        line-mode="in"
        :thickness="70"
        :empty-thickness="2"
        line="butt"
        :color="{
          radial: true,
          colors: [
            {
              color: 'blue',
              offset: 0,
            },
            {
              color: 'blue',
              offset: 47,
            },
            {
              color: 'transparent',
              offset: 48,
            },
            {
              color: 'transparent',
              offset: 100,
            },
          ],
        }"
        :dot="{
          size: 70,
          backgroundColor: 'DarkCyan',
          width: '2px',
        }"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
