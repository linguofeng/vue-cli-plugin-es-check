# vue-cli-plugin-es-check

Check bundled JS is strictly es5.  

Helps you keep your `transpileDependencies` property in `vue.config.js` up to date.

## Installation

```
vue add es-check
```

Check will automatically be run after build (`vue-cli-service build`).

## Running manually

```
npx vue-cli-service es-check
```

## Configuration

Currently has no configuration options, just runs `es-check es5 'dist/js/*.js'`.
