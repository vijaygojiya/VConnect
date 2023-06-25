import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors, Images, Layout, StyleConfig} from '../../theme';
import {MenuBar} from '../../components';

const NewPostScreen = ({navigation}) => {
  return (
    <View style={[Layout.fill]}>
      <MenuBar
        title="New Post"
        leftIcon={Images.arrow}
        onLeftClickListener={navigation.goBack}
        rightIcon={Images.arrow}
        rightIconStyle={[Layout.mirror, styles.arrowIcon]}
        onRightClickListener={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: (StyleConfig.width - 2) / 3,
    aspectRatio: 1,
  },
  selectedAsset: {
    width: StyleConfig.width,
    aspectRatio: 4 / 5,
    backgroundColor: Colors.gray,
  },
  gap: {
    gap: 1,
  },
  arrowIcon: {
    tintColor: Colors.blue,
  },
});

export default NewPostScreen;
