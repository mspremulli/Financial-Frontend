import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route path = '/login'> <Login /> </Route>
        <Route path = '/signup'> <Signup /> </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
