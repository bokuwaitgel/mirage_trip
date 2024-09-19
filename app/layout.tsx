import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "./components/Header";
import {SiteFooter} from "./components/Footer";
import { Inter } from "next/font/google";
import Image from "next/image";
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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <SiteFooter />
            <div className="relative">
            <div className="absolute bottom-0 left-0 z-[-1] scale-x-[-1]">
                <Image 
                  src="/images/plus-group.png" 
                  alt="blob background shape" 
                  width={0}
                  height={0}
                  sizes="200vw"
                  style={{ width: '100%', height: 'auto' }}
                  />
              </div>
            </div>
        </ThemeProvider>
        </body>
    </html>
  );
}

