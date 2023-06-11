import {StyleSheet} from 'react-native';
import {Colors, Margin, Sizes} from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0095f6',
    borderRadius: Sizes.cornerRadius.default,
    marginVertical: Margin.smallPlus,
  },
  disabledContainer: {
    backgroundColor: '#0095f660',
  },
  titleText: {
    marginVertical: Margin.defaultSmall,
    color: Colors.white,
  },
});
export default styles;
