<template>
  <div class="example-container rounded-lg my-6" :class="{ code: mode === 'Code' }">
    <div class="example-container-header rounded-t-lg px-4 py-2 flex justify-end" v-if="showModes || exampleLink">
      <link-icon class="mr-2" :href="exampleLink" target="_blank" v-if="exampleLink">
        <icon icon="github"/>
      </link-icon>
      <SwitchSlider :options="modes" :size="100" v-model="mode" v-if="showModes"/>
    </div>
    <div class="example-container-body">
      <div class="example-container-result p-4" v-if="mode === 'Result'">
        <slot :progress="progress" :state="state" :loading="loading" :noData="noData" :determinate="determinate">

        </slot>
      </div>
      <div class="example-container-code p-4" v-else>
        <slot name="code">

        </slot>
      </div>
    </div>
    <div class="example-container-footer rounded-b-lg md:flex md:flex-row">
      <div class="example-controls-range flex-1 py-2 px-4" v-if="showProgress">
        <div class="flex flex-wrap h-full content-center">
          <slot name="range">
            <slider class="w-full" :min="range[0]" :max="range[1]" v-model.number="progress"/>
          </slot>
        </div>
      </div>
      <div class="example-controls-states flex-2 py-2 px-4 md:ml-8" v-if="showStates">
        <SwitchSlider :options="states" size="100" v-model="state" />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchSlider from "../SwitchSlider";
import Icon from "../Icon";
import LinkIcon from "../LinkIcon";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";

export default {
  name: "ExampleContainer",
  components: { LinkIcon, Icon, SwitchSlider, Slider },
  props: {
    showProgress: {
      type: Boolean,
      default: true,
    },
    showStates: {
      type: Boolean,
      default: true,
    },
    showModes: {
      type: Boolean,
      default: true,
    },
    exampleLink: {
      type: String,
      default: "",
    },
    range: {
      type: Array,
      default: () => [-100, 100]
    }
  },
  data() {
    return {
      progress: (Math.abs(this.range[0] - this.range[1]) / 2) * 100 / Math.abs(this.range[0] - this.range[1]),
      state: "Normal",
      mode: "Result",
      states: ["Normal", 'Loading', 'Determinate', 'No data'],
      modes: ["Result", "Code"]
    }
  },
  computed: {
    loading() {
      return this.state === "Loading"
    },
    noData() {
      return this.state === "No data"
    },
    determinate() {
      return this.state === "Determinate"
    },
  },
}
</script>

<style lang="scss">
.example-container-body {
  border: 2px solid #f5f6fa;
  min-height: 236px;
}
.example-container-header {
  background-color: #f5f6fa;
}
.example-container-footer {
  background-color: #f5f6fa;
  .example-controls-states {
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: -20px;
      top: -3px;
      background: white;
      width: 2px;
      height: 110%;
      transform: rotate(20deg);
    }
  }
}
.example-container-code {
  max-height: 80vh;
}

.example-controls-range {
  &:hover {
    .slider-tooltip {
      opacity: 1;
    }
  }
}

.dark {
  .example-container-body {
    border: 2px solid #2a2c3c;
    min-height: 236px;
  }
  .example-container-header {
    background-color: #2a2c3c;
  }
  .example-container-footer {
    background-color: #2a2c3c;
  }
  .example-controls-states:after {
    background-color: #22272e;
  }
}

.slider-connect {
  background: #265cff;
}

.slider-tooltip {
  transition: 0.2s;
  opacity: 0;
  background: #265cff;
  border: 1px solid #265cff;
}

@media (max-width: 768px) {
  .example-controls-states:after {
    display: none !important;
  }
}
</style>
