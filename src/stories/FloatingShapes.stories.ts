import type { Meta, StoryObj } from '@storybook/react-vite';
import FloatingShapes from '../components/FloatingShapes';

const meta = {
  component: FloatingShapes
} satisfies Meta<typeof FloatingShapes>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
