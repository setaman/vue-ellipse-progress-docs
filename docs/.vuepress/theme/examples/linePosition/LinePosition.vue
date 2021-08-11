<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div>
        <switch-slider v-model="mode" :options="modes" mini :size="50" />
      </div>
      <label class="block my-4">
        Offset: {{ offset }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="60"
          v-model.number="offset"
          :disabled="disabled"
        />
      </label>
      <v-e-p
        color-fill="#2a2c3c"
        :progress="progress"
        :line-position="`${mode} ${offset}`"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
    <template #code="{ progress }">
      <slot
        name="code"
        :data="{ mode, offset: mode === 'out' ? ' ' + offset : '', progress }"
      >
      </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import SwitchSlider from "../../components/Base/SwitchSlider";
export default {
  name: "LinePosition",
  components: { SwitchSlider, VEP, ExampleContainer },
  data: () => ({
    mode: "center",
    offset: 5,
    thickness: 10,
    modes: ["center", "in", "out"],
  }),
  computed: {
    disabled() {
      return !["out"].includes(this.mode);
    },
  },
};
</script>

<style scoped></style>
