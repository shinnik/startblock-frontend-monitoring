import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import PlotContainer from "./containers/PlotContainer/PlotContainer";

function App() {
  return (
    <ThemeProvider theme={theme}>
        {/*<Main/>*/}
        <PlotContainer/>
    </ThemeProvider>
  );
}

export default App;
