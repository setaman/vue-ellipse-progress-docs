<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";
import { PluginConfig } from "../../types";
import { getRandomConfig } from "../../utils";

const config = ref<PluginConfig>(getRandomConfig());
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        v-bind="config"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
      </vep>
      <p>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          @click="config = getRandomConfig()"
        >
          Try again!
        </button>
      </p>
    </template>
    <template #code>
      <slot name="code" :config> </slot>
    </template>
  </example-code>
</template>
