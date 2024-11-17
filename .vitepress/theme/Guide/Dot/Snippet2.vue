<ve-progress
  :progress="50"
  line-mode="out"
  :empty-thickness="2"
  color="Navy"
  :dot="{
    size: 10,
    backgroundColor: 'transparent',
    border: '2px DEEPSKYBLUE solid',
  }"
/>
<ve-progress
  :progress="50"
  line-mode="out"
  :thickness="50"
  :empty-thickness="2"
  line="butt"
  color="Navy"
  :dot="{
    size: 50,
    backgroundColor: 'DarkCyan',
    width: '4px',
  }"
/>
<ve-progress
  :progress="50"
  line-mode="in"
  :thickness="70"
  :empty-thickness="2"
  line="butt"
  :color="{
    radial: true,
    colors: [
      {
        color: 'blue',
        offset: 0,
      },
      {
        color: 'blue',
        offset: 47,
      },
      {
        color: 'transparent',
        offset: 48,
      },
      {
        color: 'transparent',
        offset: 100,
      },
    ],
  }"
  :dot="{
    size: 70,
    backgroundColor: 'DarkCyan',
    width: '2px',
  }"
/>
