import {View} from 'react-native';
import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import {Layout} from './src/theme';

const App = () => {
  return (
    <View style={Layout.fill}>
      <ApplicationNavigator />
    </View>
  );
};

export default App;
