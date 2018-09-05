const getPresets = () => {
  const presetEnvOptions = {
    targets: {
      ie: 11,
      edge: 14,
      firefox: 52,
      chrome: 49,
      safari: 10,
      node: '6.11',
    },
    // polyfill Promise, Map etc. on a usage basis
    useBuiltIns: 'usage',
    modules: ['modules', 'umd'].includes(process.env.BABEL_ENV) ? false : 'cjs',
  };

  return [['@babel/preset-env', presetEnvOptions], '@babel/preset-react'];
};

module.exports = {
  presets: getPresets(),

  plugins: [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-transform-runtime',
  ],
  env: {
    production: {
      ignore: ['**/*.stories.js', '**/*.test.js'],
      plugins: ['@babel/plugin-transform-react-constant-elements'],
    },
  },
};
