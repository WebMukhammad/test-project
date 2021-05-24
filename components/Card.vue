<template>
  <div :class="['card', `card_${theme}`]">
    <div class="card__join">И</div>
    <div class="card__head">
      <div v-for="(item, index) in conditionList" :key="index" class="card__head-item">
        <div class="card__head-title">Условие 1</div>
        <select class="card__head-select">
          <option v-for="(option, idx) in item" :key="idx" value="value1" :selected="option.selected">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="card__body">
      <div v-for="(item, index) in typeList" :key="index" class="card__body-item">
        <div class="card__body-title">Тип {{ index + 1 }}</div>
        <select class="card__body-select">
          <option v-for="(option, idx) in item" :key="idx" value="value1" :selected="option.selected">{{ option.text }}</option>
        </select>
      </div>
    </div>
    <div class="card__footer">
      <Button icon="add" @click="add">Добавить тип</Button>
      <Button theme="red" icon="bin" @click="remove">Удалить условие</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    theme: {
      type: String,
      default: 'green'
    },
    conditionList: {
      type: Array,
      default() {
        return []
      }
    },
    typeList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    add() {
      this.$emit('add')
    },
    remove() {
      this.$emit('remove')
    }
  }
}
</script>

<style lang="postcss" scoped>
.card {
  position: relative;
  padding: 25px;
  &:first-child &__join {
    display: none;
  }
  &_orange {
    background-color: #fffcf5;
    ^&-head-title {
      color: goldenrod;
    }
    ^&__join {
      background-color: goldenrod;
    }
  }
  &_blue {
    background-color: #f8faff;
    ^&-head-title {
      color: blue;
    }
    ^&__join {
      background-color: blue;
    }
  }
  &_green {
    background-color: #fafff8;
    ^&-head-title {
      color: green;
    }
    ^&__join {
      background-color: green;
    }
  }
  &_grey {
    background-color: #fafafa;
    ^&-head-title {
      color: #000;
    }
    ^&__join {
      background-color: #000;
    }
  }
  &__join {
    position: absolute;
    top: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
  }
  &__head {
    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &-title {
      font-weight: 500;
      width: 100%;
      max-width: 420px;
      margin-right: 15px;
    }
    &-select {
      flex: 3;
      padding: 7px;
      border-radius: 5px;
    }
  }
  &__body {
    &-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    &-title {
      width: 100%;
      max-width: 420px;
      margin-right: 15px;
    }
    &-select {
      flex: 3;
      padding: 7px;
      border-radius: 5px;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    margin-left: 435px;
  }
}
</style>
