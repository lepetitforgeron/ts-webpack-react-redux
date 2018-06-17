import * as React from "react";
import { render } from "react-dom";

import App from "./containers/App";
import Hello from "./components/Hello/Hello";

render(
  <App />,
  document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
