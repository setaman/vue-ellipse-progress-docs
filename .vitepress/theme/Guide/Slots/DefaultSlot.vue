<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #default="{ counterTick }">
          <div>
            <span>i can</span> <br />
            <span>put </span>
            <b style="color: #2d68fc; font-size: 1.5rem">
              {{ counterTick.currentValue }}
            </b>
            <span> anything</span><br />
            <span>here</span>
          </div>
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
<style scoped></style>
