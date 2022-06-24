import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebase from "./services/firebase";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./components/layouts/default";
import Home from "./pages/landingPage";
import Forgot from "./pages/Forgot";
import GameList from "./pages/GameList";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import GameSuit from "./pages/game/suit";
import { UserAuth } from "./context/AuthContext";

function App() {
  const { loggedinEmail } = UserAuth();
  console.log("user:" + loggedinEmail);

  return (
    <Router>
      <Routes>
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
          path="/forgot"
          element={
            <Layout>
              <Forgot />
            </Layout>
          }
        ></Route>
        <Route
          path="/game/list"
          element={
            <Layout>
              <GameList />
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
        <Route
          path="/game/leaderboard"
          element={
            <Layout>
              <Leaderboard />
            </Layout>
          }
        ></Route>
        <Route path="/game/suit" element={<GameSuit />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
