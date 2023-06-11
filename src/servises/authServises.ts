import firestore from '@react-native-firebase/firestore';
import {firebaseCollection, usersCollectionKeys} from '../utils/Constant';
import {FirebaseWhereFilterOp} from '../utils/Enum';

const usersCollection = firestore().collection(firebaseCollection.users);

const checkUsernameAvailability = async (username: string) => {
  const snapshot = await usersCollection
    .where(usersCollectionKeys.userName, FirebaseWhereFilterOp.Equal, username)
    .get();
  return snapshot.empty;
};

export {checkUsernameAvailability};
