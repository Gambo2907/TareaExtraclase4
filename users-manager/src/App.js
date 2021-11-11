import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import NewUsers from './NewUsers'
function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar></Navbar>
        <div className = "content">
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/new-users">
              <NewUsers></NewUsers>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
