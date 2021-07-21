# `color`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| String \| Object  | any CSS color as String or Object to specify gradient |   "#3f79ff"   |

Defines the color of progress circle line. The property accepts any CSS color like `#123`, `rgba(230, 233, 240, 0.1)` 
or `lime` or an Object to define gradients.

The general scheme to define the gradient is defined like follows:

- `:color="{ colors [, radial ]}"`
    - `radial` - default `false`. Boolean that defines, whether the gradient is radial or linear
    - `colors` - array that contains the gradient colors as Objects `{ color: "#6546f7", offset: "10" [, opacity: 1] }`
    

###### Usage: 📜

```vue
<ve-progress color="#3f79ff" />
<ve-progress color="lime" />
<ve-progress color="rgba(230, 233, 240, 0.1)" />
<ve-progress :color="{
                radial: false,
                colors: [
                  { color: '#6546f7', offset: '0', opacity: 1 },
                  { color: 'lime', offset: '100', opacity: 0.6 }
                ]}" 
              />
```

### Examples

<example-container class="mb-16">
<template #default="{ progress, loading, slider, noData, determinate }">
<v-e-p class="mr-2" size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" color="DimGray"/>
<v-e-p class="mr-2" size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" color="#1ABC9C"/>
<v-e-p class="mr-2" size="160" :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate" color="rgba(255, 87, 51, 0.7)"/>
<color-random :progress="progress" :loading="loading" :no-data="noData" :determinate="determinate"/>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" color="DimGray"/>
  <ve-progress :progress="{{ progress }}" color="#1ABC9C"/>
  <ve-progress :progress="{{ progress }}" color="rgba(255, 87, 51, 0.7)"/>
</template>
```
</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

The examples below demonstrate how gradient colors can be defined. Make sure to switch circle states to see, what cool [loader](.(loader.md))
affects you can achieve with gradient colors.

<color-gradient class="mb-16">
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" state :color="gradient1"/>
  <ve-progress :progress="{{ progress }}" :color="gradient2"/>
  <ve-progress :progress="{{ progress }}" :color="gradient3"/>
</template>
<script>
  export default {
    data: () => ({
      gradient1: {
        colors: [
          {
            color: "#3498DB",
            offset: "0",
            opacity: 0.5
          },
          {
            color: "rgb(72, 201, 176)",
            offset: "25"
          },
          {
            color: "hsl(48, 89%, 60%, 0.2)",
            offset: "50"
          },
          {
            color: "Crimson",
            offset: "75"
          },
          {
            color: "#8A2BE2\t",
            offset: "100"
          }
        ]
      },
      gradient2: {
        radial: true,
        colors: [
          {
            color: "#3498DB",
            offset: "0",
            opacity: 0.5
          },
          {
            color: "rgb(72, 201, 176)",
            offset: "25"
          },
          {
            color: "hsl(48, 89%, 60%, 0.2)",
            offset: "50"
          },
          {
            color: "Crimson",
            offset: "75"
          },
          {
            color: "#8A2BE2",
            offset: "100"
          }
        ]
      },
    }),
}
</script>
```
</CodeGroupItem>
</CodeGroup>
</template>
</color-gradient>

The gradients give a lot of room for experimentation and you can achieve a lot of exciting effects with colors alone. 
The following examples give some inspiration:

<color-gradient-crazy>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :color="gradient1" :thickness="40"/>                                                       
  <ve-progress :progress="{{ progress }}" :color="gradient1" line="butt" :thickness="50"/>                                           
  <ve-progress :progress="{{ progress }}" :color="gradient3" line="round" :thickness="10" :empty-thickness="2"/>                     
  <ve-progress :progress="{{ progress }}" :color="gradient4" line="butt" line-mode="in-over" :thickness="100" :empty-thickness="2"/> 
  <ve-progress :progress="{{ progress }}" :color="gradient5" line="round" line-mode="out-over" :thickness="20" :empty-thickness="2"/>
  <ve-progress :progress="{{ progress }}" :color="gradient6" line="round" line-mode="out-over" :thickness="20" :empty-thickness="2"/>
  <ve-progress :progress="{{ progress }}" :color="gradient7" line="round" line-mode="out-over" :thickness="20" :empty-thickness="1"/>
  <ve-progress :progress="{{ progress }}" :color="gradient2" line="butt" :thickness="100" :empty-thickness="1"/>
  <ve-progress :progress="{{ progress }}" :color="gradient2" line="butt" :thickness="150" :empty-thickness="1"/>
</template>
<script>
  export default {
    data: () => ({
      gradient1: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "50",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.15",
        },
        {
          color: "#3260FC",
          offset: "70",
          opacity: "0.1",
        },
        {
          color: "#3260FC",
          offset: "90",
          opacity: "1",
        },
        {
          color: "#3260FC",
          offset: "60",
          opacity: "1",
        },
        {
          color: "#3260FC",
          offset: "0",
          opacity: "0",
        },
      ],
    },
    gradient2: {
      radial: true,
      colors: [
        {
          color: "#8A2BE2",
          offset: "0",
          opacity: 0.5,
        },
        {
          color: "#8A2BE2",
          offset: "98",
          opacity: 0.5,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 1,
        },
      ],
    },
    gradient3: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "96",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "98",
          opacity: 1,
        },
        {
          color: "#e6e9f0",
          offset: "99.9",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 1,
        },
      ],
    },
    gradient4: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "49",
          opacity: 1,
        },
        {
          color: "black",
          offset: "50",
          opacity: 0,
        },
        {
          color: "black",
          offset: "90",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "95",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0.2,
        },
      ],
    },
    gradient5: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "49",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "80",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
    gradient6: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "89",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "91",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "93",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "95",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "97",
          opacity: 0,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
    gradient7: {
      radial: true,
      colors: [
        {
          color: "#3260FC",
          offset: "88",
          opacity: 0,
        },
        {
          color: "#D4AC0D",
          offset: "90",
          opacity: 0,
        },
        {
          color: "#27AE60",
          offset: "93",
          opacity: 1,
        },
        {
          color: "#E74C3C",
          offset: "96",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "99",
          opacity: 1,
        },
        {
          color: "#3260FC",
          offset: "100",
          opacity: 0,
        },
      ],
    },
  }),
}
</script>
```
</CodeGroupItem>
</CodeGroup>
</template>
</color-gradient-crazy>
