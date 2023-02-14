import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function User({ login, user }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/");
    }
  }, [login, navigate]);

  return (
    <div className="font-bold text-cyan-900 text-4xl mt-5 mb-2 text-center">
      Welcome {user}!
    </div>
  );
}
