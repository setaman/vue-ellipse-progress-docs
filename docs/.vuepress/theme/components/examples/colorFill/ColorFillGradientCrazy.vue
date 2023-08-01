<template>
  <example-container>
    <template #default="{ progress, loading, slider, noData, determinate }">
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient1"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient2"
        color="#7579ff"
        empty-color="transparent"
        :thickness="5"
        :empty-thickness="3"
        lineMode="out 5"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient3"
        thickness="2"
        empty-color="transparent"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color="colorGradient"
        :color-fill="gradient4"
        line="butt"
        empty-color="#324c7e"
        thickness="46"
        emptyThickness="8"
        :size="180"
        dash="strict 60 0.8"
        lineMode="in"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient5"
        :empty-thickness="2"
      />
      <v-e-p
        class="mr-1"
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :color-fill="gradient4"
        :thickness="2"
        :empty-thickness="1"
        color="#7579ff"
        empty-color="#324c7e"
        dash="strict 60 0.8"
        lineMode="in-over"
      />
    </template>
    <template #code>
      <slot name="code"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
export default {
  name: "ColorFillGradientCrazy",
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
          color: "#754fc1",
          offset: "0",
          opacity: "0.3",
        },
        {
          color: "#366bfc",
          offset: "100",
          opacity: "0.3",
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
    gradient5: {
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
    gradient4: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.2",
        },
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
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "90",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "95",
          opacity: "0.1",
        },
        {
          color: "transparent",
          offset: "95",
          opacity: "0.1",
        },
      ],
    },
    colorGradient: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.0",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.0",
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
  }),
};
</script>

<style scoped></style>
