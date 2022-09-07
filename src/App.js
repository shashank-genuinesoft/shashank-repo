import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./Components/Nav/NavBar";
import Footer from  "./Components/footer/Footer"
import Education from "./Containers/education/education";
import { themes } from "./theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./screens/Home";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  console.log("shashank",)
  return (
    <div style={{
      backgroundColor:themes[theme].background
    }}>
   
     <Router>
     <NavBar theme={themes[theme]} setTheme={setTheme} />
     <Routes>
     <Route path="/" element={<Home theme={themes[theme]} setTheme={setTheme} />} />
     <Route path="/education" element={<Education theme={themes[theme]} setTheme={setTheme} />} />
     </Routes>
     <Footer theme={themes[theme]} setTheme={setTheme} />
     </Router>
    </div>
  );
}

export default App;