import "./App.css";
import React, { useState} from "react";
import Main from "./screens/main";
import { themes } from "./theme";
import Splash from "./Containers/splash/Splash";
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Main theme={themes[theme]} setTheme={setTheme} />
   
  ) : (
    <Splash theme={themes[theme]} setTheme={setTheme} />
  );
}

export default App;