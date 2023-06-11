import {UserState} from '../store/context/userDetail';

export type ActionType = {
  type: string;
  payload: boolean | UserState;
};

export interface fetchFeedPostApiType {
  status: boolean;
  message: string;
  result?: {
    posts: fetchPostType[];
    metaData: {nextOffSet: number};
  };
}
