<template>
  <example-container>
    <template #default="{ progress, loading, slider, noData, determinate }">
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient1"
        :empty-thickness="40"
        :thickness="5"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient2"
        line="butt"
        line-mode="in-over"
        :empty-thickness="100"
        :thickness="2"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient3"
        line="round"
        line-mode="out-over"
        :empty-thickness="20"
        :thickness="2"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient4"
        line="round"
        line-mode="out-over"
        :empty-thickness="20"
        :thickness="10"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient5"
        line="round"
        line-mode="out"
        :empty-thickness="20"
        :thickness="5"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :empty-color="gradient6"
        color="red"
        line="butt"
        :empty-thickness="100"
        :thickness="4"
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
export default {
  name: "EmptyColorGradientCrazy",
  components: { VEP, ExampleContainer },
  data: () => ({
    gradient1: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.1",
        },
        {
          color: "#3260FC",
          offset: "90",
          opacity: "1",
        },
        {
          color: "#3260FC",
          offset: "60",
          opacity: "1",
        },
        {
          color: "#3260FC",
          offset: "0",
          opacity: "0",
        },
      ],
    },
    gradient2: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "49",
          opacity: 1,
        },
        {
          color: "black",
          offset: "50",
          opacity: 0,
        },
        {
          color: "black",
          offset: "90",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "95",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0.2,
        },
      ],
    },
    gradient3: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "49",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "80",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
    gradient4: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "89",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "91",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "93",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "95",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "97",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
    gradient5: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "88",
          opacity: 0,
        },
        {
          color: "#D4AC0D",
          offset: "90",
          opacity: 0,
        },
        {
          color: "#27AE60",
          offset: "93",
          opacity: 1,
        },
        {
          color: "#E74C3C",
          offset: "96",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
    gradient6: {
      radial: true,
      colors: [
        {
          color: "#8A2BE2",
          offset: "0",
          opacity: 0.5,
        },
        {
          color: "#8A2BE2",
          offset: "98",
          opacity: 0.5,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 1,
        },
      ],
    },
  }),
};
</script>

<style scoped></style>
