<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { onMounted, ref } from "vue";
import { circle1, circle2, animateGap, animateData } from "./Snippet1.vue";

const circles = ref([circle1, circle2]);

onMounted(() => {
  setInterval(() => {
    circles.value[0].gap = animateGap(circles.value[0].gap);
    animateData(circles.value[1].data);
  }, 1000);
});
</script>

<template>
  <example-code hide-state hide-slider>
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
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
