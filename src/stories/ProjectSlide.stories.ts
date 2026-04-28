import type { Meta, StoryObj } from '@storybook/react-vite';
import ProjectSlide from '../interfaces/ProjectSlide';

const meta = {
  component: ProjectSlide
} satisfies Meta<typeof ProjectSlide>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
