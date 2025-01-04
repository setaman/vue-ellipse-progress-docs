<template>
  <ve-progress v-for="(c, i) in circles" v-bind="c" :progress="50" :key="i" />
</template>
<script lang="ts">
export const circle1 = {
  emptyThickness: 40,
  thickness: 5,
  emptyColor: {
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
};
export const circle2 = {
  line: "butt",
  lineMode: "in-over",
  emptyThickness: "100",
  thickness: "2",
  emptyColor: {
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
};
export const circle3 = {
  thickness: 2,
  emptyThickness: 20,
  line: "round",
  lineMode: "out-over",
  emptyColor: {
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
};
export const circle4 = {
  thickness: 10,
  emptyThickness: 20,
  line: "round",
  lineMode: "out-over",
  emptyColor: {
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
};
export const circle5 = {
  line: "round",
  lineMode: "out",
  thickness: 5,
  emptyThickness: 20,
  emptyColor: {
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
};
export const circle6 = {
  line: "butt",
  thickness: 4,
  emptyThickness: 100,
  color: "red",
  emptyColor: {
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
};

export default {
  setup() {
    return {
      circles: [circle1, circle2, circle3, circle4, circle5, circle6],
    };
  },
};
</script>
