import type { Meta, StoryObj } from '@storybook/react-vite';
import NavigationMenu from '../interfaces/NavigationMenu';

const meta = {
  component: NavigationMenu
} satisfies Meta<typeof NavigationMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
