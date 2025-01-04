<script setup lang="ts">
// https://codepen.io/jeremyfrank/pen/PoajdwX
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { computed, ref } from "vue";
const p = ref(50);

const progress = computed(() => {
  return `${p.value}%`;
});
</script>

<template>
  <example-code v-model:slider="p" :range="[0, 100]" :step="1">
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        class="circle-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        color="transparent"
        empty-color="rgba(63, 121, 255, 0.2)"
        :dot="{
          size: '5%',
        }"
      >
      </vep>
      <vep
        class="circle-2"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        color="transparent"
        empty-color="rgba(63, 121, 255, 0.2)"
        :dot="{
          size: '5%',
        }"
      >
      </vep>
      <vep
        class="circle-3"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color="{
          colors: [
            {
              color: 'LightCoral',
              offset: '0',
            },
            {
              color: 'Gold',
              offset: '33',
            },
            {
              color: 'MediumSpringGreen',
              offset: '100',
            },
          ],
        }"
        :dot="{
          size: '5%',
        }"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
<style scoped lang="scss">
// internal stuff, disables the dot rotation following the progress line
:deep(.ep-circle--progress__dot-container) {
  transform: none !important;
}
:deep(.ep-circle--progress__dot) {
  transition: 0s !important;
  // we make the dot as big as the circle itself
  width: 200px !important;
  height: 200px !important;
  border-radius: 100% !important;
  background-color: transparent !important;
  border: 0 solid transparent;
  // some CSS magic to apply a conic gradient, creating a progress line
  &:after,
  &:before {
    transition: 0.3s;
    --startColor: rgba(63, 121, 255, 0.1);
    --endColor: #3f79ff;
    --from: -0deg;
    // we bind the computed progress value to reactively update the gradient
    --progress: v-bind(progress);
    content: "";
    border-radius: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: conic-gradient(
      from var(--from),
      var(--startColor),
      var(--endColor) var(--progress),
      transparent var(--progress)
    );
    mask: radial-gradient(
      farthest-side,
      transparent calc(100% - var(--thickness)),
      #fff calc(100% - var(--thickness) + 1px)
    );
  }
  &:before {
    opacity: 0;
  }
}
.circle-1 {
  :deep(.ep-circle--progress__dot) {
    &:after {
      --thickness: 80px;
    }
  }
}
.circle-2 {
  :deep(.ep-circle--progress__dot) {
    &:after {
      --startColor: rgba(63, 121, 255, 0);
      --thickness: 10px;
    }
  }
}
.circle-3 {
  :deep(.ep-circle--progress__dot) {
    &:after {
      --startColor: transparent;
      --endColor: #e6e9f0;
      --thickness: 10px;
      background: conic-gradient(
        from var(--from),
        var(--startColor),
        var(--startColor) var(--progress),
        var(--endColor) var(--progress),
        var(--endColor) 100%,
        transparent var(--progress)
      );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--thickness)),
        #fff calc(100% - var(--thickness) + 1px)
      );
    }
    &:before {
      opacity: 1;
      --progress: v-bind(progress);
      --startColor: LightCoral;
      --middleCollor: Gold;
      --endColor: MediumSpringGreen;
      --thickness: 10px;
      background: conic-gradient(
        from var(--from),
        var(--startColor) 33%,
        var(--middleCollor) 50%,
        var(--endColor) 100%,
        transparent var(--progress)
      );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--thickness)),
        #fff calc(100% - var(--thickness) + 1px)
      );
    }
  }
}
</style>
