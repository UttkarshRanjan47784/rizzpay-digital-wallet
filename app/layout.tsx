import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import RecoilContextProvider from "@/components/store/recoil-context-provider";
import { AuthNavbar } from "@/components/navbar/auth-navbar";
import { Footer } from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RizzPay: Neo Digital Wallet",
  description:
    "A neo digital wallet for efficient, secure and seamless transactions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <RecoilContextProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AuthNavbar />
            {children}
            <Footer />
          </ThemeProvider>
        </RecoilContextProvider>
      </body>
    </html>
  );
}
