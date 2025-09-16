import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-lg glass hover:bg-white/10 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ 
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon size={18} className="text-foreground" />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: theme === 'light' ? 0 : -180,
          scale: theme === 'light' ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        <Sun size={18} className="text-foreground" />
      </motion.div>
    </motion.button>
  );
}