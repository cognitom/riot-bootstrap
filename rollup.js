const
  rollup       = require('rollup'),
  babel        = require('rollup-plugin-babel'),
  json         = require('rollup-plugin-json'),
  npm          = require('rollup-plugin-npm'),
  commonjs     = require('rollup-plugin-commonjs'),
  riot         = require('rollup-plugin-riot'),
  changeCase   = require('change-case'),
  packageName  = require('./package.json').name

rollup
  .rollup({
    entry: 'src/index.js',
    external: ['riot'],
    plugins: [riot(), json(), npm({ jsnext: true }), babel()]
  })
  .then(bundle => {
    bundle.write({
      format: 'iife',
      moduleName: changeCase.camelCase(packageName),
      globals: { riot: 'riot' },
      dest: `dist/${ packageName }.js`
    })
    bundle.write({ format: 'es6', dest: `dist/${ packageName }.es6.js` })
    bundle.write({ format: 'amd', dest: `dist/${ packageName }.amd.js` })
    bundle.write({ format: 'cjs', dest: `dist/${ packageName }.cjs.js` })
  })
  .catch(error => {
    console.error(error)
  })

rollup
  .rollup({
    entry: 'demo/index.js',
    external: ['riot'],
    plugins: [riot(), npm({ jsnext: true }), commonjs(), babel()]
  })
  .then(bundle => {
    bundle.write({
      format: 'iife',
      moduleName: 'app',
      globals: { riot: 'riot' },
      dest: `dist/demo.js`
    })
  })
  .catch(error => {
    console.error(error)
  })
