import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  Pressable,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Fonts, Layout} from '../../theme';
import styles from './styles';

export interface MenuBarProps {
  containerStyle?: ViewStyle;
  title: string;
  textStyle?: TextStyle;
  leftIcon: ImageSourcePropType;
  onLeftClickListener?: () => void;
  onRightClickListener?: () => void;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIcon?: ImageSourcePropType;
  rightIconStyle?: StyleProp<ImageStyle>;
}

const MenuBar = React.memo(
  ({
    containerStyle,
    title,
    textStyle,
    leftIcon,
    onLeftClickListener,
    onRightClickListener,
    rightIcon,
    rightIconStyle,
    leftIconStyle,
  }: MenuBarProps) => {
    // const {Fonts, Layout} = useTheme();

    return (
      <SafeAreaView edges={['right', 'top', 'left']}>
        <View style={[Layout.rowHCenter, styles.container, containerStyle]}>
          {leftIcon && (
            <Pressable
              style={[Layout.center]}
              onPress={onLeftClickListener}
              hitSlop={10}>
              <Image
                source={leftIcon}
                style={[styles.iconStyle, leftIconStyle]}
                resizeMode="contain"
              />
            </Pressable>
          )}
          <Text
            style={[
              Layout.fill,
              Fonts.textInterBold,
              Fonts.textMediumIntermediate,
              styles.textStyle,
              textStyle,
            ]}>
            {title}
          </Text>
          {rightIcon && (
            <Pressable
              style={[Layout.center, styles.iconContainer]}
              onPress={onRightClickListener}
              hitSlop={10}>
              <Image
                source={rightIcon}
                style={[styles.iconStyle, rightIconStyle]}
                resizeMode="contain"
              />
            </Pressable>
          )}
        </View>
      </SafeAreaView>
    );
  },
);

export default MenuBar;
