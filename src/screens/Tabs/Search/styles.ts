import {StyleSheet} from 'react-native';
import {Colors, Margin, Sizes, StyleConfig} from '../../../theme';

const styles = StyleSheet.create({
  flColumnWrapperStyle: {
    gap: Margin.tiny + 1,
  },
  flContainerStyle: {
    gap: Margin.tiny + 1,
  },
  selectedImageContainer: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: Margin.small,
    zIndex: 9999,
  },
  imageContainer: {
    borderRadius: Sizes.cornerRadius.default,
    backgroundColor: Colors.white,
    overflow: 'hidden',
    elevation: 19,
  },
  selectedImage: {
    width: StyleConfig.width - 2 * Margin.small,
    height: StyleConfig.height / 2,
    backgroundColor: Colors.white,
  },
});
export default styles;
