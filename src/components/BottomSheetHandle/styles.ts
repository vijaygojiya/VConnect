import {StyleSheet} from 'react-native';

import {Colors, Margin, Sizes} from '../../theme';

const styles = StyleSheet.create({
  lineContainer: {
    width: 40,
    height: 4,
    borderRadius: Sizes.cornerRadius.small,
    backgroundColor: Colors.lightGrey,
    marginTop: Margin.small + 1,
  },
});
export default styles;
