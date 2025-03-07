
import React from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="transition-all" />
      ) : (
        <Moon size={18} className="transition-all" />
      )}
    </Button>
  );
};

export default ThemeToggle;
