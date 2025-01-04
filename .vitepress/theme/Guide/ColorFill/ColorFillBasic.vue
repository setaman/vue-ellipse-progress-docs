<script setup lang="ts">
import randomColor from "randomcolor";
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { onMounted, ref } from "vue";

const colors = ref([
  "DimGray",
  "#1ABC9C",
  "rgba(255, 87, 51, 0.7)",
  randomColor(),
]);

onMounted(() => {
  setInterval(() => {
    colors.value[3] = randomColor();
  }, 1000);
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        v-for="(c, i) in colors"
        :key="i"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size="150"
        :color-fill="c"
      >
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
