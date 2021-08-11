# Usage

After you have [initialized](./installation.md) the component, you are ready to add circles to your app.
If you are satisfied with the default configuration, the following line of code is all you need,
[`progress`](./options/progress.md) is the only required property:

```vue
<ve-progress :progress="progress" />
```

All available options and their usage you can find below in the overview:

```vue
<ve-progress
  :progress="progress"
  :data="circles"
  :angle="-90"
  color="blue"
  :color-fill="colorFillGradient"
  empty-color="#8ec5fc"
  :empty-color-fill="emptyColorFillGradient"
  :size="300"
  :thickness="10"
  empty-thickness="10%"
  line-mode="in 10"
  line-position="out 10"
  empty-line-position="in"
  :hide-legend="false"
  :legend="180"
  :legend-formatter="
    ({ currentValue }) => new Intl.NumberFormat('de-DE').format(currentValue)
  "
  legend-class="legend-custom-style"
  dash="60 0.9"
  animation="reverse 700 400"
  :noData="false"
  :loading="false"
  :loader="{ color: 'green' }"
  font-color="white"
  :half="false"
  :gap="10"
  dot="10 blue"
  reverse
  font-size="5rem"
>

    <template #legend>
      <span>/200</span>
    </template>
    <template #legend-caption>
      <p>TASKS DONE</p>
    </template>  
</ve-progress>
```
