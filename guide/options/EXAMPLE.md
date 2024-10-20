<example-container >
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"></v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
