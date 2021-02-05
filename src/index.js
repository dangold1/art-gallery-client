import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import "./styles.css";
import Lobby, { reducer as lobbyReducer } from "./Pages/Lobby";

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Lobby />
    </div>
  );
}

const store = createStore(
  combineReducers({
    lobby: lobbyReducer
  })
);

const WrappedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<WrappedApp />, rootElement);
