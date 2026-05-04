import Sun from '../assets/svg/Sun.svg?react';
import Moon from '../assets/svg/Moon.svg?react';
import { useThemeStore } from '../store/themeStore';
import type { WithClassName } from '../types/WithClassName';
import { cn } from '../utils/cn';

function DarkLightButton({ className }: WithClassName) {
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  const isSun = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'relative h-10 w-12.75 flex items-center justify-center rounded-xl overflow-hidden',
        'bg-miscellaneous-primary border border-neutral-inverse-primary transition-all duration-300 text-neutral-tertiary',
        className
      )}
      aria-label={`Switch to ${isSun ? 'light' : 'dark'} theme`}
    >
      <Sun className={cn('absolute transition-all duration-300', isSun ? 'translate-y-0' : 'translate-y-10')} />
      <Moon className={cn('absolute transition-all duration-300', !isSun ? 'translate-y-0' : '-translate-y-10')} />
    </button>
  );
}

export default DarkLightButton;
