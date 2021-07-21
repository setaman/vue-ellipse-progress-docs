# `emptyColor`

###### Animated: ✔️

| type    | values                                 | default |
|---------|----------------------------------------|---------|
| String \| Object  | any CSS color as String or Object to specify gradient |   "#3f79ff"   |

Defines the color of the empty circle line. The property accepts any CSS color like `#123`, `rgba(230, 233, 240, 0.1)` 
or `lime` or an Object to define gradients.

Below is the general scheme to define the gradient:

- `:color="{ colors [, radial ]}"`
    - `radial` - default `false`. Boolean that defines, whether the gradient is radial or linear
    - `colors` - array that contains the gradient colors as Objects `{ color: "#6546f7", offset: "10" [, opacity: 1] }`
    

### Usage 📜

```vue
<ve-progress empty-color="#3f79ff" />
<ve-progress empty-color="lime" />
<ve-progress empty-color="rgba(230, 233, 240, 0.1)" />
<ve-progress :empty-color="{
                radial: false,
                colors: [
                  { color: '#6546f7', offset: '0', opacity: 1 },
                  { color: 'lime', offset: '100', opacity: 0.6 }
                ]}" 
              />
```

### Examples
