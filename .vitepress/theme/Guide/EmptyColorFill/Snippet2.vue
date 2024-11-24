<template>
  <ve-progress :color-fill="gradient1" :progress="50" :size="150" />
  <ve-progress :color-fill="gradient2" :progress="50" :size="150" />
  <ve-progress
    :color-fill="gradient3"
    line-mode="in 10"
    :progress="50"
    :size="150"
  />
  <ve-progress :color-fill="gradient4" :progress="50" :size="150" />
</template>
<script lang="ts">
import randomColor from "randomcolor";
export type Gradient = {
  colors: {
    color: string;
    offset: string;
    opacity?: number;
  }[];
  radial?: boolean;
};

export const gradient1: Gradient = {
  colors: [
    {
      color: "#3498DB",
      offset: "0",
    },
    {
      color: "#8A2BE2",
      offset: "100",
    },
  ],
};
export const gradient2: Gradient = {
  colors: [
    {
      color: "#ffffff",
      offset: "0",
    },
    {
      color: "#f8f9fa",
      offset: "70",
    },
    {
      color: "#edf1f5",
      offset: "100",
    },
    {
      color: "Crimson",
      offset: "75",
    },
    {
      color: "#8A2BE2",
      offset: "100",
    },
  ],
};
export const gradient3: Gradient = {
  radial: true,
  colors: [
    {
      color: "#3498DB",
      offset: "0",
      opacity: 0.5,
    },
    {
      color: "rgb(72, 201, 176)",
      offset: "25",
    },
    {
      color: "hsl(48, 89%, 60%, 0.2)",
      offset: "50",
    },
    {
      color: "Crimson",
      offset: "75",
    },
    {
      color: "#8A2BE2",
      offset: "100",
    },
  ],
};
export const gradient4: Gradient = {
  colors: [
    {
      color: "#3498DB",
      offset: "0",
    },
    {
      color: "hsl(48, 89%, 60%, 0.2)",
      offset: "50",
    },
    {
      color: "#8A2BE2",
      offset: "100",
    },
  ],
};

export const randomizeGradient = (gradient: Gradient) => {
  gradient.colors = gradient.colors.map((conf) => ({
    ...conf,
    color: randomColor(),
  }));
  return gradient;
};

export default {
  setup() {
    return { gradient1, gradient2, gradient3, gradient4 };
  },
  onMounted() {
    setInterval(() => {
      randomizeGradient(gradient4);
    }, 1000);
  },
};
</script>
