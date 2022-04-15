# Options overview

The **[`progress`](#progress)** is the only required property, and you are ready to go with just following line:

```html
<ve-progress :progress="progress" />
```

> Also make sure to check **[slot options](#slot-options)**

| Prop                                          | Type                       | Values                                                                                                                                              | Default            |
| --------------------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **[`progress`](#progress)**                   | Number                     | \[-100, 100]                                                                                                                                        |                    |
| **[`size`](#size)**                           | Number                     | >=0                                                                                                                                                 | 200                |
| **[`line`](#line)**                           | String                     | "round \| square \| butt"                                                                                                                           | "round"            |
| **[`thickness`](#thickness)**                 | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`lineMode`](#linemode)**                   | String                     | "center \| out \| out-over \| in \| in-over \| top \| bottom [offset]"                                                                              | "center"           |
| **[`linePosition`](#lineposition)**           | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyLinePosition`](#emptylineposition)** | String                     | "center \| out \| in [offset]"                                                                                                                      | "center"           |
| **[`emptyThickness`](#emptythickness)**       | Number \| String           | \>=0 as Number or percent value as String                                                                                                           | "5%"               |
| **[`color`](#color)**                         | String \| Object           | any color as String or Object to specify gradient (see details)                                                                                     | "#3f79ff"          |
| **[`colorFill`](#colorfill)**                 | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`emptyColor`](#emptycolor)**               | String \| Object           | same as `color`                                                                                                                                     | "#e6e9f0"          |
| **[`emptyColorFill`](#emptycolorfill)**       | String \| Object           | same as `color`                                                                                                                                     | "transparent"      |
| **[`hideLegend`](#hideLegend)**               | Boolean                    |                                                                                                                                                     | true               |
| **[`legend`](#legend)**                       | Number \| String           | any number, accepts a `.` or `","` as decimals delimiter and simple formatting                                                                      |                    |
| **[`legendFormatter`](#legendformatter)**     | Function                   | Function that returns formatted value                                                                                                               |                    |
| **[`animation`](#animation)**                 | String                     | "default \| rs \| loop \| reverse \| bounce [duration delay]"                                                                                       | "default 1000 400" |
| **[`loading`](#loading)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`loader`](#loader)**                       | Object                     | { [thickness, color, lineMode, line, opacity ]}                                                                                                     |                    |
| **[`determinate`](#determinate)**             | Boolean                    |                                                                                                                                                     | false              |
| **[`noData`](#nodata)**                       | Boolean                    |                                                                                                                                                     | false              |
| **[`angle`](#angle)**                         | Number                     | any Number                                                                                                                                          | -90                |
| **[`fontSize`](#fontsize)**                   | String                     | any valid CSS value                                                                                                                                 | "1rem"             |
| **[`fontColor`](#fontsize)**                  | String                     | any valid CSS value                                                                                                                                 | "gray"             |
| **[`legendClass`](#legendclass)**             | String                     | any                                                                                                                                                 |                    |
| **[`dash`](#dash)**                           | String                     | "[strict] count spacing"                                                                                                                            |                    |
| **[`half`](#half)**                           | Boolean                    |                                                                                                                                                     | false              |
| **[`gap`](#gap)**                             | Number                     | any Number that defines the gap between multiple circles in pixel                                                                                   | 0                  |
| **[`dot`](#dot)**                             | String \| Number \| Object | Accepts size, color and other styles as Number, descriptive string `"size [color]"` or object `{size [, backgroundColor, widht, borderRadius ...]}` | 0                  |
| **[`reverse`](#reverse)**                     | Boolean                    |                                                                                                                                                     | false              |
| **[`data`](#data)**                           | Array                      | defines multiple circles, takes as values Objects with almost all props defined above                                                               |                    |

- ### `colorFill`

###### Animated: ✔️

Defines the fill color of the progress circle. Takes the same value as **[`color`](#color)**

<br>

- ### `emptyColorFill`

###### Animated: ✔️

Defines the fill color of the empty circle. Takes the same value as **[`color`](#color)**

<br>

- ### `fontSize`

###### Animated: ✔️

Is any valid CSS size value. It defines the font size of the circle legend. You will have to use **[`legendClass`](#legendClass)** if you want to apply more specific styles.

<br>

- ### `fontColor`

###### Animated: ✔️

Is any valid CSS color value. It defines the color of the circle legend. You will have to use **[`legendClass`](#legendClass)** if you want to apply more specific styles.

<br>

- ### `legendClass`

Adds class to the circles legend to give you the possibility to style it.

<br>

- ### `data`

You can specify 2 or more circles as Objects in an array as `data`. For each circle you can use almost every available property. It is not necessary to specify all properties, they will be merged with global props, the specified props will overwrite the global. The circles are rendered inside each other.

> ❗ Excluded props: **[`lineMode`](#lineMode)**, **[`emptyThickness`](#emptyThickness)**, **[`legend`](#legend)**. These properties will be ignored, if `data` is specified. The legend of this circle is also not shown.

###### Example: 📜

```js
<!-- this props are applied to all circles, if not overwritten in "data"-->
<ve-progress color="blue" animation="loop 500" ...  :data="data"/>

data: [
  {
    progress: 50, // required for each circle
    color: "red",  // will overwrite global progress color
    ...           // other options will be merged with global
  },
  {
    progress: 50, // required for each circle
    animation: "rs 1500 500"  // you can set almost any option that will be specific to this circle
  }
}
```

<img width="100" height="100" src="https://github.com/setaman/Bilder/blob/master/vue-ellipse-data.PNG" alt="multiple circles demo">
