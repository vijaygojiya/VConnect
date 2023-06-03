import Colors from './Colors';

export const FontSize = {
  tiny: 6,
  tinyExtra: 10,
  tinyPlus: 14,
  small: 12,
  smallPlus: 16,
  medium: 18,
  mediumIntermediate: 20,
  mediumPlus: 22,
  regular: 24,
  regularPlus: 26,
  large: 28,
  largePlus: 30,
  huge: 40,
};

const tiny = 10;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  FontSize,
  MetricsSizes,
};
