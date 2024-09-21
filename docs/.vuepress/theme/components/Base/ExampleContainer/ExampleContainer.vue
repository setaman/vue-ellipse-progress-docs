<template>
  <div
    class="example-container rounded-lg my-6"
    :class="{ code: mode === 'Code' }"
  >
    <div
      class="example-container-header rounded-t-lg px-4 py-2 flex justify-between"
    >
      <div class="flex">
        <btn icon @click="toggleCollapse">
          <icon
            style="font-size: 1.2rem"
            :icon="isCollapsed ? 'angle-down' : 'minus'"
          />
        </btn>
      </div>
      <div v-if="!isCollapsed" class="flex">
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
    </div>
    <div
      v-if="!isCollapsed"
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
        v-if="['Code', 'both'].includes(mode)"
        class="example-container-code-wrapper relative overflow-auto h-full"
      >
        <div class="example-container-code absolute w-full h-full">
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
    </div>
    <div
      v-if="!isCollapsed"
      class="example-container-footer rounded-b-lg lg:flex lg:flex-row"
    >
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
import SwitchSlider from "../SwitchSlider.vue";
import Icon from "../Icon.vue";
import LinkIcon from "../LinkIcon.vue";
import "@vueform/slider/themes/default.css";
import Btn from "../Btn.vue";
import CodeIcon from "../../SvgIcons/CodeIcon.vue";
import MonitorIcon from "../../SvgIcons/MonitorIcon.vue";
import RowsIcon from "../../SvgIcons/RowsIcon.vue";
import { nextTick } from "vue";

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
    collapsed: {
      type: Boolean,
      default: false,
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
      slider: Math.round(this.range[1] / 2) || 0,
      state: this.preselectedState,
      mode: "Result",
      states: ["Normal", "Loading", "Determinate", "No data"],
      componentKey: 0,
      isDarkMode: false,
      isCollapsed: this.collapsed,
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
      const color = this.isDarkMode ? "white" : "#22272e";
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
      ];
    },
  },
  methods: {
    reload() {
      this.componentKey++;
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
    getThemeFromHtml() {
      return document.documentElement.getAttribute("data-theme");
    },
  },
  mounted() {
    const btn = document.querySelector(".vp-toggle-color-mode-button");
    if (btn) {
      btn.addEventListener(
        "click",
        () => (this.isDarkMode = this.getThemeFromHtml()?.includes("dark"))
      );
    }
    nextTick(() => {
      this.isDarkMode = this.getThemeFromHtml()?.includes("dark");
    });
  },
};
</script>

<style lang="scss">
.example-container.code {
  .example-container-code-wrapper {
    height: 40svh;
  }
}
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
  height: 100%;
  .code-group,
  .code-group-item {
    height: 100%;
  }
  .code-group-nav {
    display: none;
  }
  .code-group-item {
    display: block !important;
  }
  .language-vue {
    height: 100%;
    background-color: var(--code-c-bg);
    margin: 0;
    border-radius: 0 !important;
    &:before {
      display: none;
    }
    pre {
      height: 100%;
    }
  }
  pre.language-vue {
    margin: 0;
    padding: 16px;
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

[data-theme="dark"] {
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
  .example-container-code {
    .language-vue {
      background-color: transparent;
    }
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
  .example-container-code-wrapper {
    height: 40svh;
  }
}
</style>
