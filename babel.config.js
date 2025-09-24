/** @type {import('@babel/core').TransformOptions} */
module.exports = function (api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    // needed for web as per https://github.com/software-mansion/react-native-reanimated/blob/main/apps/web-example/babel.config.js#L35
    plugins: ["react-native-worklets/plugin"],
  }
}
