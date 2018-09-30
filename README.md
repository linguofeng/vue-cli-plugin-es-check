# vue-cli-plugin-es-check

Uses [es-check](https://www.npmjs.com/package/es-check) to enforce a maximum ES
version on your bundled JS.

Helps you keep your `transpileDependencies` property in `vue.config.js` up to date.

By default, files that are "modern" are not checked (i.e. non-legacy bundles produced using `vue-cli-service build --modern`).  Only runs in `production` mode.

## Installation

```
vue add es-check
```

Check will automatically be run after `vue-cli-service build`.

## Configuration

All config is optional.

```
// vue.config.js
{
  pluginOptions: {
    esCheck: {
      // [optional] uses sensible defaults if not set
      files: [
        // array of file patterns in glob style
        'js/chunk-vendor.*.js',
        'js/chunk-other.*.js',
        'js/app.*.js',
      ],

      // [optional] default: es5
      esVersion: 'es5'
    }
  }
}
```
