<template>
  <ve-progress :progress="50">
    <template #default="{ counterTick }">
      <div>
        <span>i can</span> <br />
        <span>put </span>
        <b style="color: #2d68fc; font-size: 1.5rem">
          {{ counterTick.currentValue }}
        </b>
        <span> anything</span><br />
        <span>here</span>
      </div>
    </template>
  </ve-progress>
</template>
