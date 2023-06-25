import {StyleSheet} from 'react-native';
import {Colors, Padding, Sizes, StyleConfig} from '../../theme';

const styles = StyleSheet.create({
  postPhoto: {
    width: StyleConfig.width,
    aspectRatio: 4 / 5,
    backgroundColor: Colors.gray,
  },

  currentPostNumber: {
    color: Colors.white,
    backgroundColor: Colors.blackAlpha60,
    paddingHorizontal: Padding.small,
    paddingVertical: Padding.extraSmall,
    borderRadius: Sizes.cornerRadius.large,
    position: 'absolute',
    top: 80,
    right: 10,
  },
});
export default styles;
