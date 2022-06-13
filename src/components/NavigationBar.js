import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
// import { getAuth, signOut } from "firebase/auth";
import { UserAuth } from "../context/AuthContext";

const NavigationBar = (props) => {
  // const { setLoggedinEmail } = UserAuth();
  // const [isAuthenticated, setAuthenticated] = useState(false);
  // const [showOnLogin, setShowOnLogin] = useState("d-none");
  // const [showOnLogout, setShowOnLogout] = useState("d-block");

  // useEffect(() => {
  //   // const token = localStorage.getItem("auth-token");
  //   // const config = {
  //   //   headers: {
  //   //     authorization: token,
  //   //   },
  //   // };
  //   // if (localStorage.getItem("auth-token")) {
  //   //   setShowOnLogin("d-block");
  //   //   setShowOnLogout("d-none");
  //   // }
  //   // console.log("navbar token:" + token);
  //   setUserEmail(localStorage.getItem("userEmail"));
  // }, [localStorage]);

  const { loggedinEmail } = UserAuth();
  console.log("useremail:" + loggedinEmail);

  const logOutOnClickHandle = (event) => {
    //const auth = getAuth().currentUser;
    localStorage.clear();
  };

  // const showLoginPage = () => {
  //   props.onShowLoginPage();
  // };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Game Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/userprofile">Profile</Nav.Link>
            <Nav.Link href="/game/list">Games List</Nav.Link>
          </Nav>

          {loggedinEmail ? (
            <Nav>
              <Nav.Link
                // className={showOnLogin}
                href="/"
                onClick={logOutOnClickHandle}
              >
                Logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link
                // className={showOnLogout}
                href="/login"
                // onClick={showLoginPage}
              >
                Login
              </Nav.Link>
              <Nav.Link
                // className={showOnLogout}
                href="/register"
                // onClick={showLoginPage}
              >
                Register
              </Nav.Link>
            </Nav>
          )}

          {/* <Navbar.Text className={showOnLogin}>Hi, {username}</Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
