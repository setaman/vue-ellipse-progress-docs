<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";
import VueformSlider from "@vueform/slider";

const size = 250;
const gap = ref(10);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <label class="block mb-5">
        Gap
        <vueform-slider
          v-model.number="gap"
          class="example-code-slider my-4 w-full"
          :min="-10"
          :max="100"
          :step="0.5"
        />
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :gap
        :data="[
          {
            color: 'blue',
            thickness: 1,
          },
          {
            color: 'red',
            emptyColor: '#F08080',
            thickness: 3,
          },
          {
            color: 'green',
            thickness: 5,
            loading: true,
          },
          {
            gap: 30,
            color: '#FFD700',
            thickness: 7,
            reverse: true,
            determinate: true,
          },
        ]"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :gap :progress> </slot>
    </template>
  </example-code>
</template>
