// src/components/LoanLayout.tsx
import  { ReactNode, useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
interface DashboardLayoutProps {
  children: ReactNode; // Type for the children prop
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
    <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    <div className="flex flex-col flex-1 overflow-hidden">
      <Header setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        {children}
      </main>
    </div>
  </div>
  );
};

export default DashboardLayout;
