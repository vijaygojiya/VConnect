import {Image, Text, View} from 'react-native';
import React from 'react';
import {Fonts, Images, Layout} from '../../theme';
import styles from './styles';

interface PostHeaderPropsType {
  userName: string;
  userProfilePic: string;
  location?: string;
}

const PostHeader = ({
  userName,
  userProfilePic,
  location,
}: PostHeaderPropsType) => {
  return (
    <View style={[Layout.rowHCenter, styles.container]}>
      <Image
        style={styles.profilePic}
        source={{uri: userProfilePic}}
        resizeMode="contain"
      />
      <View style={[Layout.fill, styles.infoTextContainer]}>
        <Text
          numberOfLines={1}
          style={[Fonts.textRegular, Fonts.textInterSemiBold]}>
          {userName}
        </Text>
        <Text
          numberOfLines={1}
          style={[
            Fonts.textInterRegular,
            Fonts.textSmall,
            styles.infoTextStyle,
          ]}>
          {location}
        </Text>
      </View>
      <Image
        source={Images.dot}
        style={[Layout.rotate90, styles.dotIcon]}
        resizeMode="contain"
      />
    </View>
  );
};

export default PostHeader;
