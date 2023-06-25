import {TextInputPropsType} from '../components/TextInput';

export const loginInputs: TextInputPropsType[] = [
  {
    placeholder: 'Phone number,email or username',
    keyboardType: 'email-address',
    returnKeyType: 'next',
    autoCapitalize: 'none',
    index: 0,
  },
  {
    placeholder: 'Password',
    secureTextEntry: true,
    keyboardType: 'default',
    returnKeyType: 'done',
    autoCapitalize: 'none',
    index: 1,
  },
];
