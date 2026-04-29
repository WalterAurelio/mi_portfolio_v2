import type { Meta, StoryObj } from '@storybook/react-vite';
import DarkLightButton from '../components/DarkLightButton';

const meta = {
  component: DarkLightButton
} satisfies Meta<typeof DarkLightButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
