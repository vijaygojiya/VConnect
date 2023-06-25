import {Pressable, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {Fonts, Images, Layout} from '../../../theme';
import {
  BottomSheetHandle,
  BottomSheetItem,
  MenuBar,
  ProfileUserInfo,
} from '../../../components';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {Routes} from '../../../navigators/routes';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import styles from './styles';
import {useUser} from '../../../hooks';

const ProfileScreen = ({navigation}) => {
  const {storedUser} = useUser();
  console.log('storedUser', storedUser);
  // ref
  const createPostBottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    console.log('fddd');

    createPostBottomSheetModalRef.current?.present();
  }, []);

  const handleLogout = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: Routes.LogInScreen}],
        }),
      );
      console.log('User logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleReelItemClick = () => {
    //do-to
  };

  const renderBackdrop = useCallback(
    (_props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {..._props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    [],
  );

  const renderBottomSheetHandle = () => {
    return <BottomSheetHandle />;
  };

  const handleAddNewPost = () => {
    createPostBottomSheetModalRef.current?.dismiss();
    navigation.navigate(Routes.SelectPostAssets);
  };

  const handleEditPost = () => {
    navigation.navigate(Routes.EditProfileScreen);
  };
  return (
    <View style={[Layout.fill, styles.container]}>
      <MenuBar
        title={storedUser?.userName}
        rightIcon={Images.plus_outline}
        onRightClickListener={handlePresentModalPress}
      />
      <ProfileUserInfo />
      <Pressable
        onPress={handleEditPost}
        style={[Layout.alignItemsCenter, styles.editProfileBtnContainer]}>
        <Text
          style={[
            Fonts.textInterSemiBold,
            Fonts.textRegular,
            styles.editProfileBtn,
          ]}>
          Edit Profile
        </Text>
      </Pressable>
      <BottomSheetModal
        backgroundStyle={styles.createPostBackground}
        handleComponent={renderBottomSheetHandle}
        backdropComponent={renderBackdrop}
        ref={createPostBottomSheetModalRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableOverDrag={false}>
        <Text
          style={[
            Fonts.textInterSemiBold,
            Fonts.textMedium,
            Layout.selfCenter,
            styles.createTitleText,
          ]}>
          Create
        </Text>
        <BottomSheetItem
          title="Reel"
          itemClickHandler={handleReelItemClick}
          icon={Images.reel_outline}
        />
        <BottomSheetItem
          title="Post"
          itemClickHandler={handleAddNewPost}
          icon={Images.post_grid}
        />
      </BottomSheetModal>
    </View>
  );
};

export default ProfileScreen;
