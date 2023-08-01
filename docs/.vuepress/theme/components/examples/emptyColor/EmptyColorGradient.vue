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
        :empty-color="gradient1"
        empty-thickness="10%"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient2"
        empty-thickness="10%"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient3"
        empty-thickness="30%"
      />
      <v-e-p
        class="mr-1"
        :size="160"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradientRandom"
        empty-thickness="30%"
      />
    </template>
    <template #code="{ progress, state }">
      <slot name="code" :progress="progress" :state="state"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import randomColor from "../../../../utils/randomColor";
import IntervalTask from "../../../../utils/intervalTask";
export default {
  name: "EmptyColorGradient",
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
