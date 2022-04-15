# `dot`

###### Animated: ✔️

| type    | values  | default |
|---------|---------|---------|
| Number \| String \| Object  | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` |   0      |

The `dot` property lets you define a point indicator at the end of the progress line. You have a lot of freedom to
customize the dot using a Number, descriptive String, or an Object to inject any CSS styles.

**Number**: `:dot="10"` - specifies a round dot with 10px width and height and default `#713dfd` color

**Descriptive string**: `dot="size [color]"` - `size` can be just a Number or a percent value like `5%`, the calculation
for percent values is similar to **[`thickness`](#thickness)** and depends on the **[`size`](#size)**. `color` is
optional and lets you quickly define the color of the dot. The order of properties is important for parsing the String,
and you can set the `color` only if the `size` is defined.

**Object**: `:dot="{ size: Number | String [, any CSS inline style with Vue syntax] }"` - to customize the point, you
can define the prop as an Object. `size` is required and can be just a Number or a String to define a percent value.
Only defining the prop as an Object you have the possibility to add any styles to the dot you want to, using Vue syntax
for defining inline styles, you can even completely break the positioning of the dot, if you need. You cannot override
the `height` of the dot since it is important for internal calculation and must be controllable.

### Usage 📜

```vue

<ve-progress :dot="10" />
<ve-progress dot="5% blue" />
<ve-progress :dot="{ size: 10, backgroundColor: 'red'}" />
```

### Examples

Let's start with simple cases

<example-container >
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    :dot="15">
</v-e-p>
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    dot="8 lightgray">
</v-e-p>
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    dot="2% lightgray">
</v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress :progress="{{ progress }}" :dot="15" />
  <ve-progress :progress="{{ progress }}" dot="8 lightgray" />
  <ve-progress :progress="{{ progress }}" dot="2% lightgray" />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

<div class="mt-16">
Here the dot becomes anything you wish
</div>

<example-container >
<template #default="{ loading, progress, slider, noData, determinate }">
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    line-mode="out"
    :empty-thickness="2"
    color="Navy"
    :dot="{
        size: 10,
        backgroundColor: 'transparent',
        border: '2px DEEPSKYBLUE solid',
      }">
</v-e-p>
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    line-mode="out"
    :thickness="50"
    :empty-thickness="2"
    line="butt"
    color="Navy"
    :dot="{
        size: 50,
        backgroundColor: 'DarkCyan',
        width: '4px',
      }">
</v-e-p>
<v-e-p 
    :progress="progress" 
    :loading="loading" 
    :no-data="noData" 
    :determinate="determinate"
    line-mode="in"
    :thickness="70"
    :empty-thickness="2"
    line="butt"
    :color="{
        radial: true,
        colors: [
        {
            color: 'blue',
            offset: 0,
        },
        {
            color: 'blue',
            offset: 47,
        },
        {
            color: 'transparent',
            offset: 48,
        },
        {
            color: 'transparent',
            offset: 100,
        }
    ]    
    }"
    :dot="{
        size: 70,
        backgroundColor: 'DarkCyan',
        width: '2px',
      }">
</v-e-p>
</template>
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    line-mode="out"
    :empty-thickness="2"
    color="Navy"
    :dot="{
        size: 10,
        backgroundColor: 'transparent',
        border: '2px DEEPSKYBLUE solid',
      }"
  />
  <ve-progress 
    :progress="{{ progress }}" 
    line-mode="out"
    :thickness="50"
    :empty-thickness="2"
    line="butt"
    color="Navy"
    :dot="{
        size: 50,
        backgroundColor: 'DarkCyan',
        width: '4px',
      }"
    />
  <ve-progress 
    :progress="{{ progress }}" 
    line-mode="in"
    :thickness="70"
    :empty-thickness="2"
    line="butt"
    :color="{
        radial: true,
        colors: [
        {
            color: 'blue',
            offset: 0,
        },
        {
            color: 'blue',
            offset: 47,
        },
        {
            color: 'transparent',
            offset: 48,
        },
        {
            color: 'transparent',
            offset: 100,
        }
    ]    
    }"
    :dot="{
        size: 70,
        backgroundColor: 'DarkCyan',
        width: '2px',
      }"
    />
</template>
```

</CodeGroupItem>
</CodeGroup>
</template>
</example-container>

<Dot class="mb-16">
<template #code="{ progress }">
<CodeGroup>
<CodeGroupItem >

```vue:no-v-pre
<template>
  <ve-progress 
    :progress="{{ progress }}" 
    line-mode="in"
    empty-color="transparent"
    :determinate="determinate"
    dot="10 gray"
  />
  <ve-progress 
    :progress="{{ progress }}" 
    line-mode="in"
    :thickness="70"
    :empty-thickness="2"
    line="butt"
    color="Navy"
    :dot="{
      size: 70,
      backgroundColor: 'DarkCyan',
      width: '1px',
    }"
  />
</template>
<style lang="scss">
.my-circle {
  .ep-circle--progress__dot {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 15px;
      height: 15px;
      background-color: transparent;
      border: 2px gray solid;
      border-radius: 50%;
      right: -50%;
      top: -48%;
    }
  }
}
.my-circle2 {
  .ep-circle--progress__dot {
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      bottom: 15%;
      left: 5px;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 70%;
      background-color: DarkCyan;
      border-radius: 50%;
      bottom: 15%;
      right: 5px;
    }
  }
}
</style>
```
</CodeGroupItem>
</CodeGroup>
</template>
</Dot>
