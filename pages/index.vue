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
          :count="index + 1"
          :theme="item.theme"
          :condition-list="item.conditionList"
          :type-list="item.typeList"
          @add="addCardType(index)"
          @remove="removeCardType(index)"
          @change-select="onChangeSelect"
          @change-select-type="onChangeSelectType"
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
      result: [],
      cards: [
        {
          theme: 'orange',
          conditionList: ['Значение 1', 'Значение 2', 'Значение 3 '],
          typeList: [['Значение 1', 'Значение 2', 'Значение 3 ']]
        },
        {
          theme: 'blue',
          conditionList: ['Значение 1', 'Значение 2', 'Значение 3 '],
          typeList: [['Значение 1', 'Значение 2', 'Значение 3 ']]
        },
        {
          theme: 'green',
          conditionList: ['Значение 1', 'Значение 2', 'Значение 3 '],
          typeList: [['Значение 1', 'Значение 2', 'Значение 3 ']]
        },
        {
          theme: 'grey',
          conditionList: ['Значение 1', 'Значение 2', 'Значение 3 '],
          typeList: [['Значение 1', 'Значение 2', 'Значение 3 ']]
        }
      ]
    }
  },
  methods: {
    addCardType(index) {
      const list = ['Значение 1', 'Значение 2', 'Значение 3 ']
      this.cards[index].typeList.push(list)

      this.send()
    },
    removeCardType(index) {
      this.cards.splice(index, 1)
      this.result = this.result.filter((el) => el.id !== index + 1)
      this.send()
    },
    addCard() {
      const card = {
        theme: 'orange',
        conditionList: [['Значение 1', 'Значение 2', 'Значение 3 ']],
        typeList: [['Значение 1', 'Значение 2', 'Значение 3 ']]
      }
      this.cards.push(card)
      this.send()
    },
    onChangeSelect(data) {
      // если уже есть значение, то перезаписываем его
      if (this.result.find((p) => p.id === data.id)) {
        const propIndex = this.result.findIndex((p) => p.id === data.id)
        this.result[propIndex].value = data.value
      } else {
        this.result.push(data)
      }

      this.send()
    },
    onChangeSelectType(data, id) {
      /**
       * Ставим условия, чтобы у ответов был следующая структура:
       *  id: 'Значение',
       *  value: 'Значение',
       *  children: [
       *    {
       *      id: 'Значение',
       *      value: 'Значение',
       *    }
       *  ]
       */
      if (this.result.find((p) => p.id === id)) {
        const propIndex = this.result.findIndex((p) => p.id === id)
        if (this.result[propIndex].children?.find((p) => p.id === data.id)) {
          const propIndexChild = this.result[propIndex].children.findIndex((p) => p.id === data.id)
          this.result[propIndex].children[propIndexChild].value = data.value
        } else {
          this.result[propIndex].children = [data]
        }
      } else {
        this.result.push([{ id, value: null, children: [data] }])
      }

      this.send()
    },
    async send() {
      try {
        await fetch('https://test-5d38d-default-rtdb.firebaseio.com/list.json', {
          method: 'POST',
          body: JSON.stringify(this.result),
          headers: {
            'Content-Type': 'aplication/json'
          }
        })
      } catch (e) {
        console.log('При отправке данных произошла ошибка', e)
      }
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
