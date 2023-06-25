import {firebaseCollection} from '../utils/Constant';
import firestore from '@react-native-firebase/firestore';

const updateUserProfile = async (userId?: string, userData: any) => {
  console.log('--------user', userId);
  if (!userId) {
    return;
  }
  console.log('userDatauserDatauserDatauserDatauserData', userData);
  try {
    await firestore()
      .collection(firebaseCollection.users)
      .doc(userId)
      .update(userData);
  } catch (error) {
    throw error;
  }
};

const getUserData = async (userId: string) => {
  try {
    const dataDoc = await firestore()
      .collection(firebaseCollection.users)
      .doc(userId)
      .get();
    return dataDoc.data();
  } catch (error) {
    throw error;
  }
};

export {getUserData, updateUserProfile};
