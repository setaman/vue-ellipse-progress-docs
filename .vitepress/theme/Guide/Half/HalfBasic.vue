<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";

const size = 180;
const half = ref(true);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="half" />
        half
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :half
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :half
        :angle="0"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :half
        :angle="90"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :half :progress> </slot>
    </template>
  </example-code>
</template>
