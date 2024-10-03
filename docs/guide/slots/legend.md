# `legend`  <Badge type="warning" text="deprecated" vertical="middle" />

In this slot, you can put an additional element that you want to display beside the circle legend.
This is simply a legacy slot from the time when the [**`default`**](./default.md) slot did not exist yet.
It can be helpful in some situations, but is much less powerful.

### Usage 📜

```vue
<ve-progress :progress="50">
  <template #legend>
    <span>/150</span>
  </template>
</ve-progress>
```

### Examples

<example-container>
<template #default="{ loading, slider, noData, determinate }">
<v-e-p :progress="slider" :loading="loading"
        :no-data="noData"
        :determinate="determinate">
  <template #legend>
    <span> / 100</span>
  </template>
</v-e-p>
<v-e-p :progress="slider" :loading="loading"
        :no-data="noData"
        :determinate="determinate">
  <template #legend>
    <div> / 100</div>
  </template>
</v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}">
     <template #legend>
        <span> / 100</span>
     </template>
  </ve-progress>
  <ve-progress :progress="{{ progress }}">
     <template #legend>
        <div> / 100</div>
     </template>
  </ve-progress>
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
