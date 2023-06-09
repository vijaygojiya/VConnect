import {StyleSheet} from 'react-native';

import {Colors, Icon, Margin, Padding, Sizes} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Padding.small,
    paddingVertical: Padding.small,
    backgroundColor: 'white',
  },
  textStyle: {
    marginHorizontal: Margin.small,
  },
  iconStyle: {
    height: Icon.smallHeight,
    width: Icon.smallWidth,
    tintColor: Colors.black,
  },
});

export default styles;
