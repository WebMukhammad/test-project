<template>
  <button :class="['button', `button_${theme}`]" @click="onClick">
    <span v-if="icon" :class="getIconClass" class="button__icon"></span>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'green'
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    getIconClass() {
      return `icon-${this.icon} icon-${this.icon}_${this.theme}`
    }
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: none;
  color: green;
  cursor: pointer;
  outline: none;
  border: 1px solid green;
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  &_red {
    border: 1px solid red;
    color: red;
  }
  &_white {
    border: 1px solid transparent;
  }
  &__icon {
    position: relative;
    margin-right: 6px;
  }
}
</style>
