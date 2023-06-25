import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import {Fonts, Images, Layout} from '../../theme';
import styles from './styles';
import {useUser} from '../../hooks';

const testArray = [
  {title: 'Posts'},
  {title: 'Followers'},
  {title: 'Following'},
];

const ProfileUserInfo = () => {
  const {storedUser = {}} = useUser();
  const {profilePic = '', name, bio} = storedUser;
  return (
    <View>
      <View style={[Layout.row, styles.container]}>
        <Image
          source={profilePic ? {uri: profilePic} : Images.default_profile}
          style={styles.profilePic}
        />
        {testArray.map((item, index) => {
          return (
            <Pressable
              key={`profileCont-${index}`}
              style={[Layout.center, styles.countContainer]}>
              <Text
                numberOfLines={1}
                style={[Fonts.textInterBold, Fonts.textMedium]}>
                3
              </Text>
              <Text
                numberOfLines={1}
                style={[
                  Fonts.textRegular,
                  Fonts.textLight,
                  Fonts.textInterMedium,
                ]}>
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </View>
      <Text style={[Fonts.textInterBold, Fonts.textRegular, styles.userName]}>
        {name}
      </Text>
      <Text
        style={[Fonts.textInterRegular, Fonts.textRegular, styles.userName]}>
        {bio}
      </Text>
    </View>
  );
};

export default ProfileUserInfo;
