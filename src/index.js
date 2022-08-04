import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import * as serviceWorker from './serviceWorker';

const el = document.getElementById("app");

ReactDOM.render(<App />, el);

serviceWorker.unregister();