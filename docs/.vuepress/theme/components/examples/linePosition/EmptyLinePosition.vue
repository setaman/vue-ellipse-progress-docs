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
        empty-color-fill="#265cff"
        :empty-thickness="30"
        emptyColor="rgba(230, 233, 240, 0.1)"
        :progress="progress"
        :empty-line-position="`${mode} ${offset}`"
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
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import SwitchSlider from "../../Base/SwitchSlider.vue";
export default {
  name: "EmptyLinePosition",
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
