# Options overview

The **[`progress`](./progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

> Also make sure to check **[slots](../slots/default)**

| Prop                                           | Type             | Values                                                                 | Default  |
|------------------------------------------------|------------------|------------------------------------------------------------------------|----------|
| **[`progress`](./progress)**                   | Number           | \[-100, 100]                                                           |          |
| **[`size`](./size)**                           | Number           | >=0                                                                    | 200      |
| **[`line`](./line)**                           | String           | "round \| square \| butt"                                              | "round"  |
| **[`thickness`](./thickness)**                 | Number \| String | \>=0 as Number or percent value as String                              | "5%"     |
| **[`emptyThickness`](./emptyThickness)**       | Number \| String | \>=0 as Number or percent value as String                              | "5%"     |
| **[`lineMode`](./lineMode)**                   | String           | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]" | "center" |
| **[`linePosition`](./linePosition)**           | String           | "center \| out \| in [offset]"                                         | "center" |
| **[`emptyLinePosition`](./emptyLinePosition)** | String           | "center \| out \| in [offset]"                                         | "center" |


[//]: # (| **[`color`]&#40;./color&#41;**                         | String \| Object           | any color as String or Object to specify gradient &#40;see details&#41;                                                                                     | "#3f79ff"          |)

[//]: # (| **[`colorFill`]&#40;./colorFill&#41;**                 | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |)

[//]: # (| **[`emptyColor`]&#40;./emptyColor&#41;**               | String \| Object           | same as `color`                                                                                                                                     | "#e6e9f0"          |)

[//]: # (| **[`emptyColorFill`]&#40;./emptyColorFill&#41;**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |)

[//]: # (| **[`hideLegend`]&#40;./hideLegend&#41;**               | Boolean                    |                                                                                                                                                     | true               |)

[//]: # (| **[`legend`]&#40;./legend&#41;**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                    |)

[//]: # (| **[`legendFormatter`]&#40;./legendFormatter&#41;**     | Function                   | Function that returns formatted value                                                                                                               |                    |)

[//]: # (| **[`animation`]&#40;./animation&#41;**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400" |)

[//]: # (| **[`loading`]&#40;./loading&#41;**                     | Boolean                    |                                                                                                                                                     | false              |)

[//]: # (| **[`loader`]&#40;./loader&#41;**                       | Object                     | { [thickness, color, lineMode, line, opacity ]}                                                                                                     |                    |)

[//]: # (| **[`determinate`]&#40;./determinate&#41;**             | Boolean                    |                                                                                                                                                     | false              |)

[//]: # (| **[`nodata`]&#40;./nodata&#41;**                       | Boolean                    |                                                                                                                                                     | false              |)

[//]: # (| **[`angle`]&#40;./angle&#41;**                         | Number                     | any Number                                                                                                                                          | -90                |)

[//]: # (| **[`fontSize`]&#40;./fontSize&#41;**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"             |)

[//]: # (| **[`fontColor`]&#40;./fontColor&#41;**                 | String                     | any valid CSS value                                                                                                                                 | "gray"             |)

[//]: # (| **[`legendClass`]&#40;./legendClass&#41;**             | String                     | any                                                                                                                                                 |                    |)

[//]: # (| **[`dash`]&#40;./dash&#41;**                           | String                     | "[strict] count spacing"                                                                                                                            |                    |)

[//]: # (| **[`half`]&#40;./half&#41;**                           | Boolean                    |                                                                                                                                                     | false              |)

[//]: # (| **[`gap`]&#40;./gap&#41;**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                  |)

[//]: # (| **[`dot`]&#40;./dot&#41;**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                  |)

[//]: # (| **[`reverse`]&#40;./reverse&#41;**                     | Boolean                    |                                                                                                                                                     | false              |)

[//]: # (| **[`data`]&#40;./data&#41;**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                    |)
