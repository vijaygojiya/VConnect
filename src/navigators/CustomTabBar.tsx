import React, {memo} from 'react';
import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import ItemTab from './ItemTab';
import {Routes} from './routes';
import {Colors, Images, Layout} from '../theme';
import {useNavigationState} from '@react-navigation/native';

const TabBarList = [
  {
    inActiveIcon: Images.home_outline,
    activeIcon: Images.home_filled,
    route: Routes.HomeScreen,
  },
  {
    inActiveIcon: Images.search_outline,
    activeIcon: Images.search_filled,
    route: Routes.SearchScreen,
  },

  {
    inActiveIcon: Images.plus_outline,
    activeIcon: Images.plus_filled,
    route: Routes.AddPostScreen,
  },
  {
    inActiveIcon: Images.reel_outline,
    activeIcon: Images.reel_filled,
    route: Routes.ReelsScreen,
  },
  {
    inActiveIcon: Images.profile_outline,
    activeIcon: Images.profile_filled,
    route: Routes.ProfileScreen,
  },
];

const CustomTabBar = (props: {navigation: any}) => {
  const {navigation} = props;

  const currentIndex =
    useNavigationState(state => {
      console.log('state', state);
      return state.routes[0].state?.index;
    }) ?? 0;

  const onTabClick = (selectedRoute: Routes) => {
    navigation.navigate(selectedRoute);
  };

  const renderTabItem: ListRenderItem<(typeof TabBarList)[0]> = ({
    item,
    index,
  }) => {
    return (
      <ItemTab
        {...item}
        key={`custom-tab-${index}`}
        onTabItemClickHandler={onTabClick}
        isSelected={index === currentIndex}
      />
    );
  };

  return (
    <SafeAreaView
      forceInset={{top: 'never', bottom: 'always'}}
      style={styles.saContainer}>
      <FlatList
        horizontal
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={TabBarList}
        contentContainerStyle={[Layout.fill, Layout.scrollSpaceAround]}
        renderItem={renderTabItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  saContainer: {
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,

    elevation: 12,
  },
});
export default memo(CustomTabBar);
