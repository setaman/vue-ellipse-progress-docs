<template>
  <div class="flex flex-wrap gap-1">
    <div v-for="(c, i) in configs" :key="i">
      <h6>{{ c.title }}</h6>
      <ve-progress v-for="c in configs" :color="c.color" :progress="50" />
    </div>
  </div>
</template>
<script lang="ts">
import Vep from "../../components/Vep.vue";

export const configs = [
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#3f87a6", offset: "0", opacity: 0.8 },
        { color: "#ebf8e1", offset: "50", opacity: 0.8 },
        { color: "#f69d3c", offset: "100", opacity: 0.8 },
      ],
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#00c9ff", offset: "0" },
        { color: "#92fe9d", offset: "30" },
        { color: "#fcb045", offset: "70" },
        { color: "#ff0000", offset: "100" },
      ],
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#ff7f50", offset: "0" },
        { color: "#ff6347", offset: "100" },
      ],
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#ff9a9e", offset: "0", opacity: 0.5 },
        { color: "#fad0c4", offset: "70", opacity: 0.3 },
        { color: "#ffe0e9", offset: "100", opacity: 1 },
      ],
      radial: true,
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#b0bec5", offset: "0", opacity: 1 },
        { color: "#78909c", offset: "50", opacity: 0.7 },
        { color: "#455a64", offset: "100", opacity: 0.5 },
      ],
      radial: true,
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#ffb74d", offset: "0", opacity: 1 },
        { color: "#ff8a65", offset: "50", opacity: 0.7 },
        { color: "#ff5252", offset: "100", opacity: 0.4 },
      ],
      radial: true,
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#4dd0e1", offset: "0", opacity: 1 },
        { color: "#009688", offset: "60", opacity: 0.6 },
        { color: "#004d40", offset: "100", opacity: 0.3 },
      ],
      radial: true,
    },
  },
  {
    title: "Color Ai",
    color: {
      colors: [
        { color: "#ff6ec7", offset: "0", opacity: 1 },
        { color: "#9e00ff", offset: "40", opacity: 0.8 },
        { color: "#4e00b2", offset: "100", opacity: 0.5 },
      ],
      radial: true,
    },
  },
];

export default {
  components: { Vep },
  setup() {
    return {
      configs,
    };
  },
};
</script>
