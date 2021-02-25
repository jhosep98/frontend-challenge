import React from 'react';
import { theme } from './styled/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { PostsContextProvider } from './context/PostsContext';

// components
import { NavBar } from './components/NavBar.jsx';
import { Home } from './routes/Home.jsx';
import { DetailPage } from './routes/DetailPage.jsx';

const App = () => (
  <PostsContextProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={DetailPage} />
          </Container>
        </Switch>
      </Router>
    </ThemeProvider>
  </PostsContextProvider>
);

export default App;
