import {StyleSheet} from 'react-native';
import {Colors, Icon, Margin, Padding} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: Padding.extraSmall,
    paddingHorizontal: Padding.small,
  },
  postActionsIcon: {
    height: Icon.smallHeight,
    width: Icon.smallWidth,
    tintColor: Colors.black,
    margin: Margin.small,
  },
});
export default styles;
