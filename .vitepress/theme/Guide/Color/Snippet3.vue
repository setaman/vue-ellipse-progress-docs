<template>
  <ve-progress v-for="c in circles" v-bind="c" :progress="50" />
</template>
<script lang="ts">
export const circle1 = {
  thickness: 40,
  color: {
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
  thickness: 50,
  line: "butt",
  color: {
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
export const circle3 = {
  thickness: 10,
  emptyThickness: 2,
  line: "round",
  color: {
    radial: true,
    colors: [
      {
        color: "#3260FC",
        offset: "96",
        opacity: 1,
      },
      {
        color: "#3260FC",
        offset: "98",
        opacity: 1,
      },
      {
        color: "#e6e9f0",
        offset: "99.9",
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
export const circle4 = {
  thickness: 100,
  emptyThickness: 2,
  line: "butt",
  lineMode: "in-over",
  color: {
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
export const circle5 = {
  line: "round",
  lineMode: "out-over",
  thickness: 20,
  emptyThickness: 2,
  color: {
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
export const circle6 = {
  line: "round",
  lineMode: "out-over",
  thickness: 20,
  emptyThickness: 2,
  color: {
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
export const circle7 = {
  line: "round",
  lineMode: "out-over",
  thickness: 20,
  emptyThickness: 1,
  color: {
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
export const circle8 = {
  line: "butt",
  thickness: 100,
  emptyThickness: 1,
  color: {
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
export const circle9 = {
  line: "butt",
  thickness: 150,
  emptyThickness: 1,
  radial: true,
  color: {
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
export const circle10 = {
  dash: "strict 50 0.6",
  thickness: 10,
  emptyThickness: 10,
  radial: true,
  color: {
    radial: true,
    colors: [
      {
        color: "#3260FC",
        offset: "0",
        opacity: 0.15,
      },
      {
        color: "#3260FC",
        offset: "99",
        opacity: 0.15,
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
export const circle11 = {
  dash: "strict 50 0.8",
  thickness: 100,
  line: "butt",
  emptyThickness: 10,
  lineMode: "in-over",
  color: {
    radial: true,
    colors: [
      {
        color: "transparent",
        offset: "0",
        opacity: 0.15,
      },
      {
        color: "transparent",
        offset: "80",
        opacity: 0.15,
      },
      {
        color: "#3260FC",
        offset: "80",
        opacity: 0.15,
      },
      {
        color: "#3260FC",
        offset: "99",
        opacity: 0.15,
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
      circles: [
        circle1,
        circle2,
        circle3,
        circle4,
        circle5,
        circle6,
        circle7,
        circle8,
        circle9,
      ],
    };
  },
};
</script>
