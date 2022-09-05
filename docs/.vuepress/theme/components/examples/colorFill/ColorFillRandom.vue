<template>
  <v-e-p :size="160" v-bind="$attrs" :color-fill="color" />
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import randomColor from "../../../../utils/randomColor";
import IntervalTask from "../../../../utils/intervalTask";

export default {
  name: "ColorFillRandom",
  components: { VEP, ExampleContainer },
  data: () => ({
    color: "blue",
    task: null,
  }),
  methods: {
    randomizeColor() {
      this.color = randomColor();
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
