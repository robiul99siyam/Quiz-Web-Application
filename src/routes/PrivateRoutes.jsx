import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
export default function PrivateRoute() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      {auth?.user ? (
        <div className="bg-[#F5F3FF] min-h-screen">
          <Outlet />
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
