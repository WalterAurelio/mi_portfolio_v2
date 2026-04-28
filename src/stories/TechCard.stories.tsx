import type { Meta, StoryObj } from '@storybook/react-vite';
import TechCard from '../components/TechCard';
import HTMLLogo from '../assets/svg/HTMLLogo.svg?react';
import CSSLogo from '../assets/svg/CSSLogo.svg?react';
import JavaScriptLogo from '../assets/svg/JavaScriptLogo.svg?react';
import TailwindCSSLogo from '../assets/svg/TailwindCSSLogo.svg?react';
import SassLogo from '../assets/svg/SassLogo.svg?react';
import TypeScriptLogo from '../assets/svg/TypeScriptLogo.svg?react';
import FigmaLogo from '../assets/svg/FigmaLogo.svg?react';
import GitLogo from '../assets/svg/GitLogo.svg?react';

const meta = {
  component: TechCard
} satisfies Meta<typeof TechCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const HTML: Story = {
  args: {
    description: 'HTML',
    icon: <HTMLLogo />
  }
};

export const CSS: Story = {
  args: {
    description: 'CSS',
    icon: <CSSLogo />
  }
};

export const JavaScript: Story = {
  args: {
    description: 'JavaScript',
    icon: <JavaScriptLogo />
  }
};

export const React: Story = {};

export const TailwindCSS: Story = {
  args: {
    description: 'Tailwind CSS',
    icon: <TailwindCSSLogo />
  }
};

export const Sass: Story = {
  args: {
    description: 'Sass',
    icon: <SassLogo />
  }
};

export const TypeScript: Story = {
  args: {
    description: 'TypeScript',
    icon: <TypeScriptLogo />
  }
};

export const Figma: Story = {
  args: {
    description: 'Figma',
    icon: <FigmaLogo />
  }
};

export const Git: Story = {
  args: {
    description: 'Git',
    icon: <GitLogo />
  }
};
