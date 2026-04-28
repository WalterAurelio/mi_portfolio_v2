import type { Meta, StoryObj } from '@storybook/react-vite';
import HandwrittenTitle from '../components/HandwrittenTitle';

const meta = {
  component: HandwrittenTitle
} satisfies Meta<typeof HandwrittenTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
