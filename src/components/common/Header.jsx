import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import useToken from "../../hooks/useToken";

export default function Header() {
  const navigate = useNavigate();
  const token = useToken();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <header className="flex justify-between items-center mb-12">
      <img src={logo} className="h-7" />
      <div>
        {token ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors font-bold"
          >
            Logout
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors font-bold"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded hover:bg-primary hover:text-white transition-colors font-bold"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
