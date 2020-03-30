module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Walter Boike | Schlosserei und Zerspannungstechnik',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  // loading: { color: '#003996' },
  loading: false,
  /*
  ** Build configuration
  */
 router: {
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-open',
  },
  css: [
    '~/css/normalize.css',
    '~/css/global.css',
    '~/css/colors.css'
   ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

