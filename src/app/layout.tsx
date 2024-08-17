import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google"; //optimized font
import "./globals.css";
import { ProductProvider } from "../../context/ProductContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Profile shopping",
  description: "Best books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <ProductProvider>
          {children}
          <ToastContainer position="bottom-center" />
        </ProductProvider>
      </body>
    </html>
  );
}
