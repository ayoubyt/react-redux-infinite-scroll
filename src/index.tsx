import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./redux/stroreConfig";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
