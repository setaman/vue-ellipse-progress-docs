<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p
        :progress="slider"
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
      </v-e-p>
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-container>
</template>

<script setup>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import { ref, watch } from "vue";

const pathLength = ref(0);
const polygon = ref();

watch(polygon, () => {
  pathLength.value = polygon.value?.getTotalLength() ?? 0;
});
</script>

<style scoped></style>
