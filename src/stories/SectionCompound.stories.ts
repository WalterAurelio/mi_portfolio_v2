import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionCompound from '../interfaces/SectionCompound';

const meta = {
  component: SectionCompound
} satisfies Meta<typeof SectionCompound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
