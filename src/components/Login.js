import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgimage"
        />
      </div>
      <form
        className="bg-black absolute my-40 mx-auto right-0 left-0 w-1/4 p-12 bg-opacity-80 rounded-lg text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl font-semibold my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-4 w-full my-2 bg-neutral-800 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email address"
          className="py-2 px-4 w-full my-2 bg-neutral-800 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="py-2 px-4 w-full my-2  bg-neutral-800 rounded-md"
        />
        <button className="bg-red-800 py-2 px-4 w-full my-6 rounded-md">
          {isSignIn ? "Sign In" : "Sign Up "}
        </button>
        <p>
          {isSignIn ? " Already a member?" : " New to Netflix?"}
          <span
            className="text-red-600 cursor-pointer"
            onClick={() => setIsSignIn(!isSignIn)}
          >
            {isSignIn ? " Sign In Now" : " Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
