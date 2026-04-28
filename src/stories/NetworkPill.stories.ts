import type { Meta, StoryObj } from '@storybook/react-vite';
import NetworkPill from '../components/NetworkPill';

const meta = {
  component: NetworkPill
} satisfies Meta<typeof NetworkPill>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Large: Story = {};

export const Small: Story = {
  args: {
    size: 'small'
  }
};
