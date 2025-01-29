import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"
import { PokemonProvider } from "./context/PokemonContext"
import { Toaster } from "sonner"

const App = () => {
  return (
    //cuando usemos React Router Dºom App solo deberiatener el router provider
    // Y el resto de las cosas deberian de estar en RootLayout
    <>
      <PokemonProvider>
        <Toaster position="top-right" richColors duration={2000}/>
        <RouterProvider router={router} />    
      </PokemonProvider>
    </>
  )
}

export default App