import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from '../components/Button';

const meta = {
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    buttonStyle: 'fill',
    children: 'Soy un botón'
  }
};

export const Outline: Story = {
  args: {
    buttonStyle: 'outline',
    children: 'Soy un botón'
  }
};

export const Minimal: Story = {
  args: {
    buttonStyle: 'minimal',
    children: 'Soy un botón'
  }
};
