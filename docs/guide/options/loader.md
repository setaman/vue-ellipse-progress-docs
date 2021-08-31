# `loader`

###### Animated: ✔️

| type      | values | default |
| --------- | ------ | ------- |
| Object    | { [thickness, color, lineMode, line, opacity ]}  |

With this option defined as Object you can customize the loading circle that is shown in the states
[loading](#loading) and [determinate](#determinate). Accepted properties are [`color`](#color), [`thickness`](#thickness), [`line`](#line),
[`lineMode`](#linemode) and `opactity`. `opacity` is specific for loading circle and can be any valid CSS opacity value. 
If the option is not specified, the loading circle replicates the progress circle with a 0.55 default value for `opacity`.

### Usage 📜

```vue
<ve-progress :loader="{ color: 'green', lineMode: 'in 10', opacity: 0.6 }" />
```

### Examples

<example-container preselectedState="Determinate">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" 
    size="160" 
    :progress="50" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :loader="{ color: '#F08080' }"    
></v-e-p>
<v-e-p class="mr-2" 
    size="160" 
    :progress="50" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :loader="{ color: 'MediumPurple', lineMode: 'in 10', opacity: 1, thickness: 4 }"    
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
    :loader="{ color: 'MediumPurple', lineMode: 'in 10', opacity: 1, thickness: 2 }"
  />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

