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
          <ellipse
            :cx="attrs.position"
            :cy="attrs.position"
            :rx="attrs.radius"
            :ry="attrs.radius"
            :stroke-dasharray="attrs.circumference"
            :stroke-dashoffset="attrs.strokeDashOffset"
            :stroke-width="attrs.thickness"
            :stroke="attrs.color"
            :stroke-linecap="attrs.line"
            :class="[attrs.class, attrs.animationClass]"
            fill="transparent"
            :style="attrs.styles"
          />
        </template>
      </vep>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-code>
</template>
<style scoped></style>
