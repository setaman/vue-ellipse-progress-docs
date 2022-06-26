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
      <code><router-link to="./dash.md">dash</router-link></code
      >, <code><router-link to="./loader.md">loader</router-link></code> and
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
      <code>data</code> enables us to create stunning loader like this
    </p>
    <example-container>
      <template #default="{ progress, loading, noData, determinate }">
        <v-e-p
          :progress="progress"
          :size="150"
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
          :size="150"
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
          :reverse="reverse"
        >
        </v-e-p>
      </template>
      <template #code="{ progress }">
        <slot name="code4" :progress="progress" :data="data4"> </slot>
        <slot
          name="code5"
          :progress="progress"
          :data="data5"
          :reverse="reverse"
          :angle="angle"
        >
        </slot>
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
    intervalProgress: 0,
    reverse: false,
    angle: -90,
  }),
  computed: {
    data5() {
      return this.data5Circles.map((data, index) => ({
        ...data,
        progress: this.intervalProgress * (index + 1),
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
    }, 1000);
    interval.run();
  },
};
</script>

<style scoped></style>
