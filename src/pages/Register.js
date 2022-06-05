import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        alert("Success Registration");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
    // [END auth_signup_password]
  };

  return (
    <div>
      <h1 style={{ margin: 30 }}>Register</h1>
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
        <div>
          <InputGroup className="col-md-5 my-3">
            <InputGroup.Text>Username</InputGroup.Text>
            <FormControl
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>
        </div>
        <Button className="mt-4" variant="success" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;