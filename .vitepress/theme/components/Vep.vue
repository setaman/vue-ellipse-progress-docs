<script setup lang="ts">
import { Component, onMounted, shallowRef } from "vue";

const VueEllipseProgress = shallowRef<Component | null>(null);

onMounted(() => {
  import("vue-ellipse-progress").then((mod) => {
    VueEllipseProgress.value = mod.VeProgress;
  });
});
</script>

<template>
  <VueEllipseProgress v-if="VueEllipseProgress" :progress="50" v-bind="$attrs">
    <template #default="{ counterTick }">
      <slot :counterTick="counterTick"></slot>
    </template>
    <template #circle-progress="{ attrs }">
      <slot name="circle-progress" :attrs="attrs"></slot>
    </template>
    <template #legend>
      <slot name="legend"></slot>
    </template>
    <template #legend-caption>
      <slot name="legend-caption"></slot>
    </template>
  </VueEllipseProgress>
</template>
