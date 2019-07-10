import React from 'react';
import Tumbler from './components/Tumbler/Tumbler';
import EnergyCell from "./components/EnergyCell/EnergyCell";
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <EnergyCell name={'Alpha'} money={123} />
        <Tumbler direction={'r'} />
    </ThemeProvider>
  );
}

export default App;
