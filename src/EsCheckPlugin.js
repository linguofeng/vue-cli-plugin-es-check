const runCheck = require('./run-check')

const ID = 'vue-cli:generate-icons-plugin'

module.exports = class EsCheckPlugin {
  constructor({ pattern }) {
    this.pattern = pattern
  }

  apply(compiler) {
    compiler.hooks.done.tapAsync(ID, async (compilation, done) => {
      try {
        await runCheck(this.pattern)
      } catch (err) {
        done(err)
      }

      done()
    })
  }
}
