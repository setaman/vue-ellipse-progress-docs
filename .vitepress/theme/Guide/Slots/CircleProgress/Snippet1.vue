<ve-progress :progress="50">
  <template #circle-progress="{ attrs }">
    <circle
      :r="attrs.radius"
      :cx="attrs.position"
      :cy="attrs.position"
      fill="transparent"
      :stroke="attrs.color"
      :stroke-width="attrs.thickness"
      :stroke-linecap="attrs.line"
      :stroke-dasharray="attrs.circumference"
      :style="attrs.styles"
    >
    </circle>
  </template>
</ve-progress>
