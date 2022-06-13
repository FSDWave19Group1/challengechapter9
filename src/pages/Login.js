import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert("success");
        getCurrentUser();
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  const getCurrentUser = async () => {
    const user = await getAuth().currentUser;
    // console.log("User: ", user);
    console.log("Access Token: ", user.accessToken);
    localStorage.setItem("auth-token", user.accessToken);
    navigate("/");
  };

  const handleOnClick = () => {

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
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
        </Button>{' '}

        <Button className="mt-4" variant="primary" type="submit" onClick={handleOnClick}>
          Login with Google
        </Button>
      </form>
    </div>
  );
}


