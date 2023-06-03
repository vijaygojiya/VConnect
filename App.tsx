import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {Layout} from './src/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <GestureHandlerRootView style={Layout.fill}>
      <ApplicationNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
