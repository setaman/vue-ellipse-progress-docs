<template>
  <ve-progress v-for="c in circles" v-bind="c" :progress="50" />
</template>
<script lang="ts">
export const circle1 = {
  emptyColorFill: {
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
  color: "#7579ff",
  emptyColor: "transparent",
  thickness: 5,
  emptyThickness: 3,
  lineMode: "out 5",
  emptyColorFill: {
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
};
export const circle3 = {
  thickness: 2,
  emptyColor: "transparent",
  emptyColorFill: {
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
export const circle4 = {
  line: "butt",
  emptyColor: "#324c7e",
  thickness: 46,
  emptyThickness: 8,
  size: 180,
  dash: "strict 60 0.8",
  lineMode: "in",
  color: {
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
  emptyColorFill: {
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
};
export const circle5 = {
  emptyThickness: 2,
  emptyColorFill: {
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
export const circle6 = {
  thickness: 2,
  emptyThickness: 1,
  color: "#7579ff",
  emptyColor: "#324c7e",
  dash: "strict 60 0.8",
  lineMode: "in-over",
  emptyColorFill: {
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
};

export default {
  setup() {
    return {
      circles: [circle1, circle2, circle3, circle4, circle5, circle6],
    };
  },
};
</script>
