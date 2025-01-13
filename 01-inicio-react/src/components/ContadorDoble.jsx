import { useState } from "react";

function ContadorDoble() {
  // Hooks
  const [friends, setFriends] = useState({
    Juan: 0,
    Carlos: 0,
    Maria: 0,
  });

  // Funciones
  const handleClickLike = (nombre, likes) => {
    setFriends((preValue) => {
      const newLikes = preValue[nombre] + likes;
      return { ...preValue, [nombre]: newLikes < 0 ? 0 : newLikes };
    });
  };

  const calcularMedia = () => {
    const totalLikes = Object.values(friends).reduce((acc, likes) => acc + likes, 0);
    const totalAmigos = Object.keys(friends).length;
    return (totalLikes / totalAmigos).toFixed(2); // Redondeo a 2 decimales
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-200 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-5 text-center">
        Contador Likes Amigos
      </h1>

      {Object.entries(friends).map(([nombre, likes]) => (
        <div key={nombre} className="text-center mt-4">
          <span>
            {nombre} tiene <strong>{likes}</strong> likes
          </span>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => handleClickLike(nombre, 1)}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-md p-3"
            >
              Like
            </button>
            <button
              onClick={() => handleClickLike(nombre, -1)}
              className="bg-red-500 hover:bg-red-700 text-white rounded-md p-3"
            >
              Dislike
            </button>
          </div>
        </div>
      ))}

      <div className="text-center mt-6">
        <h2 className="text-lg font-semibold text-gray-700">Media Aritmética de Likes:</h2>
        <div className="mt-2 p-4 bg-blue-100 text-blue-800 rounded-lg shadow-md inline-block">
          <p className="text-3xl font-bold">{calcularMedia()}</p>
        </div>
      </div>
    </div>
  );
}

export default ContadorDoble;
