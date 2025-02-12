import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../context/authContext";

const AdminLayout = () => {

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="lg:hidden">
          <button>

          </button>
        </div>

        <div>
          <aside className="fixed lg:static w-64 bg-gray-700 h-full lg:block hidden transform transition-transform flex flex-col">
            <nav className="flex-1 p-4 space-y-2">
              <NavLink to="/admin" className="block p-2 text-white hover:text-sky-700">
                Dashboard
              </NavLink>

              <NavLink to="/admin/user" className="block p-2 text-white hover:text-sky-700">
                User
              </NavLink>

              <NavLink to="/admin/product" className="block p-2 text-white hover:text-sky-700">
                Products
              </NavLink>

              <NavLink to="/admin/settings" className="block p-2 text-white hover:text-sky-700">
                Settings
              </NavLink>
            </nav>
            <div className="p-4 border-t border-white"></div>

            <button 
              onClick={handleLogout}
              className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 cursor-pointer"
            >
              Logout
            </button>


          </aside>
        </div>
        <main className="flex-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default AdminLayout