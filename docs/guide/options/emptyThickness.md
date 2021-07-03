# `emptyThickness`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number\|String  |\>=0 as Number or percent value as String |"5%"     |

Is a Number >=0 or a String that defines the empty line thickness. If you set the value in percent as String, 
the thickness will be calculated in relation to **[`size`](./size.md)**.

::: tip
Make sure to take a look at **[`thickness`](./thickness.md)**, **[`lineMode`](./lineMode.md)**, **[`linePosition`](./linePostition.md)** 
and other properties to learn how you can create unique circles 
:::


###### Usage: 📜

```vue
<ve-progress :empty-thickness="10" />
<ve-progress empty-thickness="10%" />
```

### Examples

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :empty-thickness="1">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :empty-thickness="5">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :empty-thickness="15">
</v-e-p>
<v-e-p class="mr-2" size="160" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :empty-thickness="25">
</v-e-p>
</template>
<template #code>
<CodeGroup>
<CodeGroupItem >

```vue
<template>
  <ve-progress :progress="50" :empty-thickness="1"/>
  <ve-progress :progress="50" :empty-thickness="5"/>
  <ve-progress :progress="50" :empty-thickness="15"/>
  <ve-progress :progress="50" :empty-thickness="25"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>


With a value defined as a string, the empty line thickness can be specified as a percentage. 
This way we can let the thickness scale relative to the size:

<example-container class="mb-16">
<template #default="{ loading, slider, noData, determinate }">
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="100" empty-thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="200" empty-thickness="10%"/>
<v-e-p class="mr-2" :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :size="300" empty-thickness="10%"/>
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

In the following example you can see how the thickness of the empty line affects other parts of the circle. 
Move the slider to see the effect:

<example-container :range="[0, 100]" :show-modes="false">
    <template #default="{ progress, slider, loading, noData, determinate }">
      <div class="border-2 border-solid border-indigo-600 inline-block">
        <v-e-p :progress="slider" :loading="loading" :no-data="noData" :determinate="determinate" :empty-thickness="slider" dot="20 white"/>
      </div>
    </template>
</example-container>
