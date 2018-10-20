import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./ducks/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <nav className="topnav">
              <Header />
            </nav>
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
