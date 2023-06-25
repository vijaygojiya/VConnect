import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import React from 'react';

import {Routes} from './routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddEmailScreen,
  ChooseUserNameScreen,
  CreatePasswordScreen,
  EditProfileScreen,
  LoginScreen,
  NewPostScreen,
  SelectPostAssets,
  SplashScreen,
} from '../screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator';
import {StyleSheet} from 'react-native';
import {Colors} from '../theme';

const Stack = createNativeStackNavigator();

const ApplicationNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  return (
    <SafeAreaProvider>
      <BottomSheetModalProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              animation: 'slide_from_left',
              contentStyle: styles.navigationContainer,
            }}>
            <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
            <Stack.Screen name={Routes.LogInScreen} component={LoginScreen} />
            <Stack.Screen
              name={Routes.ChooseUserNameScreen}
              component={ChooseUserNameScreen}
            />
            <Stack.Screen
              name={Routes.CreatePasswordScreen}
              component={CreatePasswordScreen}
            />
            <Stack.Screen
              name={Routes.AddEmailScreen}
              component={AddEmailScreen}
            />
            <Stack.Screen name={Routes.Dashboard} component={TabNavigator} />
            <Stack.Screen
              options={{
                animation: 'slide_from_bottom',
                gestureDirection: 'vertical',
              }}
              name={Routes.SelectPostAssets}
              component={SelectPostAssets}
            />
            <Stack.Screen
              name={Routes.NewPostScreen}
              component={NewPostScreen}
            />
            <Stack.Screen
              options={{
                animation: 'slide_from_bottom',
                gestureDirection: 'vertical',
              }}
              name={Routes.EditProfileScreen}
              component={EditProfileScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;

const styles = StyleSheet.create({
  navigationContainer: {
    backgroundColor: Colors.white,
  },
});
