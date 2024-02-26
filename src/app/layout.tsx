"use client"
import DashboardLayout from "@/Components/Core/DashboardLayout";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import store from "@/redux/store";
import { Provider } from "react-redux";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bodyClass">
          <DashboardLayout>
            <Provider store={store}>
              {children}
            </Provider>
            <Toaster />
          </DashboardLayout>
        </body>
    </html>
  );
}
