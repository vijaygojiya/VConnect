import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {Layout} from './src/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {UserProvider} from './src/providers/user-provider';

const App = () => {
  return (
    <UserProvider>
      <GestureHandlerRootView style={Layout.fill}>
        <ApplicationNavigator />
      </GestureHandlerRootView>
    </UserProvider>
  );
};

export default App;
