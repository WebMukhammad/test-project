import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Test',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/cosmo-2021/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/cosmo-2021/favicon-16x16.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,400;0,500;1,400;1,500&display=swap'
      }
    ]
  },
  /*
   ** Global CSS
   */
  css: ['~/assets/index.css'],
  eslint: {
    cache: false
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/globalErrorHandler.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
    headers: {
      post: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'postcss-import': {},
        'postcss-each': {},
        'postcss-extend': {},
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-css-variables': {},
        'postcss-preset-env': {},
        'postcss-move-props-to-bg-image-query': {},
        'postcss-inline-svg': {
          paths: [path.join(__dirname, './assets/img/')],
          removeFill: true
        },
        'postcss-custom-media': {},
        cssnano: {
          preset: 'default'
        }
      }
    }
  }
}
