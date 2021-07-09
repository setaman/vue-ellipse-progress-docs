<template>
  <example-container>
    <template #default="{ progress, loading, slider, noData, determinate }">
      <v-e-p class="mr-1" :size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :color="gradient1" thickness="10%"/>
      <v-e-p class="mr-1" :size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :color="gradient2" thickness="10%"/>
      <v-e-p class="mr-1" :size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :color="gradient3" thickness="30%"/>
      <v-e-p class="mr-1" :size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" :color="gradientRandom" thickness="30%"/>
    </template>
    <template #code>
      <slot name="code">

      </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import randomColor from  "../../../utils/randomColor";
import IntervalTask from  "../../../utils/intervalTask";
export default {
  name: "ColorGradient",
  components: {VEP, ExampleContainer},
  data: () => ({
    gradient1: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "#8A2BE2",
          offset: "100"
        }
      ]
    },
    gradient2: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "rgb(72, 201, 176)",
          offset: "25"
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50"
        },
        {
          color: "Crimson",
          offset: "75"
        },
        {
          color: "#8A2BE2",
          offset: "100"
        }
      ]
    },
    gradient3: {
      radial: true,
      colors: [
        {
          color: "#3498DB",
          offset: "0",
          opacity: 0.5
        },
        {
          color: "rgb(72, 201, 176)",
          offset: "25"
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50"
        },
        {
          color: "Crimson",
          offset: "75"
        },
        {
          color: "#8A2BE2",
          offset: "100"
        }
      ]
    },
    gradientRandom: {
      colors: [
        {
          color: "#3498DB",
          offset: "0",
        },
        {
          color: "hsl(48, 89%, 60%, 0.2)",
          offset: "50"
        },
        {
          color: "#8A2BE2",
          offset: "100"
        }
      ]
    },
  }),
  methods: {
    randomizeColor() {
      this.gradientRandom.colors = this.gradientRandom.colors.map(conf => ({...conf, color: randomColor()}))
    }
  },
  mounted() {
    this.task = new IntervalTask(this.randomizeColor);
    this.task.run();
  },
  beforeUnmount() {
    this.task.stop();
  }
}
</script>

<style scoped>

</style>
