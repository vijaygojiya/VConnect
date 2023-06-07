import {TextInput as RNTextInput, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Fonts, Layout} from '../../../theme';
import {Button, TextInput} from '../../../components';
import {Routes} from '../../../navigators/routes';

const CreatePassword = ({navigation, route}) => {
  const [tiPassword, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<RNTextInput | null>(null);

  const handleNextClick = () => {
    navigation.navigate(Routes.AddEmailScreen, {
      ...route.params,
      password: tiPassword,
    });
  };

  return (
    <View style={[Layout.fill]}>
      <Text
        style={[
          Layout.selfCenter,
          Fonts.textInterMedium,
          Fonts.textRegularBlack,
        ]}>
        Create a password
      </Text>
      <Text
        style={[Layout.selfCenter, Fonts.textInterRegular, Fonts.textTinyPlus]}>
        For security,you password must be 6 characters or more.
      </Text>
      <TextInput
        ref={inputRef}
        placeholder="Password"
        secureTextEntry={true}
        value={tiPassword}
        onChangeText={setPassword}
        index={0}
        onSubmitEditing={handleNextClick}
      />
      {/* TODO: check box */}
      <Text
        style={[Layout.selfCenter, Fonts.textInterRegular, Fonts.textTinyPlus]}>
        Remember password
      </Text>
      <Button
        onPress={handleNextClick}
        title="Next"
        isDisabled={!tiPassword}
        isLoading={isLoading}
      />
    </View>
  );
};

export default CreatePassword;
