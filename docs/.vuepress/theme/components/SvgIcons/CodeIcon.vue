<template>
  <span :style="{ width: `${size}px`, height: `${size}px` }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect :width="size" :height="size" fill="none" />
      <polyline
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        points="64 88 16 128 64 168"
      />
      <polyline
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        points="192 88 240 128 192 168"
      />
      <line
        x1="160"
        x2="96"
        y1="40"
        y2="216"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: "CodeIcon",
  props: {
    color: {
      type: String,
      default: "white",
    },
    size: {
      type: Number,
      default: 21,
    },
  },
};
</script>

<style scoped></style>
