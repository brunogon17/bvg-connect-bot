
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Montado apenas no lado do cliente
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    toast({
      title: `Tema ${newTheme === 'dark' ? 'escuro' : 'claro'} ativado`,
      duration: 1500
    });
  };

  // Evitar problemas de hidratação renderizando apenas quando montado
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full w-9 h-9 transition-colors"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <Sun size={18} className="transition-all" />
      ) : (
        <Moon size={18} className="transition-all" />
      )}
    </Button>
  );
};

export default ThemeToggle;
