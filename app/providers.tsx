// app/providers.tsx
'use client';

import { useEffect, useState } from 'react';
import  counter  from '../store/useBearStore';   // ← اینجا counter ایمپورت می‌شود

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = counter();   // ← استفاده از counter()

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }

    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-950" />;
  }

  return <>{children}</>;
}