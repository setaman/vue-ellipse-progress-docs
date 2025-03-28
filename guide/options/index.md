---
pageClass: props-docs
---

# Options overview

The **[`progress`](./progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

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
| **[`emptyColor`](./emptyColor)**               | String \| Object           | same as **[`color`](./color)**                                                                                                                      | "#e6e9f0"                |
| **[`hideLegend`](./hideLegend)**               | Boolean                    |                                                                                                                                                     | true                     |
| **[`legend`](./legend)**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                          |
| **[`loading`](./loading)**                     | Boolean                    |                                                                                                                                                     | false                    |
| **[`determinate`](./determinate)**             | Boolean                    |                                                                                                                                                     | false                    |
| **[`legendFormatter`](./legendFormatter)**     | Function                   | `(props: object) => string` Function returning formatted value  as string                                                                           |                          |
| **[`reverse`](./reverse)**                     | Boolean                    |                                                                                                                                                     | false                    |
| **[`angle`](./angle)**                         | Number                     | any Number                                                                                                                                          | -90                      |
| **[`half`](./half)**                           | Boolean                    |                                                                                                                                                     | false                    |
| **[`noData`](./noData)**                       | Boolean                    |                                                                                                                                                     | false                    |
| **[`dash`](./dash)**                           | String                     | "[strict] count spacing"                                                                                                                            |                          |
| **[`dot`](./dot)**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                        |
| **[`animation`](./animation)**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400"       |
| **[`loader`](./loader)**                       | Object                     | { \[thickness, color, lineMode, line, opacity \]}                                                                                                   |                          |
| **[`fontColor`](./fontColor)**                 | String                     | any valid CSS value                                                                                                                                 | "gray"                   |
| **[`fontSize`](./fontSize)**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"                   |
| **[`legendClass`](./legendClass)**             | String                     | any                                                                                                                                                 |                          |
| **[`emptyColorFill`](./emptyColorFill)**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"            |
| **[`gap`](./gap)**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                        |
| **[`data`](./data)**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                          |
