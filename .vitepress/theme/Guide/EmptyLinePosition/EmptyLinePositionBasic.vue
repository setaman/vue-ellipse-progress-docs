<script setup lang="ts">
import VueformSlider from "@vueform/slider";
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import SwitchSlider from "../../components/Base/SwitchSlider.vue";
import { computed, ref } from "vue";

const mode = ref("center");
const offset = ref(5);
const thickness = ref(10);
const modes = ["center", "in", "out"].map((mode) => ({
  title: mode,
}));

const offsetDisabled = computed(() => mode.value !== "out");
const linePosition = computed(() => {
  const _offset = offsetDisabled.value ? "" : ` ${offset.value}`;
  return `${mode.value}${_offset}`;
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <div>
        <switch-slider v-model="mode" :options="modes" mini :size="50" />
      </div>
      <label class="block my-4">
        Offset: {{ offset }}
        <vueform-slider
          v-model.number="offset"
          :disabled="offsetDisabled"
          class="example-code-slider mt-2 w-full"
          :min="0"
          :max="60"
        />
      </label>
      <label class="block my-4">
        Thickness: {{ thickness }}
        <vueform-slider
          v-model.number="thickness"
          class="example-code-slider mt-2 w-full"
          :min="0"
          :max="40"
        />
      </label>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size="150"
        :thickness="thickness"
        :empty-line-position="linePosition"
        :empty-thickness="30"
        empty-color-fill="#265cff"
        empty-color="rgba(230, 233, 240, 0.1)"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot
        name="code"
        :data="{ mode, emptyLinePosition: linePosition, progress }"
      >
      </slot>
    </template>
  </example-code>
</template>
