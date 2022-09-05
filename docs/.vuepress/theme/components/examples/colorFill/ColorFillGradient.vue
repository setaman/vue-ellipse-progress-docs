<template>
  <example-container>
    <template #default="{ progress, loading, slider, noData, determinate }">
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient1"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient2"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient3"
        line-mode="in 10"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradientRandom"
      />
    </template>
    <template #code="{ progress, state }">
      <slot name="code" :progress="progress" :state="state"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import randomColor from "../../../../utils/randomColor";
import IntervalTask from "../../../../utils/intervalTask";
export default {
  name: "ColorFillGradient",
  components: { VEP, ExampleContainer },
  data: () => ({
    gradient1: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "#8A2BE2",
          offset: "100",
        },
      ],
    },
    gradient2: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "rgb(72, 201, 176)",
          offset: "25",
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50",
        },
        {
          color: "Crimson",
          offset: "75",
        },
        {
          color: "#8A2BE2",
          offset: "100",
        },
      ],
    },
    gradient3: {
      radial: true,
      colors: [
        {
          color: "#3498DB",
          offset: "0",
          opacity: 0.5,
        },
        {
          color: "rgb(72, 201, 176)",
          offset: "25",
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50",
        },
        {
          color: "Crimson",
          offset: "75",
        },
        {
          color: "#8A2BE2",
          offset: "100",
        },
      ],
    },
    gradientRandom: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50",
        },
        {
          color: "#8A2BE2",
          offset: "100",
        },
      ],
    },
  }),
  methods: {
    randomizeColor() {
      this.gradientRandom.colors = this.gradientRandom.colors.map((conf) => ({
        ...conf,
        color: randomColor(),
      }));
    },
  },
  mounted() {
    this.task = new IntervalTask(this.randomizeColor);
    this.task.run();
  },
  beforeUnmount() {
    this.task.stop();
  },
};
</script>

<style scoped></style>
