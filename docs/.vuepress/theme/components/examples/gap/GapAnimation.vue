<template>
  <example-container
    :show-states="false"
    :show-progress="false"
    :show-modes="false"
  >
    <template #default>
      <v-e-p
        :progress="100"
        :size="200"
        :gap="gap"
        :data="data"
        animation="default 1000 0"
      >
      </v-e-p>
      <v-e-p
        :progress="100"
        :size="200"
        :data="data2"
        :gap="0"
        animation="default 1000 0"
      >
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress" :gap="gap"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import IntervalTask from "../../../../utils/intervalTask.js";
export default {
  name: "GapAnimation",
  components: { VEP, ExampleContainer },
  data: () => ({
    gap: 10,
    data: [
      {
        thickness: 0,
      },
      {
        thickness: 1,
      },
      {
        thickness: 1,
      },
      {
        thickness: 1,
      },
      {
        thickness: 1,
      },
      {
        thickness: 1,
      },
      {
        thickness: 1,
      },
    ],
    data2: [
      {
        thickness: 1,
        gap: 20,
      },
      {
        thickness: 4,
      },
      {
        thickness: 4,
      },
      {
        thickness: 4,
      },
      {
        thickness: 4,
      },
      {
        thickness: 4,
      },
      {
        thickness: 4,
      },
    ],
  }),
  methods: {
    runAnimation() {
      this.runAnimation2();
      if (this.gap === 0) {
        this.gap = 100;
      } else {
        this.gap = 0;
      }
    },
    runAnimation2() {
      if (this.data2[1].gap === 20) {
        this.data2[1].gap = 100;
      } else {
        this.data2[1].gap = 20;
      }
      console.log(this.data2);
    },
  },
  mounted() {
    this.task = new IntervalTask(this.runAnimation, 1000);
    this.task.run();
  },
  beforeUnmount() {
    this.task.stop();
  },
};
</script>

<style scoped></style>
