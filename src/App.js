import React, { useEffect } from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import PlotContainer from "./containers/PlotContainer/PlotContainer";
import classes from './App.module.scss';
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import { w3cwebsocket as W3CWebSocket } from "websocket";


function App() {
    return (
      <ThemeProvider theme={theme}>
          <div className={classes.App}>
              <HeaderContainer/>
              <Main/>
              <PlotContainer/>
          </div>
      </ThemeProvider>
    );
}

export default App;
