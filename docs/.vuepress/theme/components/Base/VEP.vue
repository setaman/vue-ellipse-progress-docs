<template>
  <div class="inline-block">
    <ClientOnly>
      <component v-if="component" :is="component" v-bind="$attrs">
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
          <slot name="caption"></slot>
        </template>
      </component>
    </ClientOnly>
  </div>
</template>

<script setup>
import { shallowRef, onMounted } from "vue";

const component = shallowRef(null);
onMounted(() =>
  import("vue-ellipse-progress").then((module) => {
    component.value = module.VeProgress;
  })
);
</script>

<style scoped></style>
