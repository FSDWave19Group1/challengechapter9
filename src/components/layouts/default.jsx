import React from "react";
import NavigationBar from "../NavigationBar"
// import Footer from "";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <NavigationBar />
        </header>
        <main className="container">{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
