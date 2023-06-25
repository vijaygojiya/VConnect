import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {MenuBar} from '../../components';
import {Colors, Fonts, Images, Layout} from '../../theme';
import styles from './styles';
import {TypeOfEditProfile} from '../../utils/Enum';
import {Options, openPicker} from 'react-native-image-crop-picker';
import {uploadImage} from '../../servises/firebaseUtils';
import {updateUserProfile} from '../../servises/userServises';
import {useUser} from '../../hooks';

const EDIT_INPUT_CONFIG = [
  {
    label: 'Name',
  },
  {
    label: 'Username',
  },
  {
    label: 'Bio',
  },
];

const EditProfileScreen = ({navigation}) => {
  const {setStoredUser, storedUser} = useUser();
  const [name, setName] = useState(storedUser?.name || '');
  const [username, setUsername] = useState(storedUser?.userName || '');
  const [bio, setBio] = useState(storedUser?.bio || '');
  const [profilePic, setProfilePic] = useState(storedUser?.profilePic || '');
  const profileRemoteUrl = useRef('');

  const inputRef = useRef<(TextInput | null)[]>([]);

  const handleOnChangeText = (text: string, index: number) => {
    switch (index) {
      case TypeOfEditProfile.Name:
        setName(text);
        break;
      case TypeOfEditProfile.UserName:
        setUsername(text);
        break;
      case TypeOfEditProfile.Bio:
        setBio(text);
        break;
    }
  };

  const getInputValue = (index: number) => {
    switch (index) {
      case TypeOfEditProfile.Name:
        return name;
      case TypeOfEditProfile.UserName:
        return username;
      case TypeOfEditProfile.Bio:
        return bio;
    }
  };

  const handleSubmitEditing = (index: number) => {
    if (EDIT_INPUT_CONFIG.length - 1 !== index) {
      inputRef?.current[index + 1]?.focus();
    }
  };

  const handleEditImage = async () => {
    try {
      const options: Options = {
        mediaType: 'photo',
        width: 500,
        height: 500,
        cropping: true,
        cropperCircleOverlay: true,
        freeStyleCropEnabled: true,
        cropperStatusBarColor: Colors.black,
      };
      const response = await openPicker(options);

      if (response?.path) {
        setProfilePic(response.path);

        profileRemoteUrl.current = response.path;
        // console.log('===.', remoteURL);
      }
    } catch (error: unknown) {
      console.log('ee', error.message);
      //   Methods.showToast(error.message, 1000);
    }
  };

  const renderInputFields = (
    item: (typeof EDIT_INPUT_CONFIG)[number],
    index: number,
  ) => {
    return (
      <View key={`editInputItem-${index}`} style={styles.inputFieldContainer}>
        <Text style={[Fonts.textInterRegular, Fonts.textRegular]}>
          {item.label}
        </Text>
        <TextInput
          style={[Fonts.textInterRegular, Fonts.textRegular, styles.inputStyle]}
          value={getInputValue(index)}
          onChangeText={(text: string) => {
            handleOnChangeText(text, index);
          }}
          ref={ref => {
            inputRef.current[index] = ref;
          }}
          onSubmitEditing={() => {
            handleSubmitEditing(index);
          }}
          returnKeyType={
            EDIT_INPUT_CONFIG.length - 1 !== index ? 'next' : 'done'
          }
        />
      </View>
    );
  };

  const handleRightIconClick = async () => {
    try {
      const updatedData = {
        userName: username,
        name,
        bio,
      };

      const selectedImage = profileRemoteUrl.current;
      if (selectedImage) {
        const filename = selectedImage.substring(
          selectedImage.lastIndexOf('/') + 1,
        );
        const remoteURL = await uploadImage(
          selectedImage,
          'profilePictures',
          filename,
        );
        updatedData.profilePic = remoteURL;
      }
      setStoredUser({...storedUser, ...updatedData});
      await updateUserProfile(storedUser?.userId, updatedData);

      navigation.goBack();
    } catch (error) {
      console.log('======>', error);
    }
  };

  return (
    <View>
      <MenuBar
        title=" Edit profile"
        leftIcon={Images.close}
        onLeftClickListener={navigation.goBack}
        rightIcon={Images.arrow}
        rightIconStyle={[Layout.mirror, styles.arrowIcon]}
        onRightClickListener={handleRightIconClick}
      />
      <ScrollView>
        <Pressable
          onPress={handleEditImage}
          style={[Layout.selfCenter, styles.profilePicContainer]}>
          <Image
            source={profilePic ? {uri: profilePic} : Images.default_profile}
            style={styles.profilePic}
          />
        </Pressable>
        {EDIT_INPUT_CONFIG.map(renderInputFields)}
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
