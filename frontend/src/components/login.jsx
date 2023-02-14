import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setLogin, setUser, login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(login){
      navigate('/user')
    }

  }, [login, navigate])



  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSignin = async (event) => {
    event.preventDefault();
    let data = {
      username: username,
      password: password,
    };

    await fetch(`http://localhost:8000/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((info) => {
        setLogin(info.status);
        if (info.status) {
          setUser(username);
          navigate("/user");
        } else {
          setUsername("");
          setPassword("");
        }
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen w-full">
        <div className="w-11/12 md:w-6/12 lg:w-3/12">
          <img
            src={require("../assets/ic_user.png")}
            className="bg-gray-200 rounded-full w-28 h-28 p-6 mx-auto"
            alt="..."
          />
          <div className="font-bold text-cyan-900  text-4xl mt-5 mb-2 text-center">
            Welcome!
          </div>
          <div className="text-cyan-900 text-sm text-center mb-5">
            Let's connect to your workspace. <br />
            Please enter your crendentials to continue.
          </div>
          <div>
            <form className="">
              <input
                className="block border-2 rounded mx-auto w-full p-2 mb-3"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleUsername}
                value={username}
              />
              <input
                className="block border-2 rounded mx-auto mb-6 w-full p-2"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handlePassword}
                value={password}
              />
              <button
                onClick={handleSignin}
                className="block bg-blue-800 text-white rounded mx-auto w-full h-12"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
