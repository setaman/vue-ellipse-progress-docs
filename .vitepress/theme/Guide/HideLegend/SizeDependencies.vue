<script setup lang="ts">
import ExampleCode from "../../components/ExampleCode/ExampleCode.vue";
import Vep from "../../components/Vep.vue";
</script>

<template>
  <example-code init-mode="Result" hide-mode>
    <template #default="{ progress, loading, noData, determinate }">
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <vep
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="150"
          line-mode="in 30"
          :empty-thickness="0"
        >
          <template #default>
            <span>150</span>
          </template>
        </vep>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <vep
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="150"
          dot="25 gray"
        >
          <template #default>
            <span>150</span>
          </template>
        </vep>
      </div>
      <div class="inline-block border-2 border-solid border-indigo-600 m-2">
        <vep
          :progress="progress"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :size="150"
          line-mode="out"
          thickness="10%"
        >
          <template #default>
            <span>150</span>
          </template>
        </vep>
      </div>
    </template>
  </example-code>
</template>
