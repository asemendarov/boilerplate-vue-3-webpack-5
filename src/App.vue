<template>
  <div class="content">
    <RouterView />
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/reset.scss';

html {
  font-size: 100PX;
}

body {
  font-size: 20px;

  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
.content {
  flex-grow: 1;
  overflow: auto;
  padding: 10px;
}
</style>
