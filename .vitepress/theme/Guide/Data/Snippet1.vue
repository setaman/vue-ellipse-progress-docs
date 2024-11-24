<template>
  <div class="flex gap-4">
    <ve-progress :data="data" :size="150" :progress="50" />
    <div>
      <div v-for="(chart, i) in data" :key="i">
        <span
          class="chart-legend"
          :style="{ backgroundColor: chart.color }"
        ></span>
        <span>Data {{ i + 1 }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Data } from "../../types";

export const data: Data = [
  {
    color: "#7B68EE",
    progress: 15,
  },
  {
    color: "#F08080",
    emptyColor: "transparent",
    progress: 40,
    angle: -45,
  },
  {
    color: "LightSeaGreen",
    emptyColor: "transparent",
    progress: 20,
    angle: 90,
  },
  {
    color: "#3CB371",
    emptyColor: "transparent",
    progress: 31,
    angle: 160,
  },
];

export default {
  setup() {
    return {
      data,
    };
  },
};
</script>
<style lang="scss">
.chart-legend {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>
