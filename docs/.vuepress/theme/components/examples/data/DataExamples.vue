<template>
  <div>
    <p>
      Like the following example demonstrates, almost any props can be specified
      for each circle that will override global props. Here we can see that
      yellow circle has its own gap property
    </p>
    <example-container>
      <template #default="{ progress, slider, loading, noData, determinate }">
        <label class="block mb-5">
          Gap
          <slider
            class=""
            :min="-10"
            :max="100"
            v-model.number="gap"
            :step="0.5"
          />
        </label>
        <v-e-p
          :progress="progress"
          :size="200"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :gap="gap"
          :data="data"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code" :progress="progress" :data="data" :gap="gap"> </slot>
      </template>
    </example-container>
    <p class="mt-16">
      Of course it is possible to specify
      <code><router-link to="./dot.md">dot</router-link></code> or have a
      <code><router-link to="./half.md">half</router-link></code> circle
    </p>
    <example-container>
      <template #default="{ progress, loading, noData, determinate }">
        <v-e-p
          :progress="progress"
          :size="200"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :data="data2"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code2" :progress="progress" :data="data2"> </slot>
      </template>
    </example-container>

    <p class="mt-16">
      It also applies to
      <code><router-link to="./dash.md">dash</router-link></code>,
      <code><router-link to="./loader.md">loader</router-link></code> and
      <code><router-link to="./animation.md">animation</router-link></code>
      properties
    </p>
    <example-container>
      <template #default="{ progress, loading, noData, determinate }">
        <v-e-p
          :progress="progress"
          :size="200"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :data="data3"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code3" :progress="progress" :data="data3"> </slot>
      </template>
    </example-container>

    <p class="mt-16">
      <code>data</code> enables us to create stunning loaders like these
    </p>
    <example-container :show-progress="false" :show-states="false">
      <template #default="{ progress, loading, noData, determinate }">
        <v-e-p
          :progress="progress"
          :size="200"
          :loading="true"
          :no-data="noData"
          :determinate="determinate"
          color="rgb(51,54,177)"
          empty-color="transparent"
          thickness="2"
          :gap="4"
          :data="data4"
        >
        </v-e-p>
        <v-e-p
          :progress="50"
          :size="200"
          :loading="false"
          :no-data="noData"
          :determinate="determinate"
          color="transparent"
          empty-color="transparent"
          :thickness="2"
          :gap="-4"
          dot="4 blue"
          :data="data5"
          :angle="angle"
        >
        </v-e-p>
        <v-e-p
          :progress="50"
          :size="200"
          :loading="false"
          :no-data="noData"
          :determinate="determinate"
          color="transparent"
          empty-color="transparent"
          :thickness="2"
          :gap="-4"
          dot="4 blue"
          :data="data6"
          :angle="angle"
          :half="true"
        >
        </v-e-p>
        <v-e-p
          :progress="50"
          :size="200"
          :loading="false"
          :no-data="noData"
          :determinate="determinate"
          color="blue"
          empty-color="transparent"
          :thickness="2"
          dot="4 blue"
          :data="data7"
          :gap="5"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code4" :progress="progress" :data="data4"> </slot>
        <slot
          name="code5"
          :progress="progress"
          :data="data5"
          :angle="angle"
        >
        </slot>
        <slot
          name="code6"
          :progress="progress"
          :data="data6"
        >
        </slot>
        <slot
          name="code7"
          :progress="progress"
          :data="data7"
        >
        </slot>
      </template>
    </example-container>

    <p class="mt-16">
      It is also important to mention that no property in <code>data</code> Objects is required.
      We can create circles by just passing an array of empty objects.
      But (global) <code><router-link to="./progress.md">progress</router-link></code> must still be set.
    </p>
    <example-container>
      <template #default="{ progress, loading, noData, determinate }">
        <v-e-p
          :progress="progress"
          :size="200"
          :loading="loading"
          :no-data="noData"
          :determinate="determinate"
          :data="data8"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code8" :progress="progress" :data="data8"> </slot>
      </template>
    </example-container>

    <p class="mt-16">
      Even almost real charts can be created. But this requires tricky manual calculations
      The following example is for demonstration purposes only and should not be taken too seriously.
      For such use cases, appropriate chart libraries should be used
    </p>
    <example-container>
      <template #default="{ progress, loading, noData, determinate }">
        <div class="flex gap-4">
          <v-e-p
            :progress="progress"
            :loading="loading"
            :no-data="noData"
            :determinate="determinate"
            :size="150"
            line="butt"
            :thickness="40"
            :gap="-40"
            :data="data9"
          >
          </v-e-p>
          <div class="">
            <div>
              <span class="chart-legend" style="background-color: #7B68EE"></span>
              <span>Data</span>
            </div>
            <div>
              <span class="chart-legend" style="background-color: #F08080"></span>
              <span>Data</span>
            </div>
            <div>
              <span class="chart-legend" style="background-color: LightSeaGreen"></span>
              <span>Data</span>
            </div>
            <div>
              <span class="chart-legend" style="background-color: #3CB371"></span>
              <span>Data</span>
            </div>
          </div>
        </div>
      </template>
      <template #code="{ progress }">
        <slot name="code8" :progress="progress" :data="data9"> </slot>
      </template>
    </example-container>
  </div>
</template>

<script>
import ExampleContainer from "../../Base/ExampleContainer/ExampleContainer";
import VEP from "../../Base/VEP";
import IntervalTask from "../../../../utils/intervalTask";
export default {
  name: "DataExamples",
  components: { VEP, ExampleContainer },
  data: () => ({
    gap: 10,
    data: [
      {
        color: "blue",
        thickness: 1,
      },
      {
        color: "red",
        emptyColor: "#F08080",
        thickness: 3,
      },
      {
        color: "green",
        thickness: 5,
        loading: true,
      },
      {
        gap: 30,
        color: "#FFD700",
        thickness: 7,
        reverse: true,
        determinate: true,
      },
    ],
    data2: [
      {
        dot: "20 rgb(220,220,220)",
      },
      {
        color: "Tomato",
        half: true,
        emptyColor: "rgba(255,160,122,0.5)",
      },
      {
        color: "MediumSeaGreen",
      },
    ],
    data3: [
      {
        dash: "strict 60 0.8",
      },
      {
        color: "Tomato",
        loading: true,
        loader: {
          color: "rgba(255,160,122,1)",
          duration: 500,
          lineMode: "in 10",
        },
      },
      {
        color: "MediumSeaGreen",
        animation: "loop 2000 1000",
      },
    ],
    data4: [
      {
        angle: -90,
      },
      {
        angle: -70,
      },
      {
        angle: -50,
      },
      {
        angle: -30,
      },
      {
        angle: -10,
      },
    ],
    data5Circles: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    data6Circles: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    data7Circles: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}],
    data8: [{}, {}, {}],
    data9: [
      {
        color: "#7B68EE",
        progress: 15
      },
      {
        color: "#F08080",
        emptyColor: "transparent",
        progress: 40,
        angle: -45
      },
      {
        color: "LightSeaGreen",
        emptyColor: "transparent",
        progress: 20,
        angle: 90
      },
      {
        color: "#3CB371",
        emptyColor: "transparent",
        progress: 31,
        angle: 160
      },
    ],
    intervalProgress: 0,
    angle: -90,
    intervals: [],
  }),
  computed: {
    data5() {
      return this.data5Circles.map((data, index) => ({
        ...data,
        progress: this.intervalProgress * (index + 1),
      }));
    },
    data6() {
      return this.data6Circles.map((data, index) => ({
        ...data,
        progress: this.intervalProgress * (index + 1),
      }));
    },
    data7() {
      return this.data6Circles.map((data, index) => ({
        ...data,
        progress: this.intervalProgress * (index + 1),
        angle: 90 + 15 * index,
      }));
    },
  },
  mounted() {
    const interval = new IntervalTask(() => {
      if (this.intervalProgress === 0) {
        this.intervalProgress = 10;
      } else {
        this.angle = this.angle + 360;
        this.intervalProgress = 0;
      }
    }, 900);
    this.intervals.push(interval)
    interval.run();
  },
  beforeUnmount() {
    this.intervals.forEach(interval => interval.stop())
  }
};
</script>

<style scoped lang="scss">
.chart-legend {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  margin-right: 10px;
}
</style>
