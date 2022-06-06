import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";

const NavigationBar = (props) => {
  // const [username, setUsername] = useState("");

  // const [isAuthenticated, setAuthenticated] = useState(false);
  const [showOnLogin, setShowOnLogin] = useState("d-none");
  const [showOnLogout, setShowOnLogout] = useState("d-block");

  useEffect(() => {
    // const token = localStorage.getItem("auth-token");
    // const config = {
    //   headers: {
    //     authorization: token,
    //   },
    // };
    if (localStorage.getItem("auth-token")) {
      setShowOnLogin("d-block");
      setShowOnLogout("d-none");
    }
    // console.log("navbar token:" + token);
  });

  const logOutOnClickHandle = (event) => {
    //const auth = getAuth().currentUser;
    localStorage.clear();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Game Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/game/list">Games List</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className={showOnLogout} href="/login">
              Login
            </Nav.Link>
            <Nav.Link className={showOnLogout} href="/register">
              Register
            </Nav.Link>
            <Nav.Link
              className={showOnLogin}
              href="/"
              onClick={logOutOnClickHandle}
            >
              Logout
            </Nav.Link>
            {/* <Navbar.Text className={showOnLogin}>Hi, {username}</Navbar.Text> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
