import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';

export interface UserDataType {
  AccountId: string | undefined;
  Bio: string | undefined;
  DateCreated: FirebaseFirestoreTypes.Timestamp;
  Email: string;
  Followers: string[];
  Following: string[];
  FullName: string;
  Mobile: string | undefined;
  PublicKey: string | undefined;
  RequestedUserList: string[];
  UId: string;
  UserName: string;
  WalletAddress: string | undefined;
  bookMarkedPosts: FirebaseFirestoreTypes.DocumentReference[];
  fcmtoken: string | undefined;
  postCount: number;
  profileImageURL: string | undefined;
  step1: boolean;
}

export interface UploadImageToNftType {
  ok: boolean;
  value: {
    cid: string;
    created: Date;
    type: string;
    scope: string;
    files: [
      {
        name: string;
        type: string;
      },
    ];
    size: number;
    name: string;
    pin: {
      cid: string;
      created: string;
      size: number;
      status: string;
    };
    deals: Array<string>;
  };
}

export interface PostDataType {
  post_id: number;
  user_id: number;
  caption: string;
  photos: string[];
  likes: number;
  saved_by: number[];
  comments: {
    user_id: number;
    comment: string;
  }[];
  shares: number;
  hidden_by: number[];
  reported_by: number[];
  created_at: string;
  updated_at: string;
}

interface PostDataTypeWithUser extends UserDataType {
  cId: string;
  caption: string;
  commentCount: number;
  fileName: string;
  is_deleted: boolean;
  likeCount: string[];
  mediaType: 'image' | 'video';
  postId: string;
  sellPrice: number | string;
  timeStamp: FirebaseFirestoreTypes.Timestamp;
  tokenId: string;
  uId: string;
  url: string;
  userRef: FirebaseFirestoreTypes.DocumentReference[];
}
