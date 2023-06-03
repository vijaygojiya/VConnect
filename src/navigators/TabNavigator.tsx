import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Routes} from './routes';
import {
  AddPostScreen,
  HomeScreen,
  ProfileScreen,
  ReelsScreen,
  SearchScreen,
} from '../screens';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Tab.Screen name={Routes.SearchScreen} component={SearchScreen} />
      <Tab.Screen name={Routes.AddPostScreen} component={AddPostScreen} />
      <Tab.Screen name={Routes.ReelsScreen} component={ReelsScreen} />
      <Tab.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
