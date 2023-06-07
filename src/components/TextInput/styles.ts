import {StyleSheet} from 'react-native';
import {Colors, Margin, Padding, Sizes} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
    marginVertical: Margin.smallPlus,
    borderRadius: Sizes.cornerRadius.small,
    borderWidth: 1,
    borderColor: Colors.darkModeGray50,
  },
  textInput: {
    // backgroundColor: 'green',
    paddingHorizontal: 14,
  },
});
export default styles;
