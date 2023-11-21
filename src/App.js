import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min"; 

import Setups from "./setup_modes/Setups";
import Duel from "./setup_modes/Duel";
import Triangular from "./setup_modes/Triangular";
import Quad from "./setup_modes/Quad";

import CheckMeet from "./checkmeet_mode/CheckMeet";
import RunMode from "./run_mode/RunMode";
import PostMeet from "./postmeet_mode/PostMeet";

function App() {
  return (
    <Router>
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
        <Route path="/checkmeet" exact>
          <CheckMeet />
        </Route>
        <Route path="/run">
          <RunMode />
        </Route>
        <Route path="/postmeet" exact>
          <PostMeet />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
