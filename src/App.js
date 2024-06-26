import React from "react";
import Home from "./Website/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Adashboard from "./Admin/aPages/Adashboard";
import Aservice from "./Admin/aPages/Aservice";
import AddService from "./Admin/aPages/AddService";
import Alogin from "./Admin/aPages/Alogin";
import Ulogin from "./Website/Pages/Ulogin";
import Usermange from "./Admin/aPages/Usermange";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home /> </>} />
          <Route path="/about" element={<><About /> </>} />
          <Route path="/service" element={<><Service /> </>} />
          <Route path="/Ulogin" element={<><Ulogin /> </>} />


          {/* adashboard */}      
          <Route path="/dashboard" element={<><Adashboard /> </>} />
          <Route path="/Aservice" element={<><Aservice /> </>} />
          <Route path="/addservice" element={<><AddService /> </>} />
          <Route path="/usermanage" element={<><Usermange /> </>} />

          <Route path="/Alogin" element={<><Alogin /> </>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
