/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import Login from './src/screens/Login';

const App: () => React$Node = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;
