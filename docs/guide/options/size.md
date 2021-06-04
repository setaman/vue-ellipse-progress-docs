# `size`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| Number  | >= 0                                   |   200   |

Defines the width and height of the circle in pixel. Specifically, the value defines the dimensions of the circle container, 
exact size of the circle circumference and diameter depends on the properties **[`lineMode`](#linemode)**, **[`thickness`](#thickness)**,
**[`emptyThickness`](#emptythickness)** and **[`dot`](#dot)**! The `size` property defines the absolut width and height the component
will take on the page.

::: tip
Check the **[`lineMode`](#linemode)**, **[`thickness`](#thickness)**, **[`emptyThickness`](#emptythickness)** and 
**[`dot`](#dot)** properties to understand how the progress and empty lines behaves depending on the different values. Also,
by default the **[`thickness`](#thickness)** and **[`emptyThickness`](#emptyThickness)** scale relative to the `size`.
:::

###### Usage: 📜

```vue
<ve-progress :size="200" />
```

### Basic Example

<SizeBasic/>

### Size depending calculations

The following examples demonstrates that the `size` property determines the outer boundaries of the component.
The internal calculations always adjust to the specified size, the circle lines always remain within the boundaries.

<SizeDependencies/>
