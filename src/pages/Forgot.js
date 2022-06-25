import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

export default function Register() {
    const [email, setEmail] = useState("");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
    };

    return (
        <div>
          <h1 style={{ margin: 30 }}>Forgot Password</h1>
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
    
            <Button className="mt-4" variant="success" type="submit">
              Submit
            </Button>
          </form>
        </div>
      );


}

