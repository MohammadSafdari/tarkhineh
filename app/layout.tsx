import NavBar from "@/sections/NavBar";
import "../ui/globals.css";

import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { Box } from "@mui/material";


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
        <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          {children}
        </Box>
          <Footer/>
          <Footer/>
          <Footer/>
      </body>
    </html>
  );
}
