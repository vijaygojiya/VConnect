import React from 'react';
import {View} from 'react-native';

import styles from './styles';

import {Layout} from '../../theme';

const BottomSheetHandle = () => {
  return (
    <View style={[Layout.selfCenter]}>
      <View style={styles.lineContainer} />
    </View>
  );
};

export default BottomSheetHandle;
