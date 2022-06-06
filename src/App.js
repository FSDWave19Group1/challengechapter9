import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import firebase from "./services/firebase";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Logout from "./pages/Logout";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/profile" element={<Profile></Profile>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          {/* <Route path="/logout" element={<Logout></Logout>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
