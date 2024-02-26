import DashboardLayout from "@/Components/Core/DashboardLayout";
import "./globals.css";
import { Toaster } from "react-hot-toast";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bodyClass">
        <DashboardLayout>
          {children}
          <Toaster />
        </DashboardLayout>
        </body>
    </html>
  );
}
