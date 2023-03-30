import React, { useState } from "react";

type SignupProps = {
  handleFormChange: () => void;
};

const Signup = ({ handleFormChange }: SignupProps) => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [attempted, setAttempted] = useState<boolean>(false);

  // Handling the name change
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  // Handling the email change
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handling the password change
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // Handling the password change
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAttempted(true);
      return;
    }
    if (password.length < 6) {
      setAttempted(true);
      return;
    }

    if (username === "" || email === "") {
      setAttempted(true);
      return;
    }
  };

  return (
    <div className="p-6 w-96">
      <h2 className="text-2xl font-bold text-center pb-4 text-gray-800">
        Create and Account
      </h2>
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label
          className="text-sm font-semibold pb-1 text-gray-700"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="text"
          onChange={handleName}
          value={username}
        />
        {username === "" && attempted && (
          <p className="text-red-600 mb-2">👋 Please enter a username</p>
        )}
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
        {email === "" && attempted && (
          <p className="text-red-600 mb-2">👋 Please enter an email</p>
        )}
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
        {password.length < 6 && attempted && (
          <p className="text-red-600 mb-2">
            👋 Passwords must be at least 6 characters
          </p>
        )}
        <label
          className="text-sm font-semibold pb-1 text-gray-700"
          htmlFor="Confirm Password"
        >
          Re-enter password
        </label>
        <input
          className="border border-gray-300 rounded-md px-2 py-1 mb-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="password"
          onChange={handleConfirmPassword}
          value={confirmPassword}
        />
        {password !== confirmPassword && attempted && (
          <p className="text-red-600 mb-2">👋 Passwords do not match</p>
        )}
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold my-2 py-1 px-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
      <p className="mt-4 text-sm text-gray-700 text-center">
        Already have an account?{" "}
        <span
          className="
          text-blue-500 cursor-pointer hover:underline
        "
          onClick={() => handleFormChange()}
        >
          Sign in
        </span>
      </p>
    </div>
  );
};

export default Signup;