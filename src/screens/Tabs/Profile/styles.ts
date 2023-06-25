import {StyleSheet} from 'react-native';
import {Colors, Margin, Sizes} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  editProfileBtnContainer: {
    backgroundColor: Colors.spectrumGrapeTint90,
    marginHorizontal: Margin.default,
    marginVertical: Margin.defaultSmall,
    borderRadius: Sizes.cornerRadius.default,
  },
  editProfileBtn: {
    marginVertical: Margin.small,
  },
  createPostBackground: {
    backgroundColor: Colors.white,
  },
  createTitleText: {
    marginVertical: Margin.small,
  },
});
export default styles;
