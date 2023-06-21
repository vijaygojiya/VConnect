import {uploadImage} from './firebaseUtils';
import firestore from '@react-native-firebase/firestore';

export const addNewPost = async (
  caption: string,
  userId: string,
  photos: {uri: string; fileName: string}[],
) => {
  try {
    const photoUrls = [];
    for (const photo of photos) {
      const imageUri = photo.uri;
      const fileName = photo.fileName;

      const imageUrl = await uploadImage(imageUri, 'posts', fileName);

      photoUrls.push(imageUrl);
    }
    const newPostRef = firestore().collection('posts').doc();
    const postId = newPostRef.id;

    await newPostRef.set({
      postID: postId,
      userID: userId,
      caption,
      photos: photoUrls,
      likes: [],
      savedBy: [],
      comments: [],
      shares: 0,
      hiddenBy: [],
      reportedBy: [],
      createdAt: firestore.FieldValue.serverTimestamp(),
      updatedAt: firestore.FieldValue.serverTimestamp(),
    });
  } catch (error) {
    throw error;
  }
};
