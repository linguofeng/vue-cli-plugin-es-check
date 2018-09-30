const runCheck = require('./run-check')

const ID = 'vue-cli:es-check-plugin'

module.exports = class EsCheckPlugin {
  constructor(options) {
    this.options = options
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise(ID, async (compilation) => {
      // process options during build so env vars are set

      if (process.env.VUE_CLI_MODERN_BUILD) {
        // only run checks after the legacy bundles are built
        return
      }

      const { outputDir, pluginOptions } = this.options
      const { files, esVersion } = ((pluginOptions || {}).esCheck || {})

      let relativeGlobs = files

      // support `vue-cli-service build --modern`
      const legacyFlag = process.env.VUE_CLI_MODERN_MODE ? '-legacy' : ''

      if (!relativeGlobs) {
        // use sensible defaults if files not specified
        if (['production', 'test'].includes(process.env.NODE_ENV)) {
          relativeGlobs = [
            `js/chunk-*${legacyFlag}.*.js`,
            `js/app${legacyFlag}.*.js`,
          ]
        } else {
          // development
          relativeGlobs = [`app${legacyFlag}.js`]
        }
      }

      const fileGlobs = relativeGlobs
        .map(p => `${outputDir}/${p}`)

      await runCheck({ fileGlobs, esVersion })
    })
  }
}
