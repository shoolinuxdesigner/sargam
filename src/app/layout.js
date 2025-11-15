import { Inter } from "next/font/google";
import "./globals.css";

const trebuchet = Inter({
  variable: "--font-trebuchet",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Sargam Pandey",
  description: "CEO - Shoolin Innovations Limited",
};

const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${trebuchet.variable} antialiased`}   suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}