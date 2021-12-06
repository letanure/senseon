export default {
  srcDir: 'src/',

  server: {
    port: 3333, // Tests require port 3333 to be used
    host: 'localhost', // The API mocking requires host to be localhost
  },

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,
  mode: 'spa',

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'SenseOn Tech Test',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/senseon-favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/api-mocking.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // '@nuxtjs/proxy',
    '@nuxtjs/axios',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient, isServer }) {
      config.output.globalObject = 'this'
      config.devtool = isClient ? 'eval-source-map' : 'inline-source-map'
      config.node = {
        fs: 'empty',
      }

      if (isClient) {
        config.module.rules.push({
          test: /\.vue$/,
          loader: 'vue-svg-inline-loader',
          options: {
            /* ... */
          },
        })
      }

      if (!isDev && isServer) {
        config.module.rules[0].query.loaders.css = 'css-loader'
      }
    },
  },
}
