import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Field";

export default function LoginForm() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/auth/login`,
        formData
      );

      if (response.status === 200) {
        const { tokens, user } = response.data.data;

        const authToken = tokens.accessToken;
        const refreshToken = tokens.refreshToken;

        setAuth({ user, authToken, refreshToken });
        console.log(user.role);
        if (user.role === "admin") {
          navigate("/DeshBoard");
        } else {
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error?.message);
      alert(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <Field label="Enter your username or email address" error={errors.email}>
        <input
          {...register("email", { required: "Email is Required" })}
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="Username or email address"
        />
      </Field>
      <Field label="Enter your Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 8,
              message:
                "Your password must be at least 8 characters. Include an uppercase letter, a lowercase letter, a number, and a special character.",
            },
          })}
          type="password"
          id="password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300"
          placeholder="Password"
        />
      </Field>
      <Field label="Login as Admin" error={errors.checkbox}>
        <input
          {...register("checkbox")}
          type="checkbox"
          id="checkbox"
          className="m-2"
        />
      </Field>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 rounded-lg mb-4"
      >
        Sign in
      </button>
    </form>
  );
}
