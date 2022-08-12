# `loader`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Object    | {[ thickness, color, lineMode, line, opacity ]}  |

With this option defined as Object you can customize the loading circle that is shown in the states
[loading](./loading.md) and [determinate](./determinate.md). Accepted properties are [`color`](./color.md), [`thickness`](./thickness.md), [`line`](./line.md),
[`lineMode`](./linemode.md), `duration` and `opacity`. `duration` and `opacity` are specific for loading circle. Any valid CSS 
opacity value can be set as `opacity`. `duration` specifies the speed of the loader animation. If the loader option is not 
specified, the loading circle replicates the progress circle with a 0.55 default value for `opacity` and 1000 `duration`.

### Usage 📜

```vue
<ve-progress :loader="{ color: 'green', lineMode: 'in 10', opacity: 0.6, duration: 1200 }" />
```

### Examples

<example-container preselectedState="Determinate">
<template #default="{ progress, loading, slider, noData, determinate }">
<v-e-p class="mr-2" 
    :size="160" 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :loader="{ color: '#F08080' }"    
></v-e-p>
<v-e-p class="mr-2" 
    :size="160" 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :loader="{ color: 'MediumPurple', lineMode: 'in 10', opacity: 1, thickness: 4 }"    
></v-e-p>
<v-e-p class="mr-2" 
    :size="160" 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :loader="{ color: 'blue', lineMode: 'in 10', opacity: 0.7, thickness: 15, duration: 4000 }"    
></v-e-p>
</template>
<template #code="{ loading, progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    :loader="{ color: '#F08080' }"
  />
  
  <ve-progress 
    :progress="{{ progress }}" 
    :loader="{ color: 'MediumPurple', lineMode: 'in 10', opacity: 1, thickness: 4 }"
  />
  <ve-progress 
    :progress="{{ progress }}" 
    :loader="{ 
      color: 'blue', 
      lineMode: 'in 10', 
      opacity: 0.7, 
      thickness: 15,  
      duration: 2000 
    }"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

