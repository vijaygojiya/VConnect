import {StyleSheet} from 'react-native';
import {Colors, Margin, Padding} from '../../../theme';
import {headerHeight} from '../../../utils/Constant';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  header: {
    backgroundColor: Colors.white,
    zIndex: 1,
    height: headerHeight / 2,
  },
  userContainer: {
    marginHorizontal: Margin.extraSmallPlus,
  },
  userImage: {
    height: 66,
    width: 66,
    borderRadius: 66 / 2,
  },
  userBadge: {
    bottom: -4,
    borderWidth: 2,
    borderColor: Colors.white,
    backgroundColor: Colors.blue,

    borderRadius: 12,
  },
  badgeImage: {
    tintColor: Colors.white,
    height: 10,
    width: 10,
    margin: Margin.extraSmallPlus,
  },
  storiesListContainer: {
    padding: Padding.smallPlus,
  },
  storiesList: {
    borderTopWidth: 0.1,
    borderColor: Colors.white,
    borderBottomWidth: 0.19,
  },
  listContentContainerStyle: {paddingTop: headerHeight / 2},
});
export default styles;
