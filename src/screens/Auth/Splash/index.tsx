import {Image, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Layout} from '../../../theme';
import styles from './styles';
import {Routes} from '../../../navigators/routes';

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
    navigation.replace(Routes.Dashboard);
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
