# `thickness`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number\|String  |\>=0 as Number or percent value as String |"5%"     |

Is a Number >=0 or a String that defines the progress line thickness. If you set the value in percent as String, 
the thickness will be calculated in relation to **[`size`](./size.md)**.

###### Usage: 📜

```vue
<ve-progress :thickness="10" />
<ve-progress thickness="10%" />
```

### Examples

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="1">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="5">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="15">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :thickness="25">
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


With a value defined as a string, the thickness can be specified as a percentage. 
This way we can let the thickness of the line scale relative to the size:

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="100" thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="200" thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="300" thickness="10%"/>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :size="100" thickness="10%"/>
  <ve-progress :progress="50" :size="200" thickness="10%"/>
  <ve-progress :progress="50" :size="300" thickness="10%"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

In the following example you can see how the thickness of the progress line affects other parts of the circle. 
Move the slider to see the effect:

<Thickness/>
