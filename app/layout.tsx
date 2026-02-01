import "../ui/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="ltr">
      <body
      >
        {children}
      </body>
    </html>
  );
}
