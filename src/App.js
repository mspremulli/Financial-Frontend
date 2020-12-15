import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {Router, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Login />
      <Signup />
    </BrowserRouter>
    </div>
  );
}

export default App;
