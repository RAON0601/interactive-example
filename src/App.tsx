import React from "react";
import { Reset } from "styled-reset";
import ShoePage from "./page/ShoePage";
import GlobalStyle from "./styles/globalStyle";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <GlobalStyle />
      <ShoePage />
    </React.Fragment>
  );
}

export default App;
