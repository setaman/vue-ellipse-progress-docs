<template>
  <ve-progress v-for="s in sizes" :size="s" :progress="50" :key="s">
    <template #legend-caption>
      <span>{{ s }}</span>
    </template>
  </ve-progress>
</template>
<script setup>
const sizes = [150, 120, 80, 60, 40];
</script>
