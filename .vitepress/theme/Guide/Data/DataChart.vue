<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { data } from "./Snippet1.vue";
</script>

<template>
  <example-code hide-slider>
    <template #default="{ progress, loading, noData, determinate }">
      <div class="flex gap-4">
        <vep
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :data="data"
          :size="150"
          :thickness="40"
          :gap="-40"
          line="butt"
        >
        </vep>
        <div>
          <div v-for="(chart, i) in data" :key="i">
            <span
              class="chart-legend"
              :style="{ backgroundColor: chart.color as string }"
            ></span>
            <span>Data {{ i + 1 }}</span>
          </div>
        </div>
      </div>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
<style lang="scss">
.chart-legend {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>
