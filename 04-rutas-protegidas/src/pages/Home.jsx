import { useNavigate } from "react-router-dom";

const Home = () => {
  const isAuth = localStorage.getItem("token") !== null;

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("token", JSON.stringify("hola mundo"));
    navigate("/dashboard");
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8">
          Bienvenido a la pagina de inicio
        </h1>

        {isAuth ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-slate-400 text-white px-4 py-2 rounded"
          >
            Cerrar Sesion
          </button>
        ) : (
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-slate-400 text-white px-4 py-2 rounded"
          >
            Iniciar Sesion
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
