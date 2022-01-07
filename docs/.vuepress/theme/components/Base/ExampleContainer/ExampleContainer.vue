<template>
  <div
    class="example-container rounded-lg my-6"
    :class="{ code: mode === 'Code' }"
  >
    <div
      class="example-container-header rounded-t-lg px-4 py-2 flex justify-end"
    >
      <btn icon class="mr-2" @click="reload">
        <icon style="font-size: 1.2rem" icon="redo" />
      </btn>
      <link-icon
        class="mr-2"
        :href="exampleLink"
        target="_blank"
        v-if="exampleLink"
      >
        <icon icon="github" />
      </link-icon>
      <SwitchSlider
        :options="modes"
        :size="70"
        v-model="mode"
        v-if="showModes"
      />
    </div>
    <div
      class="example-container-body grid-cols-1 lg:grid-cols-2"
      :class="{ grid: mode === 'both' }"
    >
      <div
        class="example-container-result p-4"
        :class="{ 'side-by-side': mode === 'both' }"
        v-if="['Result', 'both'].includes(mode)"
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
      </div>
      <div
        class="example-container-code"
        v-if="['Code', 'both'].includes(mode)"
      >
        <slot
          name="code"
          :progress="progress"
          :slider="slider"
          :state="state"
          :loading="loading"
          :noData="noData"
          :determinate="determinate"
        >
        </slot>
      </div>
    </div>
    <div class="example-container-footer rounded-b-lg lg:flex lg:flex-row">
      <div class="example-controls-range flex-1 py-2 px-4">
        <div class="flex flex-wrap h-full content-center" v-if="showProgress">
          <slot name="range">
            <slider
              class="w-full"
              :min="range[0]"
              :max="range[1]"
              v-model.number="slider"
              :step="step"
            />
          </slot>
        </div>
      </div>
      <div
        class="example-controls-states flex-2 py-2 px-4 lg:ml-8"
        v-if="showStates"
      >
        <SwitchSlider
          class="smAndUp"
          :options="states"
          :size="100"
          v-model="state"
        />
        <SwitchSlider
          class="xs"
          :options="states"
          :size="82"
          mini
          v-model="state"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SwitchSlider from "../SwitchSlider";
import Icon from "../Icon";
import LinkIcon from "../LinkIcon";
import "@vueform/slider/themes/default.css";
import Btn from "../Btn";
import CodeIcon from "../../SvgIcons/CodeIcon";
import MonitorIcon from "../../SvgIcons/MonitorIcon";
import RowsIcon from "../../SvgIcons/RowsIcon";

export default {
  name: "ExampleContainer",
  components: {
    RowsIcon,
    MonitorIcon,
    CodeIcon,
    Btn,
    LinkIcon,
    Icon,
    SwitchSlider,
  },
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
      default: () => [-100, 100],
    },
    step: {
      type: Number,
      default: 1,
    },
    preselectedState: {
      types: String,
      default: "Normal",
    },
  },
  data() {
    return {
      slider: Math.round(this.range[1] / 2),
      state: this.preselectedState,
      mode: "Result",
      states: ["Normal", "Loading", "Determinate", "No data"],
      componentKey: 0,
      isDarkMode: false,
    };
  },
  computed: {
    progress() {
      return (this.slider * 100) / this.range[1];
    },
    loading() {
      return this.state === "Loading";
    },
    noData() {
      return this.state === "No data";
    },
    determinate() {
      return this.state === "Determinate";
    },
    modes() {
      const color = this.isDarkMode ? "white" : "#22272e"
      return [
        {
          title: "Result",
          icon: "monitor",
          color,
        },
        {
          title: "Code",
          icon: "code",
          color,
        },
        {
          title: "both",
          icon: "rows",
          color,
        },
      ]
    }

  },
  methods: {
    reload() {
      this.componentKey++;
    },
  },
  mounted() {
    this.isDarkMode =
      document.documentElement.classList.contains("dark")
    document
      .querySelector(".toggle-dark-button")
      .addEventListener(
        "click",
        () =>
          (this.isDarkMode =
            document.documentElement.classList.contains("dark"))
      );
  },
};
</script>

<style lang="scss">
.example-container-body {
  border: 2px solid #f5f6fa;
  min-height: 236px;
}
.example-container-header {
  background-color: #f5f6fa;
}
.example-container-result {
  &.side-by-side {
    border-right: 2px solid #f5f6fa;
  }
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
  max-height: 50vh;
  overflow-y: auto;
  .code-group__nav {
    display: none;
  }
  div {
    height: 100%;
  }
  .language-vue.ext-vue {
    min-height: 236px;
    background-color: transparent;
    margin: 0;
    &:before {
      display: none;
    }
  }
  pre.language-vue {
    margin: 0;
    padding: 16px;
    min-height: 236px;
    height: 100%;
  }
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
  }
  .example-container-result {
    &.side-by-side {
      border-right: 2px solid #2a2c3c;
    }
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

.smAndUp {
  display: block;
}
.xs {
  display: none;
}
@media (max-width: 419px) {
  .example-container {
    margin: 0.85rem -1.5rem;
    border-radius: 0;
  }
  .example-container-header {
    border-radius: 0;
  }
  .example-container-body {
    border: none !important;
  }
  .example-container-footer {
    border-radius: 0;
  }
}

@media (max-width: 779px) {
  .xs {
    display: block;
  }
  .smAndUp {
    display: none;
  }
}

@media (max-width: 1023px) {
  .example-controls-states:after {
    display: none !important;
  }
}
</style>
