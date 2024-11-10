<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { PluginConfig } from "../../types";
import { ref } from "vue";

const isFlipped = ref(false);
const commonProps: Partial<PluginConfig> = {
  dot: "20 transparent",
  hideLegend: true,
  color: "transparent",
  emptyColor: "transparent",
  size: 200,
};
const circles: (Partial<PluginConfig> & {
  caption?: string;
  translateX: number;
})[] = [
  {
    ...commonProps,
    emptyColorFill: "rgba(230,233,240,0.5)",
    emptyLinePosition: "out 10",
    translateX: 200,
  },
  {
    ...commonProps,
    emptyColor: "#e6e9f0",
    translateX: 100,
  },
  {
    ...commonProps,
    colorFill: "rgba(63,121,255,0.3)",
    linePosition: "out 20",
    translateX: 60,
  },
  {
    ...commonProps,
    color: "#3f79ff",
    translateX: 0,
  },
  {
    ...commonProps,
    dot: "20",
    translateX: -20,
  },
  {
    ...commonProps,
    hideLegend: false,
    translateX: -50,
  },
  {
    ...commonProps,
    caption: "Caption",
    translateX: -50,
  },
];
</script>

<template>
  <example-code :range="[0, 100]" hide-mode init-mode="Result">
    <template #default="{ loading, progress, noData, determinate }">
      <div class="flex justify-center">
        <div
          class="circles cursor-pointer"
          :class="{ flipped: isFlipped }"
          style="min-height: 200px; width: 200px"
          @click="isFlipped = !isFlipped"
        >
          <div
            v-for="(c, i) in circles"
            class="absolute circle-container"
            :style="{
              '--xoffset': `${c.translateX}px`,
              '--yoffset': `${i * 4}px`,
            }"
            :key="i"
          >
            <vep
              :progress="progress"
              :loading="loading"
              :no-data="noData"
              :determinate="determinate"
              v-bind="c"
            >
              <template v-if="c.caption" #legend-caption>
                <div class="mt-10">{{ c.caption }}</div>
              </template>
            </vep>
          </div>
        </div>
      </div>
    </template>
  </example-code>
</template>
<style lang="scss">
.circles {
  transform-style: preserve-3d;
  &.flipped {
    .circle-container {
      --xoffset: 0;
      --yoffset: 0;
      transform: rotateY(-50deg) translate(var(--xoffset), var(--yoffset));
    }
  }
  &:hover {
    .circle-container {
      --xoffset: 0;
      --yoffset: 0;
      transform: rotateY(-50deg) translate(var(--xoffset), var(--yoffset));
    }
  }
}
.circle-container {
  transform-origin: center;
  transition: transform 1.5s;
}
</style>
