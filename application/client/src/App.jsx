import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/add";
import Shows from "./pages/shows";
import Update from "./pages/update";
import './App.css'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
