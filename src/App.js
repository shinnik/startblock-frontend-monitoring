import React from 'react';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import Tumbler2 from "./components/Tumbler2/Tumbler2";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Main />
        <Tumbler2/>
    </ThemeProvider>
  );
}

export default App;
