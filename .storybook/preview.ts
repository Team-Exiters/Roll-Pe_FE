import type { Preview } from '@storybook/nextjs-vite'
import { COLORS } from '../public/styles/colors'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo'
    },

    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: COLORS.ROLLPE_PRIMARY,
        },
        {
          name: 'black',
          value: COLORS.ROLLPE_SECONDARY,
        },
        {
          name: 'gray',
          value: COLORS.ROLLPE_SECTION_BACKGROUND,
        },
        {
          name: 'main',
          value: COLORS.ROLLPE_MAIN,
        },
      ],
    },
  },
};

export default preview;
