<template>
  <nav class="menu">
    <div class="menu__circle"></div>
    <div class="menu__list">
      <nuxt-link to="/" class="menu__list-link">
        <img src="~@/assets/img/icon/package.svg" alt="" class="menu__list-link-icon" />
        Опросы
      </nuxt-link>
      <nuxt-link to="/" class="menu__list-link">
        <img src="~@/assets/img/icon/package.svg" alt="" class="menu__list-link-icon" />
        Пользователи
      </nuxt-link>
      <nuxt-link to="/" class="menu__list-link">
        <img src="~@/assets/img/icon/package.svg" alt="" class="menu__list-link-icon" />
        Черные списки
      </nuxt-link>
      <nuxt-link to="/" class="menu__list-link">
        <img src="~@/assets/img/icon/package.svg" alt="" class="menu__list-link-icon" />
        Колл-центр
      </nuxt-link>
    </div>
    <div class="menu__question">?</div>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {}
}
</script>

<style lang="postcss" scoped>
.menu {
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  &__circle {
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 50%;
    margin: 0 auto 30px;
  }
  &__list {
    margin-bottom: 20px;
    &-link {
      display: block;
      text-align: center;
      text-decoration: none;
      color: #000;
      padding: 20px 5px;
      border: 1px solid transparent;
      border-radius: 5px;
      &:hover {
        border: 1px solid green;
      }
      &-icon {
        display: block;
        margin: 0 auto 5px;
        width: 30px;
      }
    }
  }
  &__question {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 50%;
    color: green;
    margin: auto auto 0;
  }
}
</style>
