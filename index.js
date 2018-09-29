const shellExec = require('shell-exec')

module.exports = (api, options) => {
  api.registerCommand('es-check', {
    description: 'check bundled js is es5',
    usage: 'vue-cli-service es-check',
  }, async () => {
    const cmd = `es-check es5 ${options.outputDir}/js/*.js >&2`

    try {
      const { code, stderr } = await shellExec(cmd)

      if (code !== 0) {
        throw new Error(stderr)
      }
    } catch (err) {
      throw err
    }
  })
}

module.exports.defaultModes = {
  'es-check': 'production'
}
