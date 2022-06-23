import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { useState, useEffect } from "react";
// import { getAuth, signOut } from "firebase/auth";
import { UserAuth } from "../../context/AuthContext";

const NavigationBar = (props) => {
  const { loggedinEmail } = UserAuth();
  console.log("useremail:" + loggedinEmail);

  const logOutOnClickHandle = (event) => {
    localStorage.clear();
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Game Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedinEmail ? (
              <Nav.Link href="/userprofile">Profile</Nav.Link>
            ) : (
              <></>
            )}

            <Nav.Link href="/game/list">Games List</Nav.Link>
            <Nav.Link href="/game/leaderboard">Leaderboard</Nav.Link>
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
