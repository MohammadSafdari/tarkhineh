import NavBar from "@/sections/NavBar";
import "../ui/globals.css";

import Header from "@/sections/Header";
import Footer from "@/sections/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NavBar/>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
