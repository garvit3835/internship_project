import Login from "./components/login";
import User from "./components/user";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [login, setLogin] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/authcheck", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setLogin(data.status);
          console.log(data.status);
          console.log(data.user);
          if (data.status) {
            setUser(data.user);
            console.log(data);
          }
        })
        .catch(() => {
          setLogin(false);
        });
    setInterval(() => {
      fetch("http://localhost:8000/authcheck", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          setLogin(data.status);
          console.log(data.status);
          console.log(data.user);
          if (data.status) {
            setUser(data.user);
            console.log(data);
          }
        })
        .catch(() => {
          setLogin(false);
        });
    }, 30000);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8000/authcheck", {
  //     credentials: "include",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setLogin(data.status);
  //       console.log(data.status);
  //       console.log(data.user);
  //       if (data.status) {
  //         setUser(data.user);
  //         console.log(data);
  //       }
  //     })
  //     .catch(() => {
  //       setLogin(false);
  //     });
  // }, []);

  // console.log(user);

  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login setLogin={setLogin} setUser={setUser} login={login} />
            }
          />
          <Route path="/user" element={<User login={login} user={user} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
