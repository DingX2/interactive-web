import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FirstPage } from "./pages/firstPage"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first" element={<FirstPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
