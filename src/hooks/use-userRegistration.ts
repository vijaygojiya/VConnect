import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {firebaseCollection} from '../utils/Constant';

const useUserRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerUser = async ({
    userName,
    email,
    password,
  }: {
    userName: string;
    email: string;
    password: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      // Create the user in Firebase Authentication
      const authUser = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      // Create a new document in the 'users' collection
      await firestore()
        .collection(firebaseCollection.users)
        .doc(authUser.user.uid)
        .set({
          userId: authUser.user.uid,
          email,
          userName,
          fullName: '',
          bio: '',
          profilePic: '',
          followers: [],
          following: [],
          requests: [],
          blockedUsers: [],
          savedPosts: [],
          gender: '',
          contactOptions: [],
          createdAt: firestore.FieldValue.serverTimestamp(),
          // You can add more fields here based on your schema
        });

      await auth().signInWithEmailAndPassword(email, password);
      console.log('User registered and data stored successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      setError(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    registerUser,
  };
};

export default useUserRegistration;
