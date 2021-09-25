<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div>
        <switch-slider v-model="type" :options="types" mini :size="50" />
      </div>
      <label class="block my-4">
        Duration: {{ duration }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="5000"
          :step="100"
          v-model.number="duration"
        />
      </label>
      <label class="block my-4">
        Delay: {{ delay }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="5000"
          :step="100"
          v-model.number="delay"
        />
      </label>
      <v-e-p
        class="col-span-2"
        :progress="progress"
        :animation="`${type} ${duration} ${delay}`"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :data="{ progress, type, delay, duration }"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import SwitchSlider from "../../components/Base/SwitchSlider";
export default {
  name: "Animation",
  components: { SwitchSlider, VEP, ExampleContainer },
  data: () => ({
    type: "default",
    duration: 1000,
    delay: 400,
    types: ["default", "rs", "loop", "bounce", "reverse"],
  }),
  computed: {
    disabled() {
      return !["in", "out"].includes(this.mode);
    },
  },
};
</script>

<style scoped></style>
