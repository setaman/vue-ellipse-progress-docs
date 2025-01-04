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
    color: gradient1,
    thickness: "10%",
  },
  {
    color: gradient2,
    thickness: "10%",
  },
  {
    color: gradient3,
    thickness: "30%",
  },
  {
    color: gradient4,
    thickness: "30%",
  },
]);

onMounted(() => {
  setInterval(() => {
    randomizeGradient(circles.value[3].color);
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
        :size="160"
        :empty-thickness="c.thickness"
        :empty-color="c.color"
      >
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
