import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import "./responsive.css";
import { BrowserRouter, Route, Router, Routes, json } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          
        <Route exact={true} path="/" element={<SignIn />} />
          <Route exact={true} path="/signIn" element={<SignIn />} />
          <Route exact={true} path="/signUp" element={<SignUp />} />
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
