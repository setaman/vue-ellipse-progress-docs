<Angle>
  <example-container>
    <template #default="{ progress, slider, loading, noData, determinate }">
      <label class="block my-4">
        Thickness: {{ angle }}
        <slider
          class="mt-3 w-full sm:w-1/2"
          :min="-720"
          :max="720"
          v-model.number="angle"
        />
      </label>
      <v-e-p
        class="col-span-2"
        :progress="progress"
        :angle="angle"
        :loading="loading"
        :no-data="noData"
        :determinate="determinate"
      />
    </template>
    <template #code="{ progress }">
      <slot name="code" :data="{ angle, progress }"> </slot>
    </template>
  </example-container>
</Angle>

<script>
import ExampleContainer from "../../components/Base/ExampleContainer/ExampleContainer";
import VEP from "../../components/Base/VEP";
import SwitchSlider from "../../components/Base/SwitchSlider";
export default {
  name: "Angle",
  components: { SwitchSlider, VEP, ExampleContainer },
  data: () => ({
    angle: -90,
  }),
};
</script>
