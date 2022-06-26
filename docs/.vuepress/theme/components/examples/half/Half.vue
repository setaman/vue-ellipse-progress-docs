<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="half" />
        half
      </label>
      <v-e-p
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :half="half"
      >
      </v-e-p>
      <v-e-p
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :half="half"
        :angle="0"
      >
      </v-e-p>
      <v-e-p
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :half="half"
        :angle="90"
      >
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress" :half="half"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import Icon from "../../Base/Icon";
import SvgIcon from "../../Base/SvgIcon";
export default {
  name: "Half",
  components: { SvgIcon, Icon, VEP, ExampleContainer },
  data: () => ({
    half: true,
  }),
};
</script>

<style scoped></style>
