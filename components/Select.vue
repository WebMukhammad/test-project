<template>
  <select v-model="val" class="select" @change="onChangeSelect">
    <option v-for="(option, index) in list" :key="index" :value="option">{{ option }}</option>
  </select>
</template>

<script>
export default {
  model: {
    props: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: null
    },
    id: {
      type: [String, Number],
      default: null
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      val: this.value
    }
  },
  methods: {
    onChangeSelect() {
      this.$emit('change', {
        id: this.id,
        value: this.val
      })
    }
  }
}
</script>

<style lang="postcss" scoped>
.select {
  padding: 7px;
  border-radius: 5px;
}
</style>
