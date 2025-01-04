<script setup lang="ts">
import ExampleCode from "../../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../../components/Vep.vue";
import { ref, useTemplateRef, watch } from "vue";

const polygon = useTemplateRef("polygon");
const pathLength = ref(0);

watch(polygon, () => {
  pathLength.value = polygon.value?.getTotalLength() ?? 0;
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        empty-thickness="0"
        color="#1ABC9C"
      >
        <template #circle-progress="{ attrs }">
          <polygon
            ref="polygon"
            :stroke-dashoffset="attrs.calculateProgressOffset(pathLength)"
            :stroke-dasharray="pathLength"
            points="10,10 190,100 10,190"
            style="fill: #7b68ee"
            :stroke-width="attrs.thickness"
            :stroke-linecap="attrs.line"
            :stroke="attrs.color"
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
