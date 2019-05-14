import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./src/Hello";
ReactDOM.render(
  <Hello compiler="Typescript" framework="React" bundler="Webpack" />,
  document.getElementById("root")
);
