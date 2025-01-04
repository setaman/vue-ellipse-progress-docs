<ve-progress :loader="{ color: '#F08080' }" :progress="50" />
<ve-progress
  :progress="50"
  :loader="{
    color: 'MediumPurple',
    lineMode: 'in 10',
    opacity: 1,
    thickness: 4,
    duration: 4000,
  }"
  :progress="50"
/>
<ve-progress
  :loader="{
    color: {
      radial: true,
      colors: [
        {
          color: '#3260FC',
          offset: '49',
          opacity: 1,
        },
        {
          color: '#3260FC',
          offset: '80',
          opacity: 1,
        },
        {
          color: '#3260FC',
          offset: '100',
          opacity: 0,
        },
      ],
    },
    opacity: 1,
    thickness: 15,
  }"
  :progress="50"
/>
