import React from "react";
// import Navbar from "";
// import Footer from "";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        {/* <header>
          <Navbar />
        </header> */}
        <main className="container">{children}</main>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
