# Options overview

The **[`progress`](./progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

> Also make sure to check **[slots](../slots/default)**

| Prop                                              | Type                       | Values                                                                                                                                              | Default            |
|---------------------------------------------------| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **[`progress`](./progress)**                   | Number                     | \[-100, 100]                                                                                                                                        |                    |
| **[`size`](./size)**                           | Number                     | >=0                                                                                                                                                 | 200                |
| **[`line`](./line)**                           | String                     | "round \| square \| butt"                                                                                                                           | "round"            |
| **[`thickness`](./thickness)**                 | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`lineMode`](./lineMode)**                   | String                     | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]"                                                                              | "center"           |
| **[`linePosition`](./linePosition)**           | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyLinePosition`](./emptyLinePosition)** | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyThickness`](./emptyThickness)**       | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`color`](./color)**                         | String \| Object           | any color as String or Object to specify gradient (see details)                                                                                     | "#3f79ff"          |
| **[`colorFill`](./colorFill)**                 | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`emptyColor`](./emptyColor)**               | String \| Object           | same as `color`                                                                                                                                     | "#e6e9f0"          |
| **[`emptyColorFill`](./emptyColorFill)**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`hideLegend`](./hideLegend)**               | Boolean                    |                                                                                                                                                     | true               |
| **[`legend`](./legend)**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                    |
| **[`legendFormatter`](./legendFormatter)**     | Function                   | Function that returns formatted value                                                                                                               |                    |
| **[`animation`](./animation)**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400" |
| **[`loading`](./loading)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`loader`](./loader)**                       | Object                     | { [thickness, color, lineMode, line, opacity ]}                                                                                                     |                    |
| **[`determinate`](./determinate)**             | Boolean                    |                                                                                                                                                     | false              |
| **[`nodata`](./nodata)**                       | Boolean                    |                                                                                                                                                     | false              |
| **[`angle`](./angle)**                         | Number                     | any Number                                                                                                                                          | -90                |
| **[`fontSize`](./fontSize)**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"             |
| **[`fontColor`](./fontColor)**                 | String                     | any valid CSS value                                                                                                                                 | "gray"             |
| **[`legendClass`](./legendClass)**             | String                     | any                                                                                                                                                 |                    |
| **[`dash`](./dash)**                           | String                     | "[strict] count spacing"                                                                                                                            |                    |
| **[`half`](./half)**                           | Boolean                    |                                                                                                                                                     | false              |
| **[`gap`](./gap)**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                  |
| **[`dot`](./dot)**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                  |
| **[`reverse`](./reverse)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`data`](./data)**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                    |
