import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import PlotContainer from "./containers/PlotContainer/PlotContainer";
import classes from './App.module.scss';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <div className={classes.App}>
            <Main/>
            <PlotContainer/>
        </div>
    </ThemeProvider>
  );
}

export default App;
