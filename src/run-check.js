const shellExec = require('shell-exec')

// `fileGlobs` should be an array of glob-style file patterns to check
module.exports = async ({ fileGlobs, esVersion = 'es5' }) => {
  const globArgs = fileGlobs.join(' ')
  const cmd = `es-check ${esVersion} ${globArgs}`

  console.log(cmd)

  try {
    const { code, stderr } = await shellExec(`${cmd} >&2`)

    if (code !== 0) {
      throw new Error(stderr)
    }
  } catch (err) {
    throw err
  }
}
