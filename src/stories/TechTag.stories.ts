import type { Meta, StoryObj } from '@storybook/react-vite';
import TechTag from '../components/TechTag';

const meta = {
  component: TechTag
} satisfies Meta<typeof TechTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'React'
  }
};
