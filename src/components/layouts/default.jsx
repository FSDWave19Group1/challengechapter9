import React, {useState} from "react";
import NavigationBar from "../NavigationBar"
import Footer from "../Footer/Footer";
import { UserAuth } from "../../context/AuthContext";



const Layout = ({ children }) => {
  
  // const [isLoginPage, setIsLoginPage] = useState(false);

  const { userEmail } = UserAuth();
  console.log("user:" + userEmail);  

  return ( 
    <>
      <div>
        <header>
          <NavigationBar/>
        </header>
        <main className="container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
