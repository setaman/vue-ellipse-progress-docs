<ve-progress :progress="50">
  <template #circle-progress="{ attrs }">
    <ellipse
      :cx="attrs.position"
      :cy="attrs.position"
      :rx="attrs.radius"
      :ry="attrs.radius"
      :stroke-dasharray="attrs.circumference"
      :stroke-dashoffset="attrs.strokeDashOffset"
      :stroke-width="attrs.thickness"
      :stroke="attrs.color"
      :stroke-linecap="attrs.line"
      :class="[attrs.class, attrs.animationClass]"
      fill="transparent"
      :style="attrs.styles"
    />
  </template>
</ve-progress>
