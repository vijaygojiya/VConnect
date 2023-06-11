import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Layout} from '../../../theme';
import styles from './styles';
import {Routes} from '../../../navigators/routes';
import {CommonActions, StackActions} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleAppNavFlow();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleAppNavFlow = () => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: Routes.Dashboard}],
        }),
      );
    } else {
      navigation.dispatch(StackActions.replace(Routes.LogInScreen));
    }
  };

  return (
    <View style={[Layout.fill, Layout.center]}>
      <Image
        source={Images.logo}
        resizeMode="contain"
        style={styles.logoIcon}
      />
    </View>
  );
};

export default SplashScreen;
