import {Text, View} from 'react-native';
import React from 'react';
import {Layout} from '../../../theme';
import styles from './styles';
import {Button} from '../../../components';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {Routes} from '../../../navigators/routes';

const ProfileScreen = ({navigation}) => {
  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: Routes.LogInScreen}],
        }),
      );
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View style={[Layout.fill, Layout.justifyContentCenter]}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ProfileScreen;
