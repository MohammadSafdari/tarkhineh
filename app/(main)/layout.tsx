import NavBar from "@/sections/NavBar";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavBar />
      <Header />

      {children}

      <Footer />
    </>
  );
}