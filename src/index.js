import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import Routes from './routes';
import theme from './styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Routes />
    </ThemeProvider>
  );
}
