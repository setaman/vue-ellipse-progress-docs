# `legend-caption`

In this slot you can put any HTML and style it on your own. This slot is aligned below the legend.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #legend-caption>
    <div>
      Some caption
    </div>
  </template>
</ve-progress>
```

### Examples

<example-container :range="[0, 200]">
<template #default="{ loading, slider, progress, noData, determinate }">
<v-e-p :progress="progress" :legend="slider" :loading="loading"
        :no-data="noData"
        :determinate="determinate">
  <template #legend>
    <span> /200</span>
  </template>
  <template #caption>
    <div>Tasks Done</div>
  </template>
</v-e-p>
</template>
<template #code="{ progress, slider }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :legend="{{ slider }}">
    <template #legend>
      <span> /200</span>
    </template>
    <template #caption>
      <div>Tasks Done</div>
    </template>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
