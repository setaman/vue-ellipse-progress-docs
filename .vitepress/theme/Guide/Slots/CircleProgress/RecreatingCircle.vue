<script setup lang="ts">
import ExampleCode from "../../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../../components/Vep.vue";
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      >
        <template #circle-progress="{ attrs }">
          <circle
            fill="transparent"
            :r="attrs.radius"
            :cx="attrs.position"
            :cy="attrs.position"
            :stroke="attrs.color"
            :stroke-width="attrs.thickness"
            :stroke-linecap="attrs.line"
            :stroke-dasharray="attrs.circumference"
            :class="[attrs.class, attrs.animationClass]"
            :style="attrs.styles"
          >
          </circle>
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
<style scoped></style>
