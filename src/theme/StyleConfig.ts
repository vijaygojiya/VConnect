import {Dimensions, Platform} from 'react-native';
const {width, height} = Dimensions.get('window');
const isIphone = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

const APP_FONTS = {
  POPPINS_LIGHT: 'Poppins-Light',
  POPPINS_REGULAR: 'Poppins-Regular',
  POPPINS_MEDIUM: 'Poppins-Medium',
  POPPINS_BOLD: 'Poppins-Bold',
  POPPINS_ITALIC: 'Poppins-Italic',
  POPPINS_SEMIBOLD: 'Poppins-SemiBold',
  INTER_LIGHT: 'Inter-Light',
  INTER_EXTRALIGHT: 'Inter-ExtraLight',
  INTER_REGULAR: 'Inter-Regular',
  INTER_MEDIUM: 'Inter-Medium',
  INTER_BOLD: 'Inter-Bold',
  INTER_EXTRABOLD: 'Inter-ExtraBold',
  INTER_THIN: 'Inter-Thin',
  INTER_SEMIBOLD: 'Inter-SemiBold',
};

export default {
  fontLight: APP_FONTS.POPPINS_LIGHT,
  fontRegular: APP_FONTS.POPPINS_REGULAR,
  fontMedium: APP_FONTS.POPPINS_MEDIUM,
  fontBold: APP_FONTS.POPPINS_BOLD,
  fontItalic: APP_FONTS.POPPINS_ITALIC,
  fontSemibold: APP_FONTS.POPPINS_SEMIBOLD,
  fontInterLight: APP_FONTS.INTER_LIGHT,
  fontInterExtraLight: APP_FONTS.INTER_EXTRALIGHT,
  fontInterRegular: APP_FONTS.INTER_REGULAR,
  fontInterMedium: APP_FONTS.INTER_MEDIUM,
  fontInterBold: APP_FONTS.INTER_BOLD,
  fontInterExtraBold: APP_FONTS.INTER_EXTRABOLD,
  fontInterThin: APP_FONTS.INTER_THIN,
  fontInterSemibold: APP_FONTS.INTER_SEMIBOLD,
  width,
  height,
  isIphone,
  isAndroid,
};
