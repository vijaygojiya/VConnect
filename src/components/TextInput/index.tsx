import {
  View,
  TextInput as RNTextInput,
  TextInputProps,
  Text,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors, Fonts, Layout} from '../../theme';

export interface TextInputPropsType extends TextInputProps {
  validationError?: string;
}

const TextInput = React.forwardRef<RNTextInput, TextInputPropsType>(
  ({validationError, ...rest}, ref) => {
    return (
      <View style={[Layout.row, styles.container]}>
        <RNTextInput
          placeholderTextColor={Colors.black}
          {...rest}
          ref={ref}
          style={[Layout.fill, Fonts.textInterRegular, styles.textInput]}
        />
        <Text style={[Fonts.textInterMedium, {color: 'red'}]}>
          {validationError ?? ''}
        </Text>
      </View>
    );
  },
);

export default TextInput;
