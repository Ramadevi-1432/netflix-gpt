import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Netflix_Logo_PMS, imageUrl } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscibe();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="absolute z-20 bg-gradient-to-b from-black w-full px-8 py-2 flex justify-between items-center">
      <img className="w-52" src={Netflix_Logo_PMS} alt="netflixlogo" />
      {user && (
        <div className="flex">
          <img
            src={imageUrl()}
            alt="usericon"
            className="w-8 h-8 mx-2 rounded-full"
          />
          <button
            className="bg-red-700 h-8 px-4 text-white font-bold rounded-md"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
