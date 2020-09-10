import React from "react";
import { createGlobalStyle } from "styled-components";
import { Normalize } from "styled-normalize";
import { Provider } from "react-redux";
import store from "store";
import { AppContainer } from "components/AppContainer";
const GlobalStyle = createGlobalStyle`
  body{
    background: #ccc;
    margin-right: 20%;
    margin-left: 20%;
    position: relative;
  }
`;

export const App = () => {
  return (
    <Provider store={store}>
      <Normalize />
      <GlobalStyle />
      <AppContainer/>
    </Provider>
  );
};
