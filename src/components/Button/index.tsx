import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  Text,
  ViewStyle,
} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {Colors, Fonts, Layout} from '../../theme';

interface ButtonPropsType extends PressableProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isDisabled?: boolean;
}

const Button = ({
  title,
  containerStyle,
  isDisabled,
  isLoading = false,
  ...reset
}: ButtonPropsType) => {
  const getContainerStyle = useCallback(
    ({pressed}: PressableStateCallbackType) => {
      return [
        Layout.center,
        styles.container,
        containerStyle,
        pressed || isLoading || isDisabled ? styles.disabledContainer : {},
      ];
    },
    [containerStyle, isDisabled, isLoading],
  );

  return (
    <Pressable
      {...reset}
      disabled={isDisabled || isLoading}
      style={getContainerStyle}>
      <Text style={[Fonts.textInterSemiBold, styles.titleText]}>
        {isLoading ? '' : title}
      </Text>
      {isLoading ? (
        <ActivityIndicator
          style={[Layout.absolute]}
          animating={true}
          color={Colors.white}
          size="large"
        />
      ) : null}
    </Pressable>
  );
};

export default Button;
