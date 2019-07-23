import React, { useEffect } from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import PlotContainer from "./containers/PlotContainer/PlotContainer";
import classes from './App.module.scss';
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('wss://onder2.herokuapp.com');

function App() {
    useEffect(() => {
       client.onopen = () => {
           console.log('WebSocket Client Connected');
       };
    }, []);
    useEffect(() => {
        client.onmessage = (message) => {
            console.log(message);
        };
    });

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
