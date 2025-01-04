<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import {
  gradient1,
  gradient2,
  gradient3,
  gradient4,
  randomizeGradient,
} from "./Snippet2.vue";
import { onMounted, ref } from "vue";

const circles = ref([
  {
    colorFill: gradient1,
  },
  {
    colorFill: gradient2,
  },
  {
    colorFill: gradient3,
    lineMode: "in 10",
  },
  {
    colorFill: gradient4,
  },
]);

onMounted(() => {
  setInterval(() => {
    randomizeGradient(circles.value[3].colorFill);
  }, 1000);
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        v-for="(c, i) in circles"
        :key="i"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size="150"
        v-bind="c"
      >
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
