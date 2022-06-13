import React from "react";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
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
