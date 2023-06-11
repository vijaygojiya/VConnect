import {Image, TextInput as RNTextInput, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Fonts, Images, Layout} from '../../../theme';
import {Button, TextInput} from '../../../components';
import styles from './styles';
import {loginInputs} from '../../../utils/inputConfig';
import {Routes} from '../../../navigators/routes';
import Layouts from '../../../theme/Layout';
import {useUserLogin} from '../../../hooks';
import {CommonActions} from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  const [tiEmail, setTiEmail] = useState('');
  const [tiPassword, setTiPassword] = useState('');

  const {error, loading, loginUser} = useUserLogin();

  const inputRef = useRef<(RNTextInput | null)[]>([]);

  const getValue = (index: number) => {
    switch (index) {
      case 0:
        return tiEmail;

      case 1:
        return tiPassword;

      default:
        return '';
    }
  };

  const handleChangeText = (text: string, index: number) => {
    switch (index) {
      case 0:
        setTiEmail(text);
        break;
      case 1:
        setTiPassword(text);
        break;
      default:
        return '';
    }
  };

  const handleSubmitInput = (index: number) => {
    const isLast = index !== loginInputs.length - 1;
    if (isLast) {
      inputRef?.current[index + 1]?.focus();
    } else {
      // handle sign in
    }
  };

  const handleLoginBtnClick = async () => {
    try {
      await loginUser(tiEmail, tiPassword);
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: Routes.Dashboard}],
        }),
      );
    } catch (error) {
      console.log('eee', error);
    }
  };
  const handleSignUpClick = () => {
    navigation.navigate(Routes.ChooseUserNameScreen);
  };

  return (
    <View style={[styles.container, Layout.fill, Layout.justifyContentCenter]}>
      <Image
        source={Images.text_logo}
        style={[Layout.selfCenter, styles.logo]}
      />
      {loginInputs.map((item, index) => {
        return (
          <TextInput
            key={`loginInput-${index}`}
            value={getValue(index)}
            onSubmitEditing={() => {
              handleSubmitInput(index);
            }}
            onChangeText={text => {
              handleChangeText(text, index);
            }}
            ref={ref => (inputRef.current[index] = ref)}
            {...item}
          />
        );
      })}
      <Text style={[Fonts.textInterRegular, {color: 'red'}]}>{error}</Text>
      <Button
        onPress={handleLoginBtnClick}
        title="Login"
        isDisabled={!tiEmail || !tiPassword}
        isLoading={loading}
      />
      <Text style={[Layouts.selfCenter]}>
        Don't have an account?
        <Text onPress={handleSignUpClick} style={[Fonts.textInterBold]}>
          {' '}
          Sign up.
        </Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
