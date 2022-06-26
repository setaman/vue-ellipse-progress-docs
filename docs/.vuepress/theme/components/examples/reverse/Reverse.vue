<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="reverse" />
        reverse
      </label>
      <v-e-p
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :reverse="reverse"
      >
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress" :reverse="reverse"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import Icon from "../../Base/Icon";
import SvgIcon from "../../Base/SvgIcon";
export default {
  name: "Reverse",
  components: { SvgIcon, Icon, VEP, ExampleContainer },
  data: () => ({
    reverse: true,
  }),
};
</script>

<style scoped></style>
