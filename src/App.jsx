import React from 'react';
import { theme } from './styled/theme';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

// components
import { NavBar } from './components/NavBar.jsx';
import { HomeContainer } from './components/HomeContainer.jsx';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
    <Container>
      <HomeContainer />
    </Container>
  </ThemeProvider>
);

export default App;
