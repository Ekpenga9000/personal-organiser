import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Landing from "./pages/Landing";
import Nav from "./components/Nav";


function App() {
   return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
