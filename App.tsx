import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {Colors, Layout} from './src/theme';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {UserProvider} from './src/providers/user-provider';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <UserProvider>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <GestureHandlerRootView style={Layout.fill}>
        <ApplicationNavigator />
      </GestureHandlerRootView>
    </UserProvider>
  );
};

export default App;
