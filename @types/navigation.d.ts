import {NavigatorScreenParams} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

import {ImageSourcePropType} from 'react-native/types';
import {ImageOrVideo} from 'react-native-image-crop-picker';

import {Routes} from '../src/navigators/routes';
export type AuthParamsList = {
  [Routes.ForgotPassword]: undefined;
  [Routes.VerifyOtpScreen]: undefined;
  [Routes.VerifyMobileNumberScreen]: {userId: string};
  [Routes.SignUpScreen]: undefined;
  [Routes.VerifiedMobileNumber]: {userId: string};
  [Routes.HederaAccountCreation]: undefined;
  [Routes.SplashScreen]: undefined;
};

export type HomeParamList = {
  [Routes.HomeScreen]: undefined;
  [Routes.EditProfile]: undefined;
  [Routes.PostDetailScreen]: {
    postData: {
      post: ImageSourcePropType;
      profilePhoto: ImageSourcePropType;
      userName: string;
      price: number | string;
      caption: string;
      timestamp: Date;
    };
  };
};

export type ProfileParamList = {
  [Routes.ProfileScreen]: undefined;
  [Routes.FollowerFollowingUserList]: {
    usersIdList: string[];
    isFollowers: boolean;
  };
};

export type ApplicationStackParamList = {
  [Routes.CreatePostScreen]: {photo: ImageOrVideo; mediaType: string};
  [Routes.SettingScreen]: undefined;
  [Routes.AddLocation]: {
    addLocation: (locationTitle: string, locationSubtitle: string) => void;
  };
  [Routes.ViewUploadPost]: {photo: strign};
  [Routes.Auth]: NavigatorScreenParams<AuthParamsList>;
  [Routes.HomeScreen]: NavigatorScreenParams<HomeParamList>;
  [Routes.ProfileScreen]: NavigatorScreenParams<ProfileParamList>;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
