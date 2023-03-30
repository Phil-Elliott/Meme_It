import React, { useState } from "react";

type LoginProps = {
  handleFormChange: () => void;
};

const Login = ({ handleFormChange }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handling the email change
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handling the form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="p-6 w-96">
      <h2 className="text-2xl font-bold text-center pb-4 text-gray-800">
        Login to Your Account
      </h2>
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label
          className="text-sm font-semibold pb-1 text-gray-700"
          htmlFor="Email"
        >
          Email
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="email"
          onChange={handleEmail}
          value={email}
        />
        {error && <p className="">👋 Invalid email or password</p>}
        <label
          className="text-sm font-semibold pb-1 text-gray-700"
          htmlFor="Password"
        >
          Password
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="password"
          onChange={handlePassword}
          value={password}
        />
        {/* <p className={styles.forgot}>Forgot Password</p> */}
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold my-2 py-1 px-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-700 text-center">
        Don't have an account?{" "}
        <span
          className="
          text-blue-500 cursor-pointer hover:underline
        "
          onClick={() => handleFormChange()}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
