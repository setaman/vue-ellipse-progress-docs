# Options overview

<script setup>
  import CircleAnatomy from "../../.vitepress/theme/Guide/CircleAnatomy/CircleAnatomy.vue";
</script>

The **[`progress`](./progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

<CircleAnatomy/>
    

> Also make sure to check **[slots](../slots/default)**

| Prop                                           | Type                       | Values                                                                                                                                              | Default                  |
|------------------------------------------------|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|
| **[`progress`](./progress)**                   | Number                     | \[-100, 100]                                                                                                                                        |                          |
| **[`size`](./size)**                           | Number                     | >=0                                                                                                                                                 | 200                      |
| **[`line`](./line)**                           | String                     | "round \| square \| butt"                                                                                                                           | "round"                  |
| **[`thickness`](./thickness)**                 | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"                     |
| **[`emptyThickness`](./emptyThickness)**       | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"                     |
| **[`lineMode`](./lineMode)**                   | String                     | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]"                                                                              | "center"                 |
| **[`linePosition`](./linePosition)**           | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"                 |
| **[`emptyLinePosition`](./emptyLinePosition)** | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"                 |
| **[`color`](./color)**                         | String \| Object           | any color as String or Object to specify gradient (see details)                                                                                     | "#3f79ff"                |
| **[`colorFill`](./colorFill)**                 | String \| Object           | same as **[`color`](./color)**                                                                                                                      | "transparent"      <br/> |
| **[`hideLegend`](./hideLegend)**               | Boolean                    |                                                                                                                                                     | true                     |
| **[`legend`](./legend)**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                          |
| **[`loading`](./loading)**                     | Boolean                    |                                                                                                                                                     | false                    |
| **[`determinate`](./determinate)**             | Boolean                    |                                                                                                                                                     | false                    |
| **[`legendFormatter`](./legendFormatter)**     | Function                   | `(props: object) => string` Function returning formatted value  as string                                                                           |                          |
| **[`reverse`](./reverse)**                     | Boolean                    |                                                                                                                                                     | false                    |
| **[`angle`](./angle)**                         | Number                     | any Number                                                                                                                                          | -90                      |
| **[`half`](./half)**                           | Boolean                    |                                                                                                                                                     | false                    |
| **[`nodata`](./nodata)**                       | Boolean                    |                                                                                                                                                     | false                    |
| **[`dash`](./dash)**                           | String                     | "[strict] count spacing"                                                                                                                            |                          |
| **[`dot`](./dot)**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                        |


[//]: # (| **[`emptyColor`]&#40;./emptyColor&#41;**               | String \| Object           | same as `color`                                                                                                                                     | "#e6e9f0"          |)

[//]: # (| **[`emptyColorFill`]&#40;./emptyColorFill&#41;**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |)
[//]: # (| **[`animation`]&#40;./animation&#41;**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400" |)

[//]: # (| **[`loader`]&#40;./loader&#41;**                       | Object                     | { [thickness, color, lineMode, line, opacity ]}                                                                                                     |                    |)


[//]: # (| **[`fontSize`]&#40;./fontSize&#41;**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"             |)

[//]: # (| **[`fontColor`]&#40;./fontColor&#41;**                 | String                     | any valid CSS value                                                                                                                                 | "gray"             |)

[//]: # (| **[`legendClass`]&#40;./legendClass&#41;**             | String                     | any                                                                                                                                                 |                    |)



[//]: # (| **[`gap`]&#40;./gap&#41;**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                  |)



[//]: # (| **[`data`]&#40;./data&#41;**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                    |)
