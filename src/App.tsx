import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./App.css"
import Loader from "./shared/Loader/Loader"
import ModalContextProvider from "./contexts/modalContext"
const Registration = lazy(() => import("./modules/Registration/Registration"))

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ModalContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </ModalContextProvider>
    </Suspense>
  )
}

export default App
