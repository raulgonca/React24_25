import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"

const App = () => {
  return (
    //cuando usemos React Router Dºom App solo deberiatener el router provider
    // Y el resto de las cosas deberian de estar en RootLayout
    <>
      <RouterProvider router={router} />    
    </>
  )
}

export default App