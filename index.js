const EsCheckPlugin = require('./src/EsCheckPlugin')

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    const target = process.env.VUE_CLI_BUILD_TARGET
    if (target && target !== 'app') {
      return
    }

    webpackConfig
      // only support production mode, otherwise this plugin breaks
      // `vue-cli-service serve`
      .when(process.env.NODE_ENV === 'production', config => {
        config
          .plugin('es-check')
          .use(EsCheckPlugin, [options])
      })
  })
}
