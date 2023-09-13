import React, { useState, useRef } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  useDeviceLanguage,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleValidForm = () => {
    const message = validateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://tse3.mm.bing.net/th?id=OIP.HHVUf3TYqncgpJXyCMmxyAHaHa&pid=Api&P=0&h=180",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };
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
            ref={name}
            type="text"
            placeholder="Name"
            className="py-2 px-4 w-full my-2 bg-neutral-800 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="py-2 px-4 w-full my-2 bg-neutral-800 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="py-2 px-4 w-full my-2  bg-neutral-800 rounded-md"
        />
        <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>
        <button
          className="bg-red-800 py-2 px-4 w-full my-6 rounded-md"
          onClick={() => handleValidForm()}
        >
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
