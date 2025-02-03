import { Link, Outlet, useNavigate } from "react-router-dom"

const RootLayout = () => {
  const isAuth = localStorage.getItem("token") !== null;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/");
  }



  return (
    <>
    <div className="min-h-screen bg-gray-100" >
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-4">
            <Link to="/" className="flex items-center"> Home </Link>
            <Link to="/profile" className="flex items-center"> Profile </Link>
            <Link to="/dashboard" className="flex items-center"> Dashboard </Link>
            </div>
            {isAuth && (
              <button 
                onClick={ handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded">Cerrar Sesion</button>
            ) }
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto mt-8 px-4">
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default RootLayout