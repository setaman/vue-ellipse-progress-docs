# Slots

- ### `default`

Use this scoped slot, if you want to customize the presentation of the circle legend and make a use of the animated counter,
so your formatting still animated. This works similar to the [`legendFormatter`](#legendformatter) and is just
an alternative way to provide a custom format. You can access animated counter properties through the scoped slot
props and adjust the presentation of the legend to your needs.

```vue
<ve-progress :progress="50">
  <template #default="{ counterTick }">
    <span style="font-weight: bold; font-size: 1.6rem; color: green;">
      {{ myFormatter(counterTick.currentValue) }}
    </span>
  </template>
</ve-progress>
```

- ### `legend`

In this slot you can put an additional element that you want to display beside the progress

- ### `legend-caption`
In this slot you can put any HTML and style it on your own. This slot is aligned below the progress.

###### Example: 📜

This code ...
```html
<ve-progress ....>
  
<template #legend>
  <span>/200</span>
</template>
<template #legend-caption>
  <p>TASKS DONE</p>
</template>
  
</ve-progress>
```
... produces following result. The slots are marked corresponding:

<img width="100" height="100" src="https://github.com/setaman/Bilder/blob/master/ellipse-slots.png" alt="slot example">
