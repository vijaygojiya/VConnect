import MaskedView from '@react-native-masked-view/masked-view';
import React, {memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';

import {Colors, Layout} from '../../theme';
import {Text, TextProps} from 'react-native';
interface GradientTextProps extends TextProps {
  locations?: number[];
  colors?: (string | number)[];
  start?: {x: number; y: number};
  end?: {x: number; y: number};
  children: string;
  isInput?: boolean;
}
const GradientText = ({
  locations,
  colors = ['#c62f90', '#db3072', '#f19d4c'],
  start = {x: 0, y: 0},
  end = {x: 1, y: 0},
  style,
  children,
  ...restProps
}: GradientTextProps) => {
  return (
    <MaskedView
      style={Layout.selfCenter}
      androidRenderingMode="software"
      maskElement={
        <Text
          {...restProps}
          style={[
            style,
            {
              color: Colors.black,
            },
          ]}>
          {children}
        </Text>
      }>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        locations={locations}>
        <Text {...restProps} style={[style, {opacity: 0}]}>
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default memo(GradientText);
