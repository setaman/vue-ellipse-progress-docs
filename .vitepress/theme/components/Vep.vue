<script setup lang="ts">
import { defineClientComponent } from 'vitepress'

const VueEllipseProgress = defineClientComponent(() => {
  return import('vue-ellipse-progress').then((mod) => {
    return mod.VeProgress;
  })
})
</script>

<template>
  <VueEllipseProgress :progress="50" />
</template>
