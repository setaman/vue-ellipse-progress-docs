<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const thickness = [1, 5, 15, 25];
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        v-for="t in thickness"
        :key="t"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size="150"
        :empty-thickness="t"
      >
        <template #default>
          <span>{{ t }}</span>
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
