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

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginPage, setLoginPage] = useState(false);

  // const [userEmail, setUserEmail] = useState("");
  const { setLoggedinEmail } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert("success");
        localStorage.setItem("userEmail", userCredential.user.email);
        // setLoggedinEmail(userCredential.user.email);
        setLoggedinEmail(localStorage.getItem("userEmail"));
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
    <div>
      <h1 style={{ margin: 30 }}>Login</h1>
      <form
        style={{ paddingLeft: 100, paddingRight: 100 }}
        onSubmit={handleSubmit}
      >
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
          <a href="/forgot">Forgot Password?</a>
        </p>
        <Button className="mt-4" variant="success" type="submit">
          Login
        </Button>{" "}
        <Button className="mt-4" variant="primary" onClick={handleOnClick}>
          Login with Google
        </Button>
      </form>
    </div>
  );
}
