import {StyleSheet} from 'react-native';
import {Colors, Icon} from '../../theme';

const styles = StyleSheet.create({
  heartIcon: {
    height: Icon.defaultPlusHeight * 1.3,
    width: Icon.defaultPlusWidth * 1.3,
    tintColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    position: 'absolute',
    top: '45%',
    left: '40%',
  },
});
export default styles;
