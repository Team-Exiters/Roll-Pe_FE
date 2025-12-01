import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Loading from '@/app/_components/molecules/ui/loading/Loading';

const meta = {
  title: 'UI/Loading',
  component: Loading,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
