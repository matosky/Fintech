import { useState } from 'react'
import { Bell, User, Menu } from 'lucide-react'

export const Header = ({ setSidebarOpen }: { setSidebarOpen: (open: boolean) => void })=> {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
    <div className="flex items-center justify-between md:justify-end px-4 py-3">
      <button
        onClick={() => setSidebarOpen(true)}
        className="p-1 -ml-1 rounded-md lg:hidden hover:bg-gray-100"
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" />
      </button>
      <div className="flex items-center">
        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" />
        </button>
        <div className="ml-3 relative">
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="sr-only">Open user menu</span>
            <User className="h-8 w-8 rounded-full bg-gray-200 p-1" />
          </button>
          {userMenuOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
            </div>
          )}
        </div>
      </div>
    </div>
  </header>
  )
}

