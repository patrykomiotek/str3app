import type { StorybookConfig } from '@storybook/react-vite';

const path = require('path');
const tsconfigPaths = require('vite-tsconfig-paths').default;

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
         // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    if (config) {
      config.plugins?.push(
        /** @see https://github.com/aleclarson/vite-tsconfig-paths */
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), 'tsconfig.json')],
        })
      );
    }

    return config;
  },
};
export default config;
