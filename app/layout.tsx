import "@ant-design/v5-patch-for-react-19";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App } from "antd";
import { BookStoreProvider } from "./books/booksStore/provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <App>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <AntdRegistry>
            <BookStoreProvider>{children}</BookStoreProvider>
          </AntdRegistry>
        </body>
      </html>
    </App>
  );
}
