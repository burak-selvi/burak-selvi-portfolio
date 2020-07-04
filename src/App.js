import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
