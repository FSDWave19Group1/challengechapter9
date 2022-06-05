import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
