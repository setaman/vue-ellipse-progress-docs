<template>
  <ve-progress v-for="(c, i) in circles" v-bind="c" :progress="50" :key="i" />
</template>
<script lang="ts">
import { Data, PluginConfig } from "../../types";

export const circle1: Partial<PluginConfig> = {
  gap: 10,
  animation: "default 1000 0",
  progress: 100,
  data: [
    {
      thickness: 0,
    },
    {
      thickness: 1,
    },
    {
      thickness: 1,
    },
    {
      thickness: 1,
    },
    {
      thickness: 1,
    },
    {
      thickness: 1,
    },
    {
      thickness: 1,
    },
  ],
};
export const circle2: Partial<PluginConfig> = {
  progress: 100,
  data: [
    {
      thickness: 1,
      gap: 20,
    },
    {
      thickness: 4,
    },
    {
      thickness: 4,
    },
    {
      thickness: 4,
    },
    {
      thickness: 4,
    },
    {
      thickness: 4,
    },
    {
      thickness: 4,
    },
  ],
};

export const animateGap = (initialGap: number) => {
  if (initialGap === 0) {
    return 100;
  } else {
    return 0;
  }
};
export const animateData = (data: Data) => {
  if (data[1].gap === 20) {
    data[1].gap = 100;
  } else {
    data[1].gap = 20;
  }
};

export default {
  setup() {
    return {
      circles: [circle1, circle2],
    };
  },
  onMounted() {
    setInterval(() => {
      circle1.gap = animateGap(0);
      animateData(circle2.data);
    }, 1000);
  },
};
</script>
