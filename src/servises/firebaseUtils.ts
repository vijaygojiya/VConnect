import storage from '@react-native-firebase/storage';

export const uploadImage = async (
  path: string,
  folderName: string,
  filename: string,
): Promise<string> => {
  try {
    const ref = storage().ref(folderName).child(filename);
    await ref.putFile(path);
    return ref.getDownloadURL();
  } catch (error) {
    console.log('eeee', error);
    throw error;
  }
};
