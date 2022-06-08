import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth().currentUser;
    signOut()
      .then(() => {
        navigate("/");
        localStorage.removeItem("auth-token");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  });
}
