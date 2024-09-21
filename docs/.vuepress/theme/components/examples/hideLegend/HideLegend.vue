<template>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="hideLegend" />
        hide legend
      </label>
      <v-e-p
        class="mr-2"
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="slider"
        :hide-legend="hideLegend"
      >
      </v-e-p>
      <v-e-p
        class="mr-2"
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :legend="slider"
        :hide-legend="hideLegend"
      >
        <template #caption>
          <p class="m-0">
            i'm a caption and the legend is
            <b>{{ hideLegend ? "hidden" : "visible" }}</b>
          </p>
        </template>
      </v-e-p>
      <v-e-p
        class="mr-2"
        :progress="progress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        legend="0150"
        :hide-legend="hideLegend"
      >
        <template #caption>
          <p class="m-0 px-3">"legend"as circle legend</p>
        </template>
      </v-e-p>
      <v-e-p
        class="mr-2"
        progress="evilProgress"
        :size="180"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :hide-legend="hideLegend"
      >
        <template #caption>
          <p class="m-0 px-3">i have a very evil "progress" value</p>
        </template>
      </v-e-p>
    </template>
    <template #code="{ progress }">
      <slot name="code" :progress="progress" :hideLegend="hideLegend"> </slot>
    </template>
  </example-container>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer.vue";
import VEP from "../../Base/VEP.vue";
import Icon from "../../Base/Icon.vue";
import SvgIcon from "../../Base/SvgIcon.vue";
export default {
  name: "HideLegend",
  components: { SvgIcon, Icon, VEP, ExampleContainer },
  data: () => ({
    hideLegend: false,
  }),
};
</script>

<style scoped></style>
