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
          :min="-30"
          :max="30"
          v-model.number="offset"
          :disabled="disabled"
        />
      </label>
      <label class="block my-4">
        Thickness: {{ thickness }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="40"
          v-model.number="thickness"
        />
      </label>
      <v-e-p
        class="col-span-2"
        :progress="progress"
        :thickness="thickness"
        :line-mode="`${mode} ${offset}`"
        :empty-thickness="20"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :data="{ mode, offset, progress }"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import SwitchSlider from "../../components/Base/SwitchSlider";
export default {
  name: "LineMode",
  components: { SwitchSlider, VEP, ExampleContainer },
  data: () => ({
    mode: "center",
    offset: 5,
    thickness: 10,
    modes: ["center", "in", "in-over", "out", "out-over", "top", "bottom"],
  }),
  computed: {
    disabled() {
      return !["in", "out"].includes(this.mode);
    },
  },
};
</script>

<style scoped></style>
