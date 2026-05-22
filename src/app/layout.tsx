"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";

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