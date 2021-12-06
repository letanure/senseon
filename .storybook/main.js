const path = require("path");
module.exports = {
  stories: ["../src/components/**/stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/vue",
  webpackFinal: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(`${process.cwd()}/src`)
    };
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  }
};
