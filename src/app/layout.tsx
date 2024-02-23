import DashboardLayout from "@/Components/Core/DashboardLayout";
import "./globals.css";


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
        </DashboardLayout>
        </body>
    </html>
  );
}
