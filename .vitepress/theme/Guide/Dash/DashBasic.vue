<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { computed, ref, watch } from "vue";
import VueformSlider from "@vueform/slider";

const strict = ref(true);
const amount = ref(60);
const spacing = ref(0.6);

const dash = computed(() => {
  const mode = strict.value ? "strict " : "";
  return `${mode}${amount.value} ${spacing.value}`;
});

watch(strict, () => {
  if (strict.value) {
    spacing.value = 0.6;
  } else {
    spacing.value = 10;
  }
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <label>
        <input type="checkbox" v-model="strict" />
        strict
      </label>
      <label class="block my-4">
        Amount: {{ amount }}
        <vueform-slider
          v-model.number="amount"
          class="example-code-slider my-4 w-full"
          :min="0"
          :max="100"
          :step="1"
        />
      </label>
      <label class="block my-4">
        Spacing: {{ spacing }}
        <vueform-slider
          v-model.number="spacing"
          class="example-code-slider my-4 w-full"
          :min="0"
          :max="strict ? 0.99 : 100"
          :step="strict ? 0.1 : 1"
        />
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :dash="dash"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :dash :progress> </slot>
    </template>
  </example-code>
</template>
