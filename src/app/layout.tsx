'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import StyledJsxRegistry from "@/lib/registry";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "@/styles/global";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Outfit:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <StyledJsxRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
             {children}
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
