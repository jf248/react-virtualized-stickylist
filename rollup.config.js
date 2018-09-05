import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const name = 'ReactVirtualizedStickylist';
const input = './src/index.js';
// const external = id => !id.startsWith('.') && !id.startsWith('/')

const globals = { react: 'React', 'react-dom': 'ReactDOM' };

const babelOptions = {
  exclude: '**/node_modules/**',
  // We are using @babel/plugin-transform-runtime
  runtimeHelpers: true,
};

const commonjsOptions = {
  include: /node_modules/,
};

export default [
  {
    input,
    output: {
      file: pkg.browser,
      format: 'umd',
      name,
      globals,
      sourcemap: true,
    },
    external: Object.keys(globals),
    plugins: [
      nodeResolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      uglify(),
      sizeSnapshot(),
    ],
  },
];
