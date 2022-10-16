import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState();

  // component did mount
  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("user"));
    setUser({
      email: result.email,
    });
  }, []);

  // logout
  const handleLogout = () => {
    localStorage.clear();

    window.location.reload();
  };

  return (
    <div
      className="
      w-screen min-h-screen flex flex-col max-w-[1200px] mx-auto pt-20
    "
    >
      {/* 
      
      user && user.email
      Jika user: sudah ada datanya maka && panggil user.email 
      
      user?.email
      ketika user bernilau true maka ambil property email

      */}
      <h1 className="text-4xl">
        Welcome <b className="text-4xl"> {user?.email} </b>
      </h1>

      <button
        className="h-12 bg-slate-800 text-white rounded-md w-[120px] mt-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}
