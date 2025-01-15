
const Padre = (params) => {
  
  const { info, setInfo, children, handlerClickSumar } = params;

  const handlerClick = () => {
    setInfo( { ...info, nombre: "Alvaro" } );

  };


  return (
    <>
    <section>
      <h2>Bienvenido {info.nombre}</h2>
      <p>Tu edad es : {info.edad}</p>
        {info.edad <18 
        ? ("Eres menor de edad")
        : ("Eres mayor de edad")}
      
      {info.isAdmin && (<p>Eres administrador</p>)}
      <hr />
      <br />
      <div>
        <button className="bg-blue-200 hover:bg-blue-500 text-black rounded-md p-1" onClick={handlerClick}>Modificar</button>
        <button className="bg-green-200 hover:bg-green-500 text-black rounded-md p-1 ml-2" onClick={handlerClickSumar}>Sumar edad</button>
      </div>
    </section>
    <section>
      {children}
    </section>
    </>
  )
}

export default Padre