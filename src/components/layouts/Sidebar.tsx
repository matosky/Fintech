import {
  Home,
  DollarSign,
  FileText,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: FileText, label: "Loan Management", href: "/loans" },
  {
    icon: DollarSign,
    label: "Transactions",
    href: "/transactions",
  },
  { icon: Settings, label: "Settings", href: "#" },
];

export const Sidebar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  return (
    <div
      className={`${
        open ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        <span className="text-xl font-bold text-blue-600">FinTech</span>
        <button
          onClick={() => setOpen(false)}
          className="p-1 -mr-1 rounded-md lg:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Close sidebar</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <nav className="mt-5 px-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex items-center px-2 py-2 mt-1 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
          >
            <item.icon className="mr-3 h-6 w-6" />
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
