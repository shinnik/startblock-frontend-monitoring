import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Main/>
    </ThemeProvider>
  );
}

export default App;
