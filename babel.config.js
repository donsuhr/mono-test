const path = require('path');
const pjson = require(path.resolve(process.cwd(), 'package.json'));

const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      useBuiltIns: 'usage',
      corejs: { version: '3.29.1', proposals: true },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
];

console.log('transforming __VERSION__ variable: ', pjson.version);

const plugins = [
  [
    'transform-define',
    {
      __VERSION__: pjson.version,
    },
  ],
  '@babel/plugin-transform-runtime',
];

module.exports = (api) => {
  if (api) {
    api.cache(true);
    api.debug = true;
  }

  return {
    presets,
    plugins,
  };
};
