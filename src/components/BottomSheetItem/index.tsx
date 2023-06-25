import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
} from 'react-native';

import styles from './styles';

import {Fonts, Layout} from '../../theme';

interface BottomSheetItemPropsType {
  title: string;
  icon: ImageSourcePropType;
  itemClickHandler: () => void;
  titleStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ImageStyle>;
}

const BottomSheetItem = ({
  title,
  icon,
  itemClickHandler,
  titleStyle = {},
  iconStyle = {},
}: BottomSheetItemPropsType) => {
  return (
    <Pressable
      style={[Layout.rowHCenter, styles.container]}
      onPress={itemClickHandler}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[styles.iconStyle, iconStyle]}
      />
      <Text
        style={[
          Fonts.textInterSemiBold,
          Fonts.textSmallPlus,
          styles.titleText,
          titleStyle,
        ]}
        numberOfLines={1}>
        {title}
      </Text>
    </Pressable>
  );
};

export default BottomSheetItem;
