<template>
  <div class="example-container rounded-lg" :class="{ code: mode === 'Code' }">
    <div class="example-container-header rounded-t-lg px-4 py-2 flex justify-end">
      <link-icon class="mr-2" href="https://github.com/setaman/vue-ellipse-progress/tree/v2-dev" target="_blank">
        <icon icon="github"/>
      </link-icon>
      <SwitchSlider :options="modes" size="100" v-model="mode" />
    </div>
    <div class="example-container-body">
      <div class="example-container-result p-4 flex-1" v-if="mode === 'Result'">
        <slot :progress="progress" :state="state">

        </slot>
      </div>
      <div class="example-container-code p-4 flex-1" v-else>
        <slot name="code">
          <span class="text-indigo-500">
            code
          </span>
        </slot>
      </div>
    </div>
    <div class="example-container-footer rounded-b-lg md:flex md:flex-row">
      <div class="example-controls-range flex-1 py-2 px-4" v-if="showProgress">
        <input class="progress-range mt-4" type="range" :id="`progress_${uid}`" name="progress" step="1"
               min="-100" max="100" v-model.number="progress">
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
export default {
  name: "ExampleContainer",
  components: {LinkIcon, Icon, SwitchSlider},
  props: {
    showProgress: {
      type: Boolean,
      default: true,
    },
    showStates: {
      type: Boolean,
      default: true,
    }
  },
  data: () => ({
    progress: 50,
    state: "Normal",
    mode: "Result",
    states: ["Normal", 'Loading', 'Determinate', 'No data'],
    modes: ["Result", "Code"]
  }),
  computed: {
    uid() {
      return this._.uid;
    }
  }
}
</script>

<style scoped lang="scss">
.example-container-body {
  border: 2px solid #f5f6fa;
  min-height: 236px;
}
.example-container-header {
  background-color: #f5f6fa;
}
.example-container-footer {
  background-color: #f5f6fa;
  .progress-range {
    width: 100%;
    -webkit-appearance: none;
    &::-webkit-slider-runnable-track {
      width: 300px;
      height: 5px;
      background: #ddd;
      border: none;
      border-radius: 3px;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      transition: 0.1s;
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 50%;
      background: #265cff;
      margin-top: -3px;
      cursor: pointer;
      &:hover{
        height: 16px;
        width: 16px;
        margin-top: -5px;
      }
    }
  }
  .example-controls-states {
    position: relative;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: -20px;
      top: -2px;
      background: white;
      width: 2px;
      height: 109%;
      transform: rotate(20deg);
    }
  }
}
.example-container-code {
  max-height: 80vh;
}

@media (max-width: 768px) {
  .example-controls-states:after {
    display: none !important;
  }
}
</style>
