
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import Main from './components/Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/users" component={Users} exact />
      </Switch>
    </Router>
  );
}

export default App;
