<template>
  <div class="site-carcass">
    <Menu class="site-carcass__menu" />
    <div class="site-carcass__container"><Header /> <Nuxt /></div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.site-carcass {
  display: flex;
  min-height: 100%;
  &__menu {
    border-right: 1px solid #aaa;
    width: 170px;
  }
  &__container {
    width: 100%;
    padding: 0 25px;
  }
}
</style>
