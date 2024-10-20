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

const {
  step = 1,
  range = [-100, 100],
  collapse,
} = defineProps<{
  range?: [number, number];
  preselectedState?: State;
  step?: number;
  hideState?: boolean;
  hideMode?: boolean;
  hideSlider?: boolean;
  collapse?: boolean;
}>();

const mode = ref<Mode>("Result");
const state = ref<State>("Normal");
const slider = ref<number>(Math.round(range[1] / 2) || 0);
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
        <button
          type="button"
          class="text-xs text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg px-3 py-2 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-1"
        >
          <svg
            class="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <example-code-mode v-model="mode" />
      </div>
    </div>
    <div v-if="!isCollapsed" class="example-code-content flex py-0">
      <div
        v-if="mode === 'Result' || mode === 'both'"
        class="example-code-preview p-4 flex-1"
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
        </slot>
        <vep
          :progress="progress"
          :state="state"
          :loading="loading"
          :noData="noData"
          :determinate="determinate"
        />
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
      class="example-code-footer block md:flex justify-between p-2"
    >
      <div class="flex-1 flex items-center">
        <div class="example-code-slider w-full">
          <vueform-slider
            v-model.number="slider"
            class="w-full"
            :min="range[0]"
            :max="range[1]"
            :step="step"
          />
        </div>
      </div>
      <div class="flex-1 pt-5 md:pt-0 md:pl-3">
        <SwitchSlider v-model="state" :options="states" :size="100" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.example-code-container {
  background-color: var(--vp-c-bg-soft);

  .language-vue {
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
