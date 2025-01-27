import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Router"

const App = () => {
  return (
    //cuando usemos React Router Dºom App solo deberiatener el router provider
    // Y el resto de las cosas deberian de estar en RootLayout
    <>
      <PokemonProvider>
        <RouterProvider router={router} />    
      </PokemonProvider>
    </>
  )
}

export default App