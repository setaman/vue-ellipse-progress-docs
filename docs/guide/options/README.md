# Options overview

The **[`progress`](#progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

> Also make sure to check **[slots](../slots/default.md)**

| Prop                                              | Type                       | Values                                                                                                                                              | Default            |
|---------------------------------------------------| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **[`progress`](./progress.md)**                   | Number                     | \[-100, 100]                                                                                                                                        |                    |
| **[`size`](./size.md)**                           | Number                     | >=0                                                                                                                                                 | 200                |
| **[`line`](./line.md)**                           | String                     | "round \| square \| butt"                                                                                                                           | "round"            |
| **[`thickness`](./thickness.md)**                 | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`lineMode`](./lineMode.md)**                   | String                     | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]"                                                                              | "center"           |
| **[`linePosition`](./linePosition.md)**           | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyLinePosition`](./emptyLinePosition.md)** | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyThickness`](./emptyThickness.md)**       | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`color`](./color.md)**                         | String \| Object           | any color as String or Object to specify gradient (see details)                                                                                     | "#3f79ff"          |
| **[`colorFill`](./colorFill.md)**                 | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`emptyColor`](./emptyColor.md)**               | String \| Object           | same as `color`                                                                                                                                     | "#e6e9f0"          |
| **[`emptyColorFill`](./emptyColorFill.md)**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`hideLegend`](./hideLegend.md)**               | Boolean                    |                                                                                                                                                     | true               |
| **[`legend`](./legend.md)**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                    |
| **[`legendFormatter`](./legendFormatter.md)**     | Function                   | Function that returns formatted value                                                                                                               |                    |
| **[`animation`](./animation.md)**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400" |
| **[`loading`](./loading.md)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`loader`](./loader.md)**                       | Object                     | { [thickness, color, lineMode, line, opacity ]}                                                                                                     |                    |
| **[`determinate`](./determinate.md)**             | Boolean                    |                                                                                                                                                     | false              |
| **[`nodata`](./nodata.md)**                       | Boolean                    |                                                                                                                                                     | false              |
| **[`angle`](./angle.md)**                         | Number                     | any Number                                                                                                                                          | -90                |
| **[`fontSize`](./fontSize.md)**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"             |
| **[`fontColor`](./fontColor.md)**                 | String                     | any valid CSS value                                                                                                                                 | "gray"             |
| **[`legendClass`](./legendClass.md)**             | String                     | any                                                                                                                                                 |                    |
| **[`dash`](./dash.md)**                           | String                     | "[strict] count spacing"                                                                                                                            |                    |
| **[`half`](./half.md)**                           | Boolean                    |                                                                                                                                                     | false              |
| **[`gap`](./gap.md)**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                  |
| **[`dot`](./dot.md)**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                  |
| **[`reverse`](./reverse.md)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`data`](./data.md)**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                    |
