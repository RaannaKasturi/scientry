import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import Header from "@/components/static/header";
import { ThemeProvider } from "@/components/theme-provider";
import NextTopLoader from 'nextjs-toploader';
import Footer from "@/components/static/footer";
import BackToTop from "@/components/static/back-to-top";

const fontSyne = Syne({
  weight: "variable",
  style: "normal",
  subsets: ['latin-ext'],
});

export const metadata: Metadata = {
  title: "Scientry",
  description: "Science Simplified, Knowledge Amplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontSyne.className} antialiased select-none relative [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-secondary [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          enableColorScheme={true}
          disableTransitionOnChange
        >
          <NextTopLoader />
          < Header />
          {children}
          < BackToTop />
          < Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
