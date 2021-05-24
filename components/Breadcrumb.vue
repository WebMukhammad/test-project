<template>
  <div class="breadcrumb">
    <nuxt-link :to="list[0].url" class="breadcrumb__item breadcrumb__item_back"></nuxt-link>
    <div class="breadcrumb__list">
      <div v-for="(item, index) in list" :key="index" class="breadcrumb__item">
        <nuxt-link v-if="item.url" :to="item.url" :class="['breadcrumb__link', { breadcrumb__link_icon: rootIcon && index === 0 }]">
          <span class="link">{{ item.name }}</span>
        </nuxt-link>
        <div v-else>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadrumb',
  props: {
    rootIcon: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.breadcrumb {
  margin-bottom: 3px;
  font-size: 13px;
  line-height: 14px;
  position: relative;
  z-index: 1;
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    margin-bottom: 7px;
    &_back {
      width: 12px;
      height: 14px;
      margin-right: 5px;
      background: svg-load('./icon/arrow-left.svg', fill=#000) no-repeat left center;
      background-size: 6px auto;
      display: none;
    }
    &:not(&_back):after {
      content: '';
      width: 6px;
      height: 6px;
      margin-right: 7px;
      margin-left: 5px;
      background: svg-load('./icon/arrow-bread.svg', fill=#000) no-repeat center;
      display: inline-block;
    }
    &:last-child:after {
      display: none;
    }
  }
  &__link {
    text-decoration: none;
    color: #000;
    &_icon:before {
      content: '';
      width: 11px;
      height: 13px;
      position: relative;
      top: 1px;
      display: inline-block;
      background: svg-load('./svg/category.svg', fill=#000) no-repeat center;
      margin-right: 3px;
      background-size: 10px;
      vertical-align: top;
    }
  }
  @media (max-width: 800px) {
    &__item:not(:last-child):not(&__item_back) {
      display: none;
    }
    &__item_back {
      display: block;
    }
  }
}
</style>
