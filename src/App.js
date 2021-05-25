import React from "react";
import DataSource from "./examples/DataSource";
import HelloWorld from "./examples/HelloWorld";
import ListGrid from "./examples/ListGrid";

const ISC = window["isc"];

function App() {
  if (ISC) {
    HelloWorld(ISC);
    DataSource.create(ISC);
    ListGrid.create(ISC);
  }
  return <React.Fragment />;
}

export default App;
