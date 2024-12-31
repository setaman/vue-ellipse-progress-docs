<script setup lang="ts">
import VueformSlider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import SwitchSlider from "../Base/SwitchSlider.vue";
import { computed, ref } from "vue";
import Vep from "../Vep.vue";
import ExampleCodeMode from "./ExampleCodeMode.vue";
import ExampleCodeControls from "./ExampleCodeControls.vue";

type State = "Normal" | "Loading" | "Determinate" | "No data";
type Mode = "Result" | "Code" | "both";

const slider = defineModel<number>("slider", { required: false });
const {
  step = 1,
  range = [-100, 100],
  collapse,
  initMode = "both",
  preselectedState = "Normal",
} = defineProps<{
  range?: [number, number];
  initMode?: Mode;
  preselectedState?: State;
  step?: number;
  hideState?: boolean;
  hideMode?: boolean;
  hideSlider?: boolean;
  collapse?: boolean;
}>();

const mode = ref<Mode>(initMode);
const state = ref<State>(preselectedState);
const componentKey = ref<number>(0);
const isCollapsed = ref(collapse);
const states = ["Normal", "Loading", "Determinate", "No data"].map((title) => ({
  title,
}));

const progress = computed(() => {
  return (slider.value * 100) / range[1];
});
const loading = computed(() => {
  return state.value === "Loading";
});
const determinate = computed(() => {
  return state.value === "Determinate";
});
const noData = computed(() => {
  return state.value === "No data";
});

const reload = () => {
  componentKey.value += 1;
};
const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};

slider.value = Math.round(range[1] / 2) || 0;
</script>

<template>
  <div class="example-code-container rounded-lg">
    <div class="example-code-header flex justify-between p-2">
      <div>
        <example-code-controls
          :collapsed="isCollapsed"
          @toggle="toggleCollapsed"
          @reload="reload"
        />
      </div>
      <div v-if="!isCollapsed" class="flex">
        <example-code-mode v-if="!hideMode" v-model="mode" />
      </div>
    </div>
    <div v-if="!isCollapsed" class="example-code-content flex py-0">
      <div
        v-if="mode === 'Result' || mode === 'both'"
        class="example-code-preview p-2 flex-1"
        :key="componentKey"
      >
        <slot
          :progress="progress"
          :slider="slider"
          :state="state"
          :loading="loading"
          :noData="noData"
          :determinate="determinate"
        >
          <vep
            :progress="progress"
            :state="state"
            :loading="loading"
            :noData="noData"
            :determinate="determinate"
          />
        </slot>
      </div>
      <div
        v-if="mode === 'Code' || mode === 'both'"
        class="example-code-code-wrapper flex-1 relative overflow-auto"
      >
        <div
          class="w-full h-full overflow-visible"
          :class="{ absolute: mode === 'both' }"
        >
          <slot
            name="code"
            :progress="progress"
            :slider="slider"
            :state="state"
            :loading="loading"
            :noData="noData"
            :determinate="determinate"
          ></slot>
        </div>
      </div>
    </div>
    <div
      v-if="!isCollapsed"
      class="example-code-footer block md:flex justify-between p-2 pb-0 px-0 sm:pb-2 sm:px-2"
    >
      <div class="flex-1 flex items-center">
        <div v-if="!hideSlider" class="example-code-slider w-full">
          <vueform-slider
            v-model.number="slider"
            class="w-full"
            :min="range[0]"
            :max="range[1]"
            :step="step"
          />
        </div>
      </div>
      <div v-if="!hideState" class="flex-1 pt-4 md:pt-0 md:pl-3">
        <div class="flex justify-end">
          <SwitchSlider v-model="state" :options="states" :size="100" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.example-code-container {
  background-color: var(--vp-c-bg-soft);

  .language-vue,
  .language-js {
    margin: 0 !important;
    height: 100%;

    pre {
      height: 100%;
      overflow: auto;
      padding: 10px 0 !important;
    }

    code {
      padding: 0 15px !important;
    }
  }

  .example-code-slider {
    .slider-connect {
      background: #265cff;
    }
    .slider-tooltip {
      transition: 0.2s;
      opacity: 0;
      background: #265cff;
      border: 1px solid #265cff;
    }

    &:hover {
      .slider-tooltip {
        opacity: 1;
      }
    }
  }
}
</style>
