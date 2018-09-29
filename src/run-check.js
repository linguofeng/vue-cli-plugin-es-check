const shellExec = require('shell-exec')

module.exports = async (pattern) => {
  const cmd = `es-check es5 ${pattern} >&2`

  try {
    const { code, stderr } = await shellExec(cmd)

    if (code !== 0) {
      throw new Error(stderr)
    }
  } catch (err) {
    throw err
  }
}
