<template>
  <example-container>
    <template #default="{ progress, loading, noData, determinate }">
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"
                     :size="150"
                     line-mode="in 30"
                     :empty-thickness="0"
        >
          <span slot="legend-caption">200</span>
        </ve-progress>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"
                     :size="150"
                     dot="25 gray"
        >
          <span slot="legend-caption">200</span>
        </ve-progress>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <ve-progress :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"
                     :size="150"
                     line-mode="out"
                     thickness="10%"
        >
          <span slot="legend-caption">200</span>
        </ve-progress>
      </div>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
export default {
  name: "SizeDependencies",
  components: {ExampleContainer}
}
</script>

<style lang="scss">
.svg {
  border: 2px red solid;
}
</style>
