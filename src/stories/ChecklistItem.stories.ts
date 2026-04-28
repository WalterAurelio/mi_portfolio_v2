import type { Meta, StoryObj } from '@storybook/react-vite';
import ChecklistItem from '../components/ChecklistItem';

const meta = {
  component: ChecklistItem
} satisfies Meta<typeof ChecklistItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
