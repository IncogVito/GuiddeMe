module.exports = {
  "stories": ['../src/app/**/*.stories.ts'],
  "addons": ["@storybook/addon-links", '@storybook/addon-a11y', "@storybook/addon-docs"],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
