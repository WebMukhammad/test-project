<template>
  <div class="main-page">
    <Breadcrumb :list="path" />
    <div class="tab-bar">
      <div class="tab-bar__titles">
        <div class="tab-bar__title">Параметры</div>
        <div class="tab-bar__title">Вопросы</div>
        <div class="tab-bar__title">Логика</div>
        <div class="tab-bar__title">Условия</div>
        <div class="tab-bar__title">Респоденты</div>
      </div>
      <div class="tab-bar__main-title">Добавить опрос</div>
      <div class="tab-bar__cards">
        <Card
          v-for="(item, index) in cards"
          :key="index"
          :theme="item.theme"
          :condition-list="item.conditionList"
          :type-list="item.typeList"
          @add="addCardType(index)"
          @remove="removeCardType(index)"
        />
      </div>
    </div>
    <div class="main-page__note" @click="addCard">
      <div class="main-page__note-wrap">
        <div class="icon-add icon-add_green main-page__note-icon"></div>
        Нажмите, чтобы добавить новое условие выборки.
        <br />
        Все условия связываются между собой логическими "И"
      </div>
    </div>
    <div class="main-page__footer">
      <Button theme="white">Протестировать опрос</Button>
      <Button>Далее</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      path: [{ name: 'Опросы', url: '/' }, { name: 'Добавить опрос' }],
      cards: [
        {
          theme: 'orange',
          conditionList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]],
          typeList: [[{ text: 'Значение 1' }, { text: 'Значение 2', selected: true }, { text: 'Значение 3 ' }]]
        },
        {
          theme: 'blue',
          conditionList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]],
          typeList: [[{ text: 'Значение 1', selected: true }, { text: 'Значение 2' }, { text: 'Значение 3 ' }]]
        },
        {
          theme: 'green',
          conditionList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]],
          typeList: [[{ text: 'Значение 1', selected: true }, { text: 'Значение 2' }, { text: 'Значение 3 ' }]]
        },
        {
          theme: 'grey',
          conditionList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]],
          typeList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]]
        }
      ]
    }
  },
  methods: {
    addCardType(index) {
      const list = [{ text: 'Значение 1', selected: true }, { text: 'Значение 2' }, { text: 'Значение 3 ' }]
      this.cards[index].typeList.push(list)
    },
    removeCardType(index) {
      this.cards[index].conditionList = []
    },
    addCard() {
      const card = {
        theme: 'orange',
        conditionList: [[{ text: 'Значение 1' }, { text: 'Значение 2' }, { text: 'Значение 3 ', selected: true }]],
        typeList: [[{ text: 'Значение 1' }, { text: 'Значение 2', selected: true }, { text: 'Значение 3 ' }]]
      }
      this.cards.push(card)
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-page {
  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 20px 25px;
    background-color: #f4f7f9;
  }
  &__note {
    color: green;
    border: 1px solid green;
    border-radius: 5px;
    padding: 30px;
    margin: 40px 25px;
    text-align: center;
    cursor: pointer;
    &-wrap {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
    }
    &-icon {
      display: block;
      width: 30px;
      height: 30px;
      background-size: contain;
      margin: 0 auto 10px;
    }
  }
}
.tab-bar {
  &__titles {
    display: flex;
    border-bottom: 1px solid green;
  }
  &__title {
    color: green;
    padding: 10px 30px;
  }
  &__main-title {
    font-weight: 500;
    color: #888;
    padding: 25px 25px 15px;
  }
  &__card {
    padding: 25px;
    &_orange {
      background-color: #fffcf5;
      ^&-head-title {
        color: goldenrod;
      }
    }
    &_blue {
      background-color: #f8faff;
      ^&-head-title {
        color: blue;
      }
    }
    &_green {
      background-color: #fafff8;
      ^&-head-title {
        color: green;
      }
    }
    &_grey {
      background-color: #fafafa;
      ^&-head-title {
        color: #000;
      }
    }
    &-head {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
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
    &-body {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
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
    &-footer {
      display: flex;
      justify-content: space-between;
      margin-left: 435px;
    }
  }
}
</style>
