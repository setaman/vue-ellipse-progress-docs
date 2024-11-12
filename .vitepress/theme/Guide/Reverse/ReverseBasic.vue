<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";

const size = 150;
const reverse = ref(false);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="reverse" />
        reverse
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :reverse
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :reverse :progress> </slot>
    </template>
  </example-code>
</template>
