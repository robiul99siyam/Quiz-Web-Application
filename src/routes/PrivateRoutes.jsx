import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import useToken from "../hooks/useToken";
export default function PrivateRoute() {
  const { auth } = useAuth();
  const token = useToken();
  console.log(auth);
  return (
    <>
      {token ? (
        <div className="bg-[#F5F3FF] min-h-screen">
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
