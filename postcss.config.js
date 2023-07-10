const pxToRem = require('postcss-pxtorem');

const pxToRemPlugin = pxToRem({
  rootValue: 100,
  unitPrecision: 2,
  propList: ['*'],
  replace: true,
  mediaQuery: false,
  minPixelValue: 0,
});

module.exports = {
  plugins: [
    'autoprefixer',
    'postcss-viewport-unit-fallback',
    pxToRemPlugin,
  ],
};
