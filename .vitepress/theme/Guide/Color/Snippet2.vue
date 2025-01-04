<template>
  <ve-progress :color="gradient1" thickness="10%" :progress="50" :size="150" />
  <ve-progress :color="gradient2" thickness="10%" :progress="50" :size="150" />
  <ve-progress :color="gradient3" thickness="30%" :progress="50" :size="150" />
  <ve-progress :color="gradient4" thickness="30%" :progress="50" :size="150" />
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

export const gradient1 = {
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
export const gradient2 = {
  colors: [
    {
      color: "#3498DB",
      offset: "0",
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
export const gradient3 = {
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
export const gradient4 = {
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
