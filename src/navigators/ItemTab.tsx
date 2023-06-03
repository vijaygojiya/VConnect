import {Image, ImageSourcePropType, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Routes} from './routes';
import {Colors, Icon, Layout, Margin, StyleConfig} from '../theme';

interface ItemTab {
  inActiveIcon: ImageSourcePropType;
  activeIcon: ImageSourcePropType;
  route: Routes;
  onTabItemClickHandler: (route: Routes) => void;
  isSelected: boolean;
}
const IteTab = ({
  activeIcon,
  inActiveIcon,
  route,
  onTabItemClickHandler,
  isSelected,
}: ItemTab) => {
  const handleTabIconClick = () => {
    onTabItemClickHandler(route);
  };
  return (
    <Pressable
      style={[Layout.alignItemsCenter, styles.tabBarContainer]}
      onPress={handleTabIconClick}>
      <Image
        source={isSelected ? activeIcon : inActiveIcon}
        style={styles.iconStyle}
        resizeMode="contain"
      />
    </Pressable>
  );
};

export default IteTab;

const styles = StyleSheet.create({
  iconStyle: {
    height: Icon.regularHeight,
    width: Icon.regularWidth,
    marginVertical: Margin.smallPlusExtra,
    tintColor: Colors.black,
  },
  tabBarContainer: {
    width: StyleConfig.width / 5,
  },
});
