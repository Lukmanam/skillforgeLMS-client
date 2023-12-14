import React, { useState } from "react";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleusernameChange = (e) => {
    console.log("username changing");
    setUsername(e.target.value);
  };
  const handlepasswordChange = (e) => {
    console.log("password changing");
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("USERNAME :", username);
    console.log("PASSWORD :", password);
  };

  return (
    <div className="mb-16">
      <div className="logo w-60 ml-11 mb-5">
        <img src="./assets/skillforge.svg" alt="logo" />
      </div>
      <div className="flex items-center justify-center  ">
        
        <div className="bg-white p-8 rounded shadow-md w-96  ">
          <h1 className="text-2xl font-bold mb-4 mt-8">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-2 text-left mt-12"
              >
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleusernameChange}
                placeholder="Enter your User name"
                className="border border-gray-300 rounded-full px-5 py-2 w-full focus:outline-none focus:border-blue-500 "
                style={{ borderColor: "#49BBBD" }}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-2 text-left "
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enetr your Password"
                onChange={handlepasswordChange}
                className="border border-gray-300 mb-4 rounded-full px-3 py-2 w-full focus:outline-none focus:border-blue-500"
                style={{ borderColor: "#49BBBD" }}
              />
            </div>
            <button
              type="Submit"
              className="text-white rounded-full px-4 py-2 w-full font-semibold hover:bg-blue-600 mt-5 mb-4"
              style={{ backgroundColor: "#49BBBD" }}
            >
              Login
            </button>
     
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
