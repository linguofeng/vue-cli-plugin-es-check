const EsCheckPlugin = require('./src/EsCheckPlugin')
const runCheck = require('./src/run-check')

module.exports = (api, options) => {
  const defaultPattern = `${options.outputDir}/js/*.js`

  api.registerCommand('es-check', {
    description: 'check built js is es5',
    usage: 'vue-cli-service es-check',
  }, async () => {
    await runCheck(defaultPattern)
  })

  api.chainWebpack(webpackConfig => {
    const target = process.env.VUE_CLI_BUILD_TARGET
    if (target && target !== 'app') {
      return
    }

    webpackConfig
      .plugin('es-check')
      .use(EsCheckPlugin, [{
        pattern: defaultPattern,
      }])
  })
}

module.exports.defaultModes = {
  'es-check': 'production'
}
