<template>
  <span :style="{ width: `${size}px`, height: `${size}px` }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect :width="size" :height="size" fill="none" />
      <rect
        width="192"
        height="144"
        x="32"
        y="48"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        rx="16"
        transform="rotate(180 128 120)"
      />
      <line
        x1="160"
        x2="96"
        y1="224"
        y2="224"
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
  name: "MonitorIcon",
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
