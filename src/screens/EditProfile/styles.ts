import {StyleSheet} from 'react-native';
import {Colors, Icon, Margin, Padding} from '../../theme';

const styles = StyleSheet.create({
  arrowIcon: {
    tintColor: Colors.blue,
  },
  inputFieldContainer: {
    // backgroundColor: 'red',
    marginVertical: Margin.small,
    borderBottomWidth: 0.3,
    marginHorizontal: Margin.default,
    borderBottomColor: Colors.gray45,
  },
  inputStyle: {
    paddingVertical: Padding.none,
  },
  profilePic: {
    height: Icon.largeHeight,
    width: Icon.largeWidth,
    borderRadius: Icon.largeHeight / 2,
    // marginEnd: Margin.defaultPlus,
  },
  profilePicContainer: {
    marginVertical: Margin.small,
  },
});

export default styles;
