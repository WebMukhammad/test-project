import { mapState } from 'vuex'
// import declOfNum from '~/helper/declOfNum'

export default {
  name: 'TestPage',
  computed: mapState({
    user: (state) => state.user.data
  }),
  data() {
    return {
      isAsctiveRules: false
    }
  },
  methods: {
    toggleRules() {
      this.isAsctiveRules = !this.isAsctiveRules
    }
  }
}
