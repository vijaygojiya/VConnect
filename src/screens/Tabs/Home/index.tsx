import {Text, View} from 'react-native';
import React from 'react';
import {Layout} from '../../../theme';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={[Layout.fill, Layout.center]}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
