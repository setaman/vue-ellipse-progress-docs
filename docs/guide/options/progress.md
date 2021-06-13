# `progress`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number  | [-100, 100]                            |         |

Progress property takes a Number value in the range \[-100, 100] (including **decimals**) and defines the filled area 
from progress circle line in percent. By default, `progress` is shown as the **legend** in the middle of the circle. 
`progress` is animated and counts up or down on any value changes with duration defined in
**[`animation.duration`](#animation)** property. A negative value can be used to fill the progress line counterclockwise.
Alternatively the same effect can be achieved with the [`reverse`](#reverse) property.

::: warning Progress and Legend
The `progress` is always used to fill the progress circle line, it should be always in the range [-100, 100] and
not valid Numbers lead to **[`noData`](#noData)** state. For advanced use cases please use **[`legend`](#legend)** 
and take a look at **[`legendFormatter`](#legendformatter)**.

If **[`legend`](#legend)** is defined the `progress` will **not** be displayed as the circle legend.
:::

###### Usage: 📜

```vue
<ve-progress :progress="50" />
```

### Basic Example

<ProgressBasic/>
