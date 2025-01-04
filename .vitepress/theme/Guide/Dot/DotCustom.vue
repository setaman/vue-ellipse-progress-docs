<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        line-mode="in"
        empty-color="transparent"
        dot="10 gray"
        class="my-circle"
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
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
        class="my-circle2"
      >
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress> </slot>
    </template>
  </example-code>
</template>
<style scoped lang="scss">
.my-circle {
  :deep(.ep-circle--progress__dot) {
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
  :deep(.ep-circle--progress__dot) {
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
