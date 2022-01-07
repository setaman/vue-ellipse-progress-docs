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

- ### `dash`

###### Animated: ✔️

Descriptive string in form `"[strict] count spacing"` that adds dashed empty progress line. This property provides the optional `strict` mode. In this mode you can define the explicit number of dashes as `count` with the given relative `spacing` as number in range >= 0 and < 1. Without `strict` the default behavior of the SVG `stroke-dasharray` property is used, where the size and spacings of the dashes are defined.

###### Example: 📜

`<ve-progress dash="strict 60 0.5" />` - 60 dashes with 0.5 relative spacing

`<ve-progress dash="10 10" />` - 10 pixels big dashes with 10 pixels spacing, the number of dashes depends on the empty circle circumference

<img width="350px" src="https://github.com/setaman/Bilder/blob/master/ep_half_example.png" alt="half circle example"/>

<br>

- ### `gap`

###### Animated: ✔️

Defines the gap in pixels from one circle to the previous circle. It will be applied only if [`data`](#data) prop is used.

###### Example: 📜

```vue
<ve-progress :gap="10" />
```

<br>

- ### `dot`

###### Animated: ✔️

The dot property lets you define a point indicator at the end of the progress line. You have a lot of freedom to customize the dot using a Number, descriptive String, or an Object to inject any CSS styles.

**Number**: `:dot="10"` - specifies a round dot with 10px width and height and default `#713dfd` color

**Descriptive string**: `dot="size [color]"` - `size` can be just a Number or a percent value like `5%`, the calculation for percent values is similar to **[`thickness`](#thickness)** and depends on the **[`size`](#size)**. `color` is optional and lets you quickly define the color of the dot. The order of properties is important for parsing the String, and you can set the `color` only if the `size` is defined.

**Object**: `:dot="{ size: Number | String [, any CSS inline style with Vue syntax] }"` - to customize the point, you can define the prop as an Object. `size` is required and can be just a Number or a String to define a percent value. Only defining the prop as an Object you have the possibility to add any styles to the dot you want to, using Vue syntax for defining inline styles, you can even completely break the positioning of the dot, if you need. You cannot override the `height` of the dot since it is important for internal calculation and must be controllable.

###### Example: 📜

The examples will provide more clarity

```javascript
:dot="10" // just a Number defining size in pixel
dot="10" // the same as above
dot="10%" // 10% from the circle size will be converted to pixel
dot="5% red" // adds red dot
// defines same dot as above
:dot={
  size: "5%", // required
  backgroundColor: "red", // add any inline CSS using Vue syntax
  left: "10px", // you can even move the dot, but it is not recommended
}
```

<img width="100px" src="https://github.com/setaman/Bilder/blob/master/Anmerkung%202020-05-19%20220917.png" alt="dot example"/>

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
