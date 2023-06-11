import {TextInput as RNTextInput, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Fonts, Layout} from '../../../theme';
import {Button, TextInput} from '../../../components';
import {Routes} from '../../../navigators/routes';
import {useCheckUsernameAvailability} from '../../../hooks';
import styles from './styles';

const ChooseUserName = ({navigation}) => {
  const [tiUserName, setUserName] = useState('');
  const {isLoading, isUserNameAvailable} =
    useCheckUsernameAvailability(tiUserName);

  const inputRef = useRef<RNTextInput | null>(null);

  const handleNextClick = () => {
    navigation.navigate(Routes.CreatePasswordScreen, {userName: tiUserName});
  };

  const handelChangeText = (text: string) => {
    setUserName(text);
  };
  return (
    <View style={[styles.container, Layout.fill]}>
      <Text
        style={[
          Layout.selfCenter,
          Fonts.textInterMedium,
          Fonts.textRegularBlack,
        ]}>
        Choose username
      </Text>
      <Text
        style={[Layout.selfCenter, Fonts.textInterRegular, Fonts.textTinyPlus]}>
        You can always change it later.
      </Text>
      <TextInput
        ref={inputRef}
        placeholder="Username"
        value={tiUserName}
        onChangeText={handelChangeText}
        index={0}
        onSubmitEditing={handleNextClick}
      />
      {!isUserNameAvailable && tiUserName && (
        <Text
          style={[Fonts.textInterRegular, {color: 'red', marginVertical: 4}]}>
          The user {tiUserName} is not available.
        </Text>
      )}
      <Button
        onPress={handleNextClick}
        title="Next"
        isDisabled={!tiUserName || !isUserNameAvailable}
        isLoading={isLoading}
      />
    </View>
  );
};

export default ChooseUserName;
