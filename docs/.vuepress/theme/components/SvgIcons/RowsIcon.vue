<template>
  <span :style="{ width: `${size}px`, height: `${size}px` }">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <rect :width="size" :height="size" fill="none" />
      <rect
        width="176"
        height="56"
        x="40"
        y="144"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        rx="8"
      />
      <rect
        width="176"
        height="56"
        x="40"
        y="56"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="8"
        rx="8"
      />
    </svg>
  </span>
</template>

<script>
export default {
  name: "RowsIcon",
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
