const config = {
  theme: {
    extend: {
      screens: {
        '<sm': {'max': '640px'},
        '<md': {'max': '768px'},
        '<lg': {'max': '1024px'},
        '<xl': {'max': '1280px'},
        '<2xl': {'max': '1536px'}
      }
    },
  },
};

module.exports = config;
