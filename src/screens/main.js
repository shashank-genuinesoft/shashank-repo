import React, { useState} from "react";
import { BrowserRouter as Router, Route,Routes, Navigate} from "react-router-dom";
import Home from "./Home";
import NavBar from "../Components/Nav/NavBar";
import Footer from "../Components/footer/Footer";
import Education from "../Containers/education/education";
import { themes } from "../theme";
import Projects from "../Containers/projects/Projects/Projects"
import Splash from "../Containers/splash/Splash";
function Main(propss) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
   
    return (
      <div style={{
        backgroundColor:themes[theme].background
      }}>
     
       <Router >
       <NavBar theme={themes[theme]} setTheme={setTheme} />
       <Routes>
      
       <Route path="/" element={<Home theme={themes[theme]} setTheme={setTheme} />} />
       <Route path="/projects" element={<Projects theme={themes[theme]} setTheme={setTheme} />} />
       <Route path="/education" element={<Education theme={themes[theme]} setTheme={setTheme} />} />
       </Routes>
       <Footer theme={themes[theme]} setTheme={setTheme} />
       </Router>
      </div>
    );
  }
  
  export default Main;