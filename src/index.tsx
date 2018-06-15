import * as React from "react";
import * as ReactDOM from "react-dom";

import Hello from "./components/Hello";

// const title = 'My Typescript React Redux Webpack Setup';

ReactDOM.render(
  <Hello compiler="TypeScript" framework="React" />,
  document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}
