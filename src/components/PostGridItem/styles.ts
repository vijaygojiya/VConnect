import {StyleSheet} from 'react-native';
import {Colors, Icon, StyleConfig} from '../../theme';

const styles = StyleSheet.create({
  gridImage: {
    width: (StyleConfig.width - 6) / 3,
    aspectRatio: 1,
    backgroundColor: Colors.gray05,
  },
  multiPagesIcon: {
    height: Icon.height + 3,
    width: Icon.width + 3,
    zIndex: 222,
    right: 5,
    top: 5,
  },
});

export default styles;
