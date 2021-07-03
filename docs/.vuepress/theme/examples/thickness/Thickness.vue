<template>
  <example-container :range="[0, 100]" :show-modes="false">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div class="border-2 border-solid border-indigo-600 inline-block">
        <v-e-p :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="slider" dot="20 white"/>
      </div>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
export default {
  name: "Thickness",
  components: {VEP, ExampleContainer},
}
</script>

<style scoped>

</style>
