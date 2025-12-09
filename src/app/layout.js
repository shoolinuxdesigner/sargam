import "./globals.css";
import MaintenancePage from "@/components/ui/Maintenance";
import ClientProtection from "@/components/ClientProtection";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Sargam Pandey",
  description: "CEO - Shoolin Innovations Limited",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <ClientProtection>
          {children}
          <SpeedInsights />
          {/* <MaintenancePage/> */}
        </ClientProtection>
      </body>
    </html>
  );
}