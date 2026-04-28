import type { Meta, StoryObj } from '@storybook/react-vite';
import RelatedProject from '../interfaces/RelatedProject';

const meta = {
  component: RelatedProject
} satisfies Meta<typeof RelatedProject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
