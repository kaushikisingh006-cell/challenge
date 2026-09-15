import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewsIntelligence from "./pages/NewsIntelligence";

function App() {
  const [searchTerm,setSearchTerm] = useState(" ");
  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar />

        <div className="main-area">
     <Navbar
       searchTerm={searchTerm}
       setSearchTerm={setSearchTerm}
       />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
              path="/news"
              element={<NewsIntelligence searchTerm={searchTerm} />}
               />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;