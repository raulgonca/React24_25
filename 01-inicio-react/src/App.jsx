import { useState } from 'react'
import ProductList from './components/useEffectFetching/ProductList.jsx';
// import Saludo from './components/useEffect/Saludo.jsx';
// import Hijo from './components/parametros/Hijo.jsx'
// import Padre from './components/parametros/Padre.jsx'
// import Contador from './components/Contador.jsx'
// import ContadorDoble from './components/ContadorDoble.jsx'

const initialInfo = { nombre: 'Raul', edad: 15, isAdmin: true };

function App() {
  const [info, setInfo] = useState( initialInfo );  

  // const handlerClickSumar = () => {
  //   setInfo((prevInfo) => ({ ...prevInfo, edad: prevInfo.edad + 1 }));

  // };

  return (
    <>
      {/* <div className='min-h-screen bg-gray-400 p-8'>
        <h1 className='text-3xl font-bold text-center mb-20'>
          Ejemplos de componentes y estados en react
        </h1>
        <div className=' mb-8'>
          <Contador />
        </div>

        <div className='mb-8'>
          <ContadorDoble />
        </div>

         </div> 
        <p>El nombre es : {info.nombre}</p>
        <p>El nombre es : {info.edad}</p>
        <br /><hr />
        <Padre info={ info } setInfo={ setInfo } handlerClickSumar={ handlerClickSumar }>
          <Hijo info={ info } handlerClickSumar={ handlerClickSumar } />
        </Padre> 
        <Saludo /> */}

        <ProductList />

    </>
    
  )
}

export default App