import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const GradientBorder = ({children}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#C13584', '#F56040', '#FCAF45']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default GradientBorder;
