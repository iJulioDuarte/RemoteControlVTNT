import { BrowserRouter, Route, Routes } from "react-router-dom"
import Controll from "./pages/home/index"
import Stats from "./pages/stats"

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Controll />}
        />

        <Route 
          path="/stats"
          element={<Stats />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
