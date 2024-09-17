import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mirage Trip",
  description: "Mirage Trip website",
  // icons: [
  //     {
  //       rel: "Icon",
  //       href: "/favicon.ico",
  //       url: "/favicon.ico",
  //     },
  //   ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
