import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

import {PostDataTypeWithUser} from './common';

export interface FetchFollowingUserPostsResult {
  lastItemIndex: FirebaseFirestoreTypes.QueryDocumentSnapshot<FirebaseFirestoreTypes.DocumentData> | null;
  newPosts: Array<PostDataTypeWithUser>;
  error?: unknown;
}
