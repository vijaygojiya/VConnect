import auth from '@react-native-firebase/auth';
import {useState} from 'react';
import useUser from './use-user';
import {getUserData} from '../servises/userServises';

const useUserLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {setStoredUser} = useUser();

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Log in the user using Firebase Authentication
      const result = await auth().signInWithEmailAndPassword(email, password);
      const userData = await getUserData(result.user.uid);
      console.log('------------>', userData);
      setStoredUser(userData);
      console.log('User logged in successfully!', result);
    } catch (error) {
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    loginUser,
  };
};

export default useUserLogin;
