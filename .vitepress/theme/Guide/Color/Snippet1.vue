<template>
  <ve-progress color="DimGray" :progress="50" :size="150" />
  <ve-progress color="#1ABC9C" :progress="50" :size="150" />
  <ve-progress color="rgba(255, 87, 51, 0.7)" :progress="50" :size="150" />
  <ve-progress :color="color4" :progress="50" :size="150" />
</template>
<script setup lang="ts">
import randomColor from "randomcolor";
import { onMounted, ref } from "vue";

const color4 = ref(randomColor());

onMounted(() => {
  setInterval(() => {
    color4.value = randomColor();
  }, 1000);
});
</script>
