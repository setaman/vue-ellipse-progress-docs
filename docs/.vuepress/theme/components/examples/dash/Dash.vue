<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div>
        <label>
          <input type="checkbox" v-model="strict" />
          strict
        </label>
      </div>
      <label class="block my-4">
        Count: {{ count }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="100"
          :step="1"
          v-model.number="count"
        />
      </label>
      <label class="block my-4">
        Spacing: {{ spacing }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="0"
          :max="strict ? 0.99 : 100"
          :step="strict ? 0.01 : 1"
          v-model.number="spacing"
        />
      </label>
      <v-e-p
        class="col-span-2"
        :progress="progress"
        :dash="dash"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :data="{ progress, dash }"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import SwitchSlider from "../../Base/SwitchSlider";
export default {
  name: "Dash",
  components: { SwitchSlider, VEP, ExampleContainer },
  data: () => ({
    type: "default",
    count: 60,
    spacing: 0.1,
    strict: true,
  }),
  watch: {
    strict() {
      if (this.strict) {
        this.spacing = 0.5;
      } else {
        this.spacing = 10;
      }
    },
  },
  computed: {
    dash() {
      const mode = this.strict ? "strict" : "";
      return `${mode} ${this.count} ${this.spacing}`;
    },
  },
};
</script>

<style scoped></style>
