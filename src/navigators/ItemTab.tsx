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
  isProfileItem,
}: ItemTab) => {
  const handleTabIconClick = () => {
    if (isSelected) {
      return;
    }
    onTabItemClickHandler(route);
  };
  return (
    <Pressable
      style={[Layout.alignItemsCenter, styles.tabBarContainer]}
      onPress={handleTabIconClick}>
      <Image
        source={isSelected ? activeIcon : inActiveIcon}
        style={[
          styles.iconStyle,
          isProfileItem && styles.profileIcon,
          isProfileItem && isSelected && styles.profileSelectedIcon,
        ]}
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
  profileIcon: {
    tintColor: undefined,
  },
  profileSelectedIcon: {
    borderWidth: 1,
    borderColor: Colors.black,

    borderRadius: 12,
  },
  tabBarContainer: {
    width: StyleConfig.width / 5,
  },
});
