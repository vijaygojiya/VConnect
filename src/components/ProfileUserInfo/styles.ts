import {StyleSheet} from 'react-native';
import {Icon, Margin} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginVertical: Margin.defaultPlus,
    // backgroundColor: 'red   ',
    justifyContent: 'space-between',
    marginHorizontal: Margin.default,
  },
  profilePic: {
    height: Icon.largeHeight,
    width: Icon.largeWidth,
    borderRadius: Icon.largeHeight / 2,
    marginEnd: Margin.defaultPlus,
  },
  userName: {
    marginHorizontal: Margin.small,
    lineHeight: 22,
  },
  countContainer: {},
});
export default styles;
