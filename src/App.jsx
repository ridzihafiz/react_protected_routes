import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Biodata from "./pages/Biodata";

export default function App() {
  // state
  const [isLogin, setIsLogin] = useState(false);

  // check is there any user in localstorage
  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      return setIsLogin(true);
    }

    setIsLogin(false);
  }, []);

  // if user already login
  if (isLogin) {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/biodata" element={<Biodata />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
