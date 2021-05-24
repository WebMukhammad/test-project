<template>
  <div class="header">
    <!-- по сути можно разбить на компонент, но нет на это времени -->
    <label class="search-input">
      <input type="search" class="search-input__input" placeholder="Поиск по системе" />
      <div class="search-input__icon icon-search icon-search_grey"></div>
    </label>
    <UserPanel />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {}
}
</script>

<style lang="postcss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 20px;
}

.search-input {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 14px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  max-width: 420px;
  &__input {
    width: 100%;
    height: 37px;
    border: none;
    padding: 5px 0;
    font-size: 14px;
    line-height: 16px;
    background-color: transparent;
    color: #000;
    outline: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    &::placeholder {
      color: #757575;
    }
    &:-webkit-autofill {
      font-size: 14px;
      line-height: 16px;
      -webkit-box-shadow: 0 0 0 50px #fffdf4 inset;
    }
    &::-ms-reveal,
    &::-ms-clear {
      display: none;
    }
  }
  &__icon {
    cursor: text;
    margin-left: 4px;
    top: 1px;
  }
}
</style>
