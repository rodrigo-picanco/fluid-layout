module.exports = {
  stories: ['../src/**/*.stories.(mdx)'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
}
