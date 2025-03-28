---
layout: doc
editLink: true
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';

const members = [
  {
    avatar: 'https://www.github.com/setaman.png',
    name: 'Sergej Atamantschuk',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/setaman' },
    ]
  },
]
</script>

# Maintainers
<VPTeamPage style="margin-top: 0">
  <VPTeamPageTitle style="padding-top: 0">
    <template #lead>
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>

## Development

Make sure to take a look at the [contribution](contribution.md) guide to be prepared to the maximum to contribute to this project.
This plugin is a usual Vue CLI project, and it is very easy to start with the development. 

## Requirements

+ Node.js >14.x.x
+ Vue >2.6.x/ >3
+ Modern browser

## Project initialization

Just clone the repo
and install all dependencies:

```
npm i
```

Then run the `prepare` script to initialize [husky](https://github.com/typicode/husky). husky will help you to ensure 
consistency across all your commits:
```
npm run prepare
```

Start the project and open the displayed link in your browser:
```
npm run serve
```
