import { useEffect, useState } from "react";

const Saludo = () => {

    const  [ edad, setEdad ] = useState(0);
    const [ sexo, setSexo ] = useState('M');

    // useEffect(() => {
    //   console.log('Rendericando al montar el componenete');
    // });


    useEffect(() => {
        console.log('Rendericando al montar el componenete y cuando se modifica el sexo');
      }, [sexo]);


    const handleClickEdad = () => {
        setEdad((prevEdad) => prevEdad + 1 );
    }

    const handleClickSexo = () => {
        setSexo((prevSexo) =>  prevSexo === 'M' ? 'F' : 'M' );

    
    }

    

  return (
    <>
        <p>Edad : {edad}</p>
        <button onClick={handleClickEdad}>Incrementar edad</button>
        <p>Sexo : {sexo}</p>
        <button onClick={handleClickSexo}>Cambiar sexo</button>
    
       <div>Saludo</div>
    </>
)
}

export default Saludo


//efecto 2 