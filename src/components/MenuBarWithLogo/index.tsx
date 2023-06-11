import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import {Images, Layout} from '../../theme';

const MenuBarWithLogo = () => {
  return (
    <SafeAreaView
      style={[Layout.rowHCenter, styles.container]}
      forceInset={{top: 'always', bottom: 'never'}}>
      <Pressable>
        <Image
          source={Images.text_logo}
          style={styles.textLogoIcon}
          resizeMode="contain"
        />
      </Pressable>
      <View style={Layout.fill} />
      <Pressable>
        <Image
          source={Images.like_outline}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
      <Pressable>
        <Image source={Images.chat} style={styles.icon} resizeMode="contain" />
      </Pressable>
    </SafeAreaView>
  );
};

export default MenuBarWithLogo;
