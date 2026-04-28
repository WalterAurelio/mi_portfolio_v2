import type { Meta, StoryObj } from '@storybook/react-vite';
import NavAnchor from '../components/NavAnchor';

const meta = {
  component: NavAnchor
} satisfies Meta<typeof NavAnchor>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
