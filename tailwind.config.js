/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  // فعال کردن Dark Mode
  darkMode: 'class',   // ← این خط خیلی مهمه!

  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn", "sans-serif"],
      },

      // رنگ‌های سفارشی (اختیاری اما توصیه می‌شود)
      colors: {
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
        foreground: {
          light: "#0a0a0a",
          dark: "#ededed",
        },
      },
    },
  },

  plugins: [],
};