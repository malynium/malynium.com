const config = {
  presets: [
    require('./presets.cjs')
  ],
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [
    require('twelvecss')
  ],
};

module.exports = config;
