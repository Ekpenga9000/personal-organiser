import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Notfound from "./pages/NotFound";


function App() {
   return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
