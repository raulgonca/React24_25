import Contador from './components/Contador.jsx'
import ContadorDoble from './components/ContadorDoble.jsx'

function App() {
  

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-8'>
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
    </>
    
  )
}

export default App