import React, { useEffect } from "react";
import NavigationBar from "../navbar/NavigationBar";
import Footer from "../Footer/Footer";
import { UserAuth } from "../../context/AuthContext";

const Layout = ({ children }) => {
  const { loggedinEmail, setLoggedinEmail } = UserAuth();

  useEffect(() => {
    setLoggedinEmail(localStorage.getItem("userEmail"));
  }, [localStorage]);

  return (
    <>
      <div className="position-relative">
        <header>
          <NavigationBar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
