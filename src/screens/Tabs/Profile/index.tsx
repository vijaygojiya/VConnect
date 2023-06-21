import {View} from 'react-native';
import React, {useCallback, useMemo, useRef} from 'react';
import {Images, Layout} from '../../../theme';
import {BottomSheetHandle, BottomSheetItem, Button} from '../../../components';
import auth from '@react-native-firebase/auth';
import {CommonActions} from '@react-navigation/native';
import {Routes} from '../../../navigators/routes';
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';

const ProfileScreen = ({navigation}) => {
  // ref
  const createPostBottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    createPostBottomSheetModalRef.current?.present();
  }, []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  // const handleLogout = async () => {
  //   try {
  //     await auth().signOut();
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 1,
  //         routes: [{name: Routes.LogInScreen}],
  //       }),
  //     );
  //     console.log('User logged out successfully!');
  //   } catch (error) {
  //     console.error('Error logging out:', error);
  //   }
  // };

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

  return (
    <View style={[Layout.fill, Layout.justifyContentCenter]}>
      {/* <Button title="Logout" onPress={handleLogout} /> */}
      <Button title="Add new Reel" onPress={handlePresentModalPress} />

      <BottomSheetModal
        handleComponent={renderBottomSheetHandle}
        backdropComponent={renderBackdrop}
        ref={createPostBottomSheetModalRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}>
        <BottomSheetItem
          title="Reel"
          itemClickHandler={handleReelItemClick}
          icon={Images.reel_outline}
        />
        <BottomSheetItem
          title="Post"
          itemClickHandler={handleAddNewPost}
          icon={Images.plus_outline}
        />
      </BottomSheetModal>
    </View>
  );
};

export default ProfileScreen;
