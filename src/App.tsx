import { BrowserRouter, Routes, Route } from "react-router-dom"; 


function App() {
   return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="text-3xl font-bold underline">Hello world!</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
