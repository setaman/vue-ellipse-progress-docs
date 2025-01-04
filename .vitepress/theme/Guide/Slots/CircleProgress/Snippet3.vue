<ve-progress empty-thickness="0" color="#1ABC9C" :progress="50">
  <template #circle-progress="{ attrs }">
    <polygon
      ref="polygon"
      :stroke-dashoffset="attrs.calculateProgressOffset(pathLength)"
      :stroke-dasharray="pathLength"
      points="10,10 190,100 10,190"
      style="fill: #7b68ee"
      :stroke-width="attrs.thickness"
      :stroke-linecap="attrs.line"
      :stroke="attrs.color"
      :style="attrs.styles"
    />
  </template>
</ve-progress>
<script setup lang="ts">
import { ref, useTemplateRef, watch } from "vue";

const polygon = useTemplateRef("polygon");
const pathLength = ref(0);

watch(polygon, () => {
  pathLength.value = polygon.value?.getTotalLength() ?? 0;
});
</script>
