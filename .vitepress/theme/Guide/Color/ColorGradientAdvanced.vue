<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";
import {
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  circle7,
  circle8,
  circle9,
} from "./Snippet3.vue";

const circles = ref([
  circle1,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  circle7,
  circle8,
  circle9,
]);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <div class="flex flex-wrap">
        <vep
          v-for="(c, i) in circles"
          v-bind="c"
          :key="i"
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
        >
        </vep>
      </div>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
