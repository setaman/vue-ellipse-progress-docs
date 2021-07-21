<example-container>
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="20,50" font-size="1.6rem"/>
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="01000" font-size="1.6rem"/>
<v-e-p class="mr-2" size="160" :progress="50" :loading="loading" :no-data="noData" :determinate="determinate" legend="0050,51100" font-size="1.6rem"/>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="50" legend="20,50"/>
  <ve-progress :progress="50" legend="01000"/>
  <ve-progress :progress="50" legend="0050,51100"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
