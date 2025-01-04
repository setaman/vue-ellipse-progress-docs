<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { computed, ref } from "vue";
import VueformSlider from "@vueform/slider";
import { Animation, Animations } from "../../types";
import SwitchSlider from "../../components/Base/SwitchSlider.vue";

const types = [
  Animations.default,
  Animations.rs,
  Animations.loop,
  Animations.bounce,
  Animations.reverse,
].map((type) => ({
  title: type,
}));
const type = ref(Animations.default);
const duration = ref(1000);
const delay = ref(400);

const animation = computed<Animation>(() => {
  const _duration = duration.value ? ` ${duration.value}` : "";
  const _delay = delay.value ? ` ${delay.value}` : "";
  return `${type.value}${_duration}${_delay}` as Animation;
});
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <switch-slider v-model="type" :size="70" :options="types" />
      <label class="block my-4">
        Duration: {{ duration }}
        <vueform-slider
          v-model.number="duration"
          class="example-code-slider mt-2 w-full"
          :min="0"
          :max="5000"
          :step="100"
        />
      </label>
      <label class="block my-4">
        delay: {{ delay }}
        <vueform-slider
          v-model.number="delay"
          class="example-code-slider mt-2 w-full"
          :min="0"
          :max="5000"
          :step="100"
        />
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :animation
        :size="150"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :animation :progress> </slot>
    </template>
  </example-code>
</template>
