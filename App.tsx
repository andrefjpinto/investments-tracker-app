import React from 'react'

import NavigationContainer from './navigation/NavigationContainer'

import { Provider } from 'react-redux'
import { store } from './store/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}