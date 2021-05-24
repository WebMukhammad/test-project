export const state = () => ({
  token: null,
  data: null
})

export const mutations = {
  setToken(state, token) {
    state.token = token
    this.$axios.setToken(token?.accessToken.value, 'Bearer')
  },
  setData(state, data) {
    state.data = data
  }
}

export const actions = {
  async getBaseToken({ commit }) {
    try {
      const { result: token } = await this.$api.auth.getToken({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
      })

      commit('setToken', {
        accessToken: {
          value: token.access_token,
          expire: token.expires.access_token
        },
        refreshToken: {
          value: token.refresh_token,
          expire: token.expires.refresh_token
        }
      })
    } catch (e) {
      throw new Error('Ошибка при получении базового токена для доступа к API', e)
    }
  },
  async refreshToken({ state, commit }) {
    try {
      this.$axios.setToken(false)
      const { result: token } = await this.$api.auth.refreshToken({
        refreshToken: state.token.refreshToken.value
      })

      commit('setToken', {
        accessToken: {
          value: token.access_token,
          expire: token.expires.access_token
        },
        refreshToken: {
          value: token.refresh_token,
          expire: token.expires.refresh_token
        }
      })
    } catch (e) {
      throw new Error('Ошибка при обновлении токена', e)
    }
  },
  async resetToken({ state, commit }) {
    try {
      const { result: token } = await this.$api.auth.resetToken({
        refreshToken: state.token.refreshToken.value
      })

      commit('setToken', {
        accessToken: {
          value: token.access_token,
          expire: token.expires.access_token
        },
        refreshToken: {
          value: token.refresh_token,
          expire: token.expires.refresh_token
        }
      })
    } catch (e) {
      throw new Error('Ошибка при получении токена авторизации', e)
    }
  },
  async logout({ commit, dispatch }) {
    try {
      await dispatch('resetToken')
      this.$router.push('/', () => {
        commit('setData', null)
      })
    } catch (e) {
      throw new Error('Ошибка при логауте', e)
    }
  }
}

export const getters = {
  userAuth: (state) => {
    return Boolean(state.data)
  }
}
