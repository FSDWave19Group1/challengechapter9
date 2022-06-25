import React, {useState,useEffect} from "react";
import NavigationBar from "../NavigationBar"
import Footer from "../Footer/Footer";
import { UserAuth } from "../../context/AuthContext";


const Layout = ({ children }) => {
  
  // const [isLoginPage, setIsLoginPage] = useState(false);
  const { loggedinEmail, setLoggedinEmail } = UserAuth();
  // console.log("user:" + loggedinEmail);  

  useEffect(() => {
    setLoggedinEmail(localStorage.getItem("userEmail"));
  }, [localStorage]);

  return ( 
    <>
      <div>
        <header>
          <NavigationBar/>
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
