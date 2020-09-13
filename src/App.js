import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import homepage from "./pages/homepage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={homepage} path="/" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
