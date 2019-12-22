import React from 'react';
import { StatusBar } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';
import theme from './styles/theme';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
