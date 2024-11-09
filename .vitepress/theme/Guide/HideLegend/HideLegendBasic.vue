<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
import { ref } from "vue";

const size = 150;
const hideLegend = ref(false);
</script>

<template>
  <example-code>
    <template #default="{ progress, loading, noData, determinate }">
      <label class="block mb-5">
        <input type="checkbox" v-model="hideLegend" />
        hide legend
      </label>

      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :hide-legend
      >
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :hide-legend
      >
        <template #legend-caption>
          <p class="text-xs" style="line-height: 1rem; margin: 0">
            i'm a caption and the legend is
            <b>{{ hideLegend ? "hidden" : "visible" }}</b>
          </p>
        </template>
      </vep>
      <vep
        :progress="progress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :hide-legend
        legend="0150"
      >
        <template #legend-caption>
          <p class="text-xs" style="line-height: 1rem; margin: 0">
            <a href="/guide/options/legend">legend</a> as circle legend
          </p>
        </template>
      </vep>
      <vep
        progress="evilProgress"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
        :size
        :hide-legend
        legend="0150"
      >
        <template #legend-caption>
          <p class="text-xs" style="line-height: 1rem; margin: 0">
            i have a very evil "progress" value
          </p>
        </template>
      </vep>
    </template>
    <template #code="{ progress }">
      <slot name="code" :hide-legend :progress> </slot>
    </template>
  </example-code>
</template>
