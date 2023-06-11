import auth from '@react-native-firebase/auth';
import {useState} from 'react';

const useUserLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      // Log in the user using Firebase Authentication
      await auth().signInWithEmailAndPassword(email, password);

      console.log('User logged in successfully!');
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
