import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { FavoritesProvider } from "./contexts/FavoritesContext"
import { ReviewsProvider } from "./contexts/ReviewsContext"
import { ToastProvider } from "./contexts/ToastContext"

const App = () => {
  return (
    <ToastProvider>
      <FavoritesProvider>
        <ReviewsProvider>
          <RouterProvider router={router} />
        </ReviewsProvider>
      </FavoritesProvider>
    </ToastProvider>
  )
}

export default App