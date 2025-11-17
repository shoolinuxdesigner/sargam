import { Inter } from "next/font/google";
import "./globals.css";
import MaintenancePage from "@/components/ui/Maintenance";
import ClientProtection from "@/components/ClientProtection";

const trebuchet = Inter({
  variable: "--font-trebuchet",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Sargam Pandey",
  description: "CEO - Shoolin Innovations Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${trebuchet.variable} antialiased`} suppressHydrationWarning>
        <ClientProtection>
          {/* {children} */}
          <MaintenancePage/>
        </ClientProtection>
      </body>
    </html>
  );
}