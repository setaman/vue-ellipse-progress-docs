<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <v-e-p
        class="my-circle"
        :progress="progress"
        :size="200"
        :loading="loading"
        :no-data="noData"
        line-mode="in"
        empty-color="transparent"
        :determinate="determinate"
        dot="10 gray"
      >
      </v-e-p>
      <v-e-p
        class="my-circle2"
        :progress="progress"
        :size="200"
        :loading="loading"
        :determinate="determinate"
        :no-data="noData"
        line-mode="in"
        :thickness="70"
        :empty-thickness="2"
        line="butt"
        color="Navy"
        :dot="{
          size: 70,
          backgroundColor: 'DarkCyan',
          width: '1px',
        }"
      >
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress"></slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";

export default {
  name: "Dot",
  components: { VEP, ExampleContainer },
};
</script>

<style lang="scss">
.my-circle {
  .ep-circle--progress__dot {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border: 2px gray solid;
      border-radius: 50%;
      right: -50%;
      top: -48%;
    }
  }
}
.my-circle2 {
  .ep-circle--progress__dot {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      bottom: 15%;
      left: 5px;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      border-radius: 50%;
      bottom: 15%;
      right: 5px;
    }
  }
}
</style>
