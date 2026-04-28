import type { Meta, StoryObj } from '@storybook/react-vite';
import GradientShape from '../components/GradientShape';

const meta = {
  component: GradientShape
} satisfies Meta<typeof GradientShape>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Warm: Story = {
  args: {
    id: 'warm-shape',
    variant: 'warm'
  }
};
