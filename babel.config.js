module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@store": "./store",
            "@contracts": "./contracts",
            "@styles": "./styles",
            "@navigation": "./navigation",
            "@screens": "./screens",
            "@constants": "./constants",
            "@components": "./components",
            "@services": "./services",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
