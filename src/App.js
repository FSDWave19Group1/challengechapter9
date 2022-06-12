import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import firebase from "./services/firebase";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/layouts/default";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        ></Route>
        <Route
          path="/userprofile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        ></Route>
        {/* <Route path="/game/list" element={<GameList />}></Route> */}
        {/* <Route path="/game/suit" element={<GameSuit />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
