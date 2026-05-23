"use client";
import localFont from "next/font/local";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

const vazirmatn = localFont({
    src: [
        { path: "../../public/font/Vazirmatn-Thin.ttf", weight: "100" },
        { path: "../../public/font/Vazirmatn-ExtraLight.ttf", weight: "200" },
        { path: "../../public/font/Vazirmatn-Light.ttf", weight: "300" },
        { path: "../../public/font/Vazirmatn-Regular.ttf", weight: "400" },
        { path: "../../public/font/Vazirmatn-Medium.ttf", weight: "500" },
        { path: "../../public/font/Vazirmatn-SemiBold.ttf", weight: "600" },
        { path: "../../public/font/Vazirmatn-Bold.ttf", weight: "700" },
        { path: "../../public/font/Vazirmatn-ExtraBold.ttf", weight: "800" },
        { path: "../../public/font/Vazirmatn-Black.ttf", weight: "900" },
    ],
    variable: "--font-vazirmatn",
});

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="fa" >
        <body>
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider>
        </body>
        </html>
    );
}