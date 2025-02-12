import { NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300">
        <nav className="bg-sky-950 text-white shadow-lg mb-6">
          <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between h-16">
              <div className="items-center flex">
                <NavLink to="/" className="text-xl font-bold"> VideoClub</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Outlet />

        </main>

        <footer className="bg-sky-900 text-white mx-auto fixed bottom-0 w-full">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <p className="text-center">
              &copy; 2025 VideoClub. Raúl González
            </p>
          </div>

        </footer>
      </div>
    </>
  )
}

export default RootLayout