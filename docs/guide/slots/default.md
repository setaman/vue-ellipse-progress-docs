# `default` <Badge type="tip" text="1.x" vertical="middle" />

Use this scoped slot, if you want to customize the presentation of the circle legend and make a use of the animated counter,
so your formatting still animated. This works similar to the [`legendFormatter`](#legendformatter) and is just
an alternative way to provide a custom format. You can access animated counter properties through the scoped slot
props and adjust the presentation of the legend to your needs.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #default="{ counterTick }">
    <div>
      {{ counterTick.currentValue }}
    </div>
  </template>
</ve-progress>
```

### Examples

There are really no limits and you can customize the appearance of the legend as you like. Here are a few examples for the beginning:

<default-slot>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50">
    <template #default="{ counterTick }">
      <div>
        <span>i can</span> <br />
        <span>put</span>
        <b style="color: #2d68fc; font-size: 1.5rem">
          {{ counterTick.currentValue }}
        </b>
        <span>anything</span><br />
        <span>here</span>
      </div>
    </template>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</default-slot>

<default-slot-colored class="mb-16">
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50">
    <template #default="{ counterTick: { currentValue } }">
      <div :style="{ color: determineColor(currentValue), fontSize: '2rem' }">
        <span>
          {{
            new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "EUR",
            }).format(currentValue)
          }}
        </span>
      </div>
    </template>
  </ve-progress>

  <ve-progress :progress="50">
    <template #default="{ counterTick }">
      <span>
        <span class="mr-2" style="font-size: 0.9rem">WON</span>
        <b style="font-size: 2rem">{{ counterTick.currentValue }}</b>
        /
      </span>
      <span>20</span>
      <span class="ml-1" style="font-size: 0.9rem">PLAYED</span>
    </template>
    <template #legend-caption>
      <span>Manchester United</span>
    </template>
  </ve-progress>
</template>
<script>
export default {
  name: "Example",
  data: () => ({
    colorSteps: {
      20: "RED",
      40: "LIGHTCORAL",
      60: "DARKORANGE",
      80: "PALEGOLDENROD",
      100: "SPRINGGREEN",
    },
  }),
  methods: {
    determineColor(value) {
      const progress = (value * 100) / 1000;
      const closest = [20, 40, 60, 80, 100].reduce((prev, curr) =>
        Math.abs(curr - progress) < Math.abs(prev - progress) ? curr : prev
      );
      return this.colorSteps[closest];
    },
  },
};
</script>
```

</CodeGroupItem>
</CodeGroup>
</template>
</default-slot-colored>
