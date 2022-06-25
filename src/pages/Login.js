import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../assets/css/login.css";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setLoginPage] = useState(false);

  const { setLoggedinEmail, setLoggedinUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert("success");
        localStorage.setItem("userEmail", userCredential.user.email);
        localStorage.setItem("user", JSON.stringify(userCredential.user));
        // setLoggedinEmail(userCredential.user.email);
        setLoggedinEmail(localStorage.getItem("userEmail"));
        setLoggedinUser(localStorage.getItem("user"));
        getCurrentUser();
        navigate("/");
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const getCurrentUser = async () => {
    const user = await getAuth().currentUser;
    // console.log("User: ", user);
    // console.log("Access Token: ", user.accessToken);
    // localStorage.setItem("auth-token", user.accessToken);
  };

  const handleOnClick = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="login-background">
      <div className="container my-4 d-flex justify-content-center">
        <div className="login-card">
          <h1 style={{ textAlign: "center", marginBottom: "1em" }}>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <InputGroup className="col-md-5 my-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <FormControl
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>
            </div>
            <div>
              <InputGroup className="col-md-5  my-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <FormControl
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </div>
            <p>
              <a href="/forgot" style={{ color: "yellow" }}>
                Forgot Password?
              </a>
            </p>
            <div className="mt-4">
              <Button className="me-2" variant="success" type="submit">
                Login
              </Button>
              <Button variant="primary" onClick={handleOnClick}>
                Login with Google
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
