// slices/themeSlice.ts
import { StateCreator } from 'zustand';

export interface ThemeSlice {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const createThemeSlice: StateCreator<ThemeSlice> = (set, get) => ({
  theme: 'light',

  toggleTheme: () => {
    const current = get().theme;
    const newTheme = current === 'light' ? 'dark' : 'light';

    // اعمال روی DOM
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);

    // ذخیره در localStorage
    localStorage.setItem('theme', newTheme);

    set({ theme: newTheme });
  },

  setTheme: (newTheme) => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    set({ theme: newTheme });
  },
}); 