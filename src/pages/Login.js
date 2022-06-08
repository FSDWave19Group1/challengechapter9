import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

        <Button className="mt-4" variant="success" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
