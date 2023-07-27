import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import DashBoard from "./pages/DashBoard";
import { useState } from "react";
import PrivateRouter from "./Components/PrivateRouter";

function App() {

  const [isLoginedIn, setLoginedIn] = useState(false);



  return (
    <div className="w-screen overflow-x-hidden h-screen bg-richblack-900  flex flex-col">
      <NavBar isLoginedIn={isLoginedIn} setLoginedIn={setLoginedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoginedIn={setLoginedIn} />} />
        <Route path="/singup" element={<SingUp setLoginedIn={setLoginedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRouter isLoginedIn={isLoginedIn}>
            <DashBoard />

          </PrivateRouter>
        } />
      </Routes>
    </div>
  )
}

export default App;
