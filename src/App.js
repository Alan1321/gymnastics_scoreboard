import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min"; 

import Header from "./utils/Header"

import Setups from "./setup_modes/Setups";
import Duel from "./setup_modes/Duel";
import Triangular from "./setup_modes/Triangular";
import Quad from "./setup_modes/Quad";

import RunMode from "./run_mode/RunMode";
import PostMeet from "./postmeet_mode/PostMeet";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Setups />
        </Route>
        <Route path="/duel" exact>
          <Duel />
        </Route>
        <Route path="/triangular" exact>
          <Triangular />
        </Route>
        <Route path="/quad" exact>
          <Quad />
        </Route>
        <Route path="/run">
          <RunMode />
        </Route>
        <Route path="/postmeet" exact>
          <PostMeet />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
