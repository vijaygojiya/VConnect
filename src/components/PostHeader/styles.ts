import {StyleSheet} from 'react-native';
import {Colors, Icon, Margin, Padding} from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingStart: 16,
    paddingEnd: Padding.small,
    paddingVertical: 14,
  },
  profilePic: {
    height: Icon.smallPlusHeight,
    width: Icon.smallPlusHeight,
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: Icon.smallPlusHeight / 2,
  },
  infoTextContainer: {
    marginStart: 12,
    marginEnd: Margin.extraSmall,
  },
  infoTextStyle: {
    padding: Margin.tiny,
  },
  dotIcon: {
    height: Icon.smallHeight,
    width: Icon.smallWidth,
    margin: Padding.small,
    tintColor: Colors.black,
  },
});
export default styles;
