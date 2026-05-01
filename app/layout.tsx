import NavBar from "@/sections/NavBar";
import "../ui/globals.css";

import Header from "@/sections/Header";


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

        <Header/>

        {children}
      </body>
    </html>
  );
}
