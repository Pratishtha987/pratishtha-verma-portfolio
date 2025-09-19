"use client";

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    
    // Get saved theme or system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    // Set theme state
    setTheme(initialTheme);
    
    // Apply theme to DOM immediately with error handling
    try {
      const html = document.documentElement;
      html.classList.remove('light', 'dark');
      html.classList.add(initialTheme);
      
      // Also set data attribute for additional CSS targeting
      html.setAttribute('data-theme', initialTheme);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Apply theme to DOM with better error handling
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(theme);
        html.setAttribute('data-theme', theme);
        
        // Force a reflow to ensure changes are applied
        html.offsetHeight;
        
        console.log('Theme toggled to:', theme, 'Classes:', html.className);
      } catch (error) {
        console.error('Error toggling theme:', error);
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle clicked! Current theme:', theme);
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Switching from', prev, 'to', newTheme);
      
      // Force immediate DOM update
      setTimeout(() => {
        const html = document.documentElement;
        html.classList.remove('light', 'dark');
        html.classList.add(newTheme);
        html.setAttribute('data-theme', newTheme);
        console.log('Forced theme update:', newTheme, 'Classes:', html.className);
      }, 0);
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
