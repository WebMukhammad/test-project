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
        <div class="tab-bar__card tab-bar__card_orange">
          <div class="tab-bar__card-head">
            <div class="tab-bar__card-head-title">Условие 1</div>
            <!-- на стилизацию уйдет не мало времени -->
            <select class="tab-bar__card-head-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Возвраст респодента</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-body">
            <div class="tab-bar__card-body-title">Тип 1</div>
            <select class="tab-bar__card-body-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Gold</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-footer">
            <Button icon="add">Добавить тип</Button>
            <Button theme="red" icon="bin">Удалить условие</Button>
          </div>
        </div>
        <div class="tab-bar__card tab-bar__card_blue">
          <div class="tab-bar__card-head">
            <div class="tab-bar__card-head-title">Условие 1</div>
            <!-- на стилизацию уйдет не мало времени -->
            <select class="tab-bar__card-head-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Возвраст респодента</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-body">
            <div class="tab-bar__card-body-title">Тип 1</div>
            <select class="tab-bar__card-body-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Gold</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-footer">
            <Button icon="add">Добавить тип</Button>
            <Button theme="red" icon="bin">Удалить условие</Button>
          </div>
        </div>
        <div class="tab-bar__card tab-bar__card_green">
          <div class="tab-bar__card-head">
            <div class="tab-bar__card-head-title">Условие 3</div>
            <!-- на стилизацию уйдет не мало времени -->
            <select class="tab-bar__card-head-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Статус карты лояльность</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-body">
            <div class="tab-bar__card-body-title">Статус 1</div>
            <select class="tab-bar__card-body-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Активна</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-footer">
            <Button icon="add">Добавить статус</Button>
            <Button theme="red" icon="bin">Удалить условие</Button>
          </div>
        </div>
        <div class="tab-bar__card tab-bar__card_grey">
          <div class="tab-bar__card-head">
            <div class="tab-bar__card-head-title">Условие 3</div>
            <!-- на стилизацию уйдет не мало времени -->
            <select class="tab-bar__card-head-select">
              <option value="value1">Значение 1</option>
              <option value="value2" selected>Выберите условия</option>
              <option value="value3">Значение 3</option>
            </select>
          </div>
          <div class="tab-bar__card-footer">
            <Button theme="red" icon="bin">Удалить условие</Button>
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__note">
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
      path: [{ name: 'Опросы', url: '/' }, { name: 'Добавить опрос' }]
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
