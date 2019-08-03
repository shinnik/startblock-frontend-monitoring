import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {ThemeProvider} from "@material-ui/styles";
import theme from './styles/theme';
import Main from "./containers/Main/Main";
import LoginPage from './pages/LoginPage/LoginPage';
import PlotContainer from "./containers/PlotContainer/PlotContainer";
import classes from './App.module.scss';
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";

function App() {

  const [loggedIn, setLogged] = useState(false);

  return (
    <ThemeProvider theme={theme}>
        <div className={classes.App}>
          <Router basename={process.env.PUBLIC_URL}>
            <Switch>
              {loggedIn && <Route exact path='/' component={() => (
                <Fragment>
                  <HeaderContainer/>
                  <Main/>
                  <PlotContainer/>
                </Fragment>
              )} />}
              <Route exact path='/login' component={() => <LoginPage loggedIn={loggedIn} setLogged={setLogged}/>}/>
              <Redirect to={!loggedIn ? '/login' : '/'}/>
            </Switch>
          </Router>
            
        </div>
    </ThemeProvider>
  );
}

export default App;
