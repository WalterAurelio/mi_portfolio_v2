import type { Meta, StoryObj } from '@storybook/react-vite';
import MenuButton from '../components/MenuButton';

const meta = {
  component: MenuButton
} satisfies Meta<typeof MenuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
