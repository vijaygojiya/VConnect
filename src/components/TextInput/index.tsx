import {View, TextInput as RNTextInput, TextInputProps} from 'react-native';
import React from 'react';
import styles from './styles';
import {Colors, Fonts, Layout} from '../../theme';

export interface TextInputPropsType extends TextInputProps {
  index: number;
}

const TextInput = React.forwardRef<RNTextInput, TextInputPropsType>(
  (reset, ref) => {
    return (
      <View style={[Layout.row, styles.container]}>
        <RNTextInput
          placeholderTextColor={Colors.black}
          {...reset}
          ref={ref}
          style={[Layout.fill, Fonts.textInterRegular, styles.textInput]}
        />
      </View>
    );
  },
);

export default TextInput;
