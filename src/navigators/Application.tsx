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
  LoginScreen,
  SignUpScreen,
  SplashScreen,
} from '../screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator';

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
            }}>
            <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
            <Stack.Screen name={Routes.LogInScreen} component={LoginScreen} />
            <Stack.Screen name={Routes.SignUpScreen} component={SignUpScreen} />
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
          </Stack.Navigator>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
