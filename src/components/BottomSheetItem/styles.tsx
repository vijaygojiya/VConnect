import {StyleSheet} from 'react-native';

import {Colors, Icon, Margin, Padding} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Padding.smallPlusExtra / 2,
    marginVertical: Margin.small,
  },
  iconStyle: {
    tintColor: Colors.black,
    height: Icon.regularHeight,
    width: Icon.regularWidth,
  },
  titleText: {
    marginStart: Margin.small,
  },
});
export default styles;
