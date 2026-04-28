import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionTitle from '../components/SectionTitle';

const meta = {
  component: SectionTitle
} satisfies Meta<typeof SectionTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Soy Section Title'
  }
};
