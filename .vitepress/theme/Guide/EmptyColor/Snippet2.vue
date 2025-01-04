<template>
  <ve-progress
    :empty-color="gradient1"
    empty-thickness="10%"
    :progress="50"
    :size="160"
  />
  <ve-progress
    :empty-color="gradient2"
    empty-thickness="10%"
    :progress="50"
    :size="160"
  />
  <ve-progress
    :empty-color="gradient3"
    empty-thickness="30%"
    :progress="50"
    :size="160"
  />
  <ve-progress
    :empty-color="gradient4"
    empty-thickness="30%"
    :progress="50"
    :size="160"
  />
</template>
<script lang="ts">
import randomColor from "randomcolor";
import { Gradient } from "../../types";

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
