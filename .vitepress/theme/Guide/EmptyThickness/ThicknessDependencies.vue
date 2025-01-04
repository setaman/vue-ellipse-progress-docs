<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code :range="[0, 100]">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div class="border-2 border-solid border-indigo-600 inline-block">
        <vep
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :empty-thickness="slider"
          dot="20 white"
        />
      </div>
    </template>
    <template #code="{ progress, slider }">
      <slot name="code" :progress :slider> </slot>
    </template>
  </example-code>
</template>
