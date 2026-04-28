import type { Meta, StoryObj } from '@storybook/react-vite';
import SectionBody from '../components/SectionBody';

const meta = {
  component: SectionBody
} satisfies Meta<typeof SectionBody>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
