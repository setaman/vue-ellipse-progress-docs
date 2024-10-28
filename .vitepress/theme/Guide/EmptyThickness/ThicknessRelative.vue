<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";

const sizes = [100, 200, 300];
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        v-for="s in sizes"
        :key="s"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size="s"
        empty-thickness="10%"
      >
        <template #default>
          <span>{{ s }}</span>
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
