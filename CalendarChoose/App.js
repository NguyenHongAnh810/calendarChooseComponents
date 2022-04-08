/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Calendar from './src';
import {store} from './src/store/store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={store}>
      <Calendar />
    </Provider>
  );
};
export default App;
