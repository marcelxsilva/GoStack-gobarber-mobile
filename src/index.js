import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store'
export default function src() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar
          barStyle='dark-content'
          backgroundColor='#7159c1'
        />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
