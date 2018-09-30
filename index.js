const EsCheckPlugin = require('./src/EsCheckPlugin')

module.exports = (api, options) => {
  api.chainWebpack(webpackConfig => {
    const target = process.env.VUE_CLI_BUILD_TARGET
    if (target && target !== 'app') {
      return
    }

    webpackConfig
      .plugin('es-check')
      .use(EsCheckPlugin, [options])
  })
}
