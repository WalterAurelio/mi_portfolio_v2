import type { Meta, StoryObj } from '@storybook/react-vite';
import MiscTitle from '../components/MiscTitle';

const meta = {
  component: MiscTitle
} satisfies Meta<typeof MiscTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
