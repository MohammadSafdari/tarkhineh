import "@/ui/globals.css";
import ThemeProvider from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}