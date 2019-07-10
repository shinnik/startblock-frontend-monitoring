import React from 'react';
import Tumbler from './components/Tumbler/Tumbler';
import EnergyCell from "./components/EnergyCell/EnergyCell";
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <EnergyCell name={'Alpha'} money={123} />
        <Tumbler direction={'r'} power={false} />
        <Tumbler direction={'l'} power={false} />
        <Tumbler direction={'u'} power={false} />
        <Tumbler direction={'d'} power={false} />
        <Tumbler direction={'ru'} power={false} />
        <Tumbler direction={'rd'} power={false} />
        <Tumbler direction={'lu'} power={false} />
        <Tumbler direction={'ld'} power={false} />
    </ThemeProvider>
  );
}

export default App;
