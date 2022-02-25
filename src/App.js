import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/signin" exact>
            <h1>Sign in</h1>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
