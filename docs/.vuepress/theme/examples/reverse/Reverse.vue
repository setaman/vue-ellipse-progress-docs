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
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import Icon from "../../components/Base/Icon";
import SvgIcon from "../../components/Base/SvgIcon";
export default {
  name: "Reverse",
  components: { SvgIcon, Icon, VEP, ExampleContainer },
  data: () => ({
    reverse: true,
  }),
};
</script>

<style scoped></style>
