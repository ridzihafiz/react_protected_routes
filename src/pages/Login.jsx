import React from "react";

export default function Login() {
  const handleLogin = (e) => {
    // stop default form
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // validasi
    if (!email || !password) {
      return alert("email and password are wrong");
    }

    if (password.length < 6) {
      return alert("password must have 6 characters");
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        password: btoa(password),
      })
    );

    // reload page
    window.location.reload();
  };

  return (
    <main
      className="
      w-screen min-h-screen flex flex-col max-w-[1200px] items-center mx-auto pt-20
    "
    >
      <form
        className=" bg-white p-6 flex flex-col gap-4 shadow-lg rounded-md w-full max-w-[500px] "
        autoComplete="off"
        onSubmit={handleLogin}
      >
        <div className=" flex flex-col gap-2 ">
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            className=" h-12 px-3 border-[1px] border-gray-300 rounded-md "
          />
        </div>

        <div className=" flex flex-col gap-2 ">
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            className=" h-12 px-3 border-[1px] border-gray-300 rounded-md "
          />
        </div>

        <div className="flex mt-4">
          <button className="w-[120px] h-12 bg-blue-700 hover:bg-blue-500 text-white rounded-md ml-auto">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}
