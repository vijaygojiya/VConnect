import {StyleSheet} from 'react-native';
import {Colors, Icon, Padding, Sizes, StyleConfig} from '../../theme';

const styles = StyleSheet.create({
  postPhoto: {
    width: StyleConfig.width,
    aspectRatio: 5 / 4,
    backgroundColor: Colors.gray,
  },
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
  },
  currentPostNumber: {
    color: Colors.white,
    backgroundColor: `${Colors.black}80`,
    paddingHorizontal: Padding.small,
    paddingVertical: Padding.extraSmall,
    borderRadius: Sizes.cornerRadius.large,
    position: 'absolute',
    top: 80,
    right: 10,
  },
});
export default styles;
