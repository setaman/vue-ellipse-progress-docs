<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";
import VueformSlider from "@vueform/slider";

const size = 150;
const angle = ref(-90);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vueform-slider
        v-model.number="angle"
        class="example-code-slider my-4 w-full"
        :min="-720"
        :max="720"
      />

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :angle
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :angle :progress> </slot>
    </template>
  </example-code>
</template>
