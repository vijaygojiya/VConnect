import React from 'react';
import Animated from 'react-native-reanimated';
import {Images} from '../../theme';
import styles from './styles';
import {ImageStyle, StyleProp} from 'react-native';

interface AnimatedHeartIconPropsType {
  animatedHeartIconStyle: StyleProp<
    Animated.AnimateStyle<StyleProp<ImageStyle>>
  >;
}

const AnimatedHeartIcon = ({
  animatedHeartIconStyle,
}: AnimatedHeartIconPropsType) => {
  return (
    <Animated.Image
      resizeMode="contain"
      source={Images.like_filled_HQ}
      style={[styles.heartIcon, animatedHeartIconStyle]}
    />
  );
};

export default AnimatedHeartIcon;
