# `line`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number  |"round \| square \| butt"               |"round   |

Is a String value from `round | square | butt`. Defines the progress circle line cap. 
Internally the CSS property `stroke-linecap` is used.

###### Usage: 📜

```vue
<ve-progress line="round" />
```

### Example

<example-container>
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="15" line="round">
<span slot="caption">round</span>
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="15" line="butt">
<span slot="caption">butt</span>
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="15" line="square">
<span slot="caption">square</span>
</v-e-p>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :thickness="15" line="round"/>
  <ve-progress :progress="50" :thickness="15" line="butt"/>
  <ve-progress :progress="50" :thickness="15" line="square"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>
