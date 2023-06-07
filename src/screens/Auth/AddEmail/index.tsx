import {TextInput as RNTextInput, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Fonts, Layout} from '../../../theme';
import {Button, TextInput} from '../../../components';
import {Routes} from '../../../navigators/routes';
import useUserRegistration from '../../../hooks/use-userRegistration';
import {CommonActions} from '@react-navigation/native';

const AddEmailScreen = ({navigation, route}) => {
  const [tiEmail, setEmail] = useState('');

  const {error, loading, registerUser} = useUserRegistration();

  const inputRef = useRef<RNTextInput | null>(null);

  const handleNextClick = async () => {
    try {
      await registerUser({...route.params, email: tiEmail});
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: Routes.Dashboard}],
        }),
      );
    } catch (error) {
      console.log('erro', error);
    }
  };

  return (
    <View style={[Layout.fill]}>
      <Text
        style={[
          Layout.selfCenter,
          Fonts.textInterMedium,
          Fonts.textRegularBlack,
        ]}>
        Add email
      </Text>
      <TextInput
        ref={inputRef}
        placeholder="Email"
        value={tiEmail}
        onChangeText={setEmail}
        index={0}
        onSubmitEditing={handleNextClick}
      />
      <Text style={[Fonts.textInterMedium, {color: 'red'}]}>{error}</Text>
      <Button
        onPress={handleNextClick}
        title="Next"
        isDisabled={!tiEmail}
        isLoading={loading}
      />
    </View>
  );
};

export default AddEmailScreen;
