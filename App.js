import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Rootstack from './root-navigator/index'
import { Provider } from "react-redux";
import { store, persistor } from "./src/publics/redux/store.js";
import { PersistGate } from 'redux-persist/es/integration/react'


const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Rootstack />
    </PersistGate>
  </Provider>
)

export default App
