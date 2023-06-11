import {StyleSheet} from 'react-native';
import {Colors, Icon, Margin, Padding} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: Padding.smallPlus,
  },
  textLogoIcon: {
    height: Icon.smallPlusHeight,
  },
  icon: {
    tintColor: Colors.black,
    marginHorizontal: Margin.small,
  },
});

export default styles;
