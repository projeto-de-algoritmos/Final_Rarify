import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "pages/Home";
import LearnMore from "pages/LearnMore";
import Header from "components/Header";

function App() {
  return (
    <div style={{ flex: 1, borderCollapse: "collapse" }}>
      <Router>
        <Header />
        <div
          style={{
            flex: 1,
            height: "calc(100% - 64px)",
          }}
        >
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/learn-more">
              <LearnMore />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
