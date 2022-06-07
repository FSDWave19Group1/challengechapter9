
import './App.css';
import firebase from './services/firebase';
import Register from './pages/Register';
import Login from './pages/Login'
import { Leaderboard } from './pages/Leaderboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Register />
    </div>
  );
}

export default App;
