module.exports = {
  "stories": [
    "../app/components/**/*.stories.mdx",
    "../app/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-tailwind-dark-mode'
  ],
  "framework": "@storybook/react"
}