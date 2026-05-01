import NavBar from "@/sections/NavBar";
import "../ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
