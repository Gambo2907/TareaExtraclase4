import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import NewUsers from './NewUsers';
import UpdateUsers from './UpdateUsers';
import DeleteUsers from './DeleteUsers';
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
            <Route path = "/update-users">
              <UpdateUsers></UpdateUsers>
            </Route>
            <Route path = "/delete-users">
             <DeleteUsers></DeleteUsers> 
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
