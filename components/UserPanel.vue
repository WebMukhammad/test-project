<template>
  <nav class="user-panel">
    <div class="user-panel__avatar"></div>
    <div class="user-panel__info">
      <div class="user-panel__name">Alexander C.</div>
      <div class="user-panel__place">Администратор</div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'UserPanel',
  props: {}
}
</script>

<style lang="postcss" scoped>
.user-panel {
  display: flex;
  &__avatar {
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50%;
    margin-right: 5px;
    flex-shrink: 0;
  }
  &__name {
    font-weight: 500;
  }
  &__place {
    font-size: 13px;
    color: #888;
  }
}
</style>
