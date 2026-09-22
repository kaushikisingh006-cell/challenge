import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewsIntelligence from "./pages/NewsIntelligence";
import Events from "./pages/Events";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";

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
              <Route path="/news" 
              element={<NewsIntelligence searchTerm={searchTerm} />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/events" element={<Events searchTerm={searchTerm} />} />
              <Route path="/alerts" element={<Alerts />} />
              
            </Routes>
            
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;