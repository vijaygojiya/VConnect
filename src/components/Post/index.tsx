import {
  FlatList,
  Image,
  ListRenderItem,
  Text,
  View,
  ViewToken,
} from 'react-native';
import React, {useRef, useState} from 'react';
// import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import styles from './styles';
import PostHeader from '../PostHeader';
import PostFooter from '../PostFooter';
import {Fonts, StyleConfig} from '../../theme';
import DoubleTap from '../DoubleTap';

import AnimatedHeartIcon from '../AnimatedHeartIcon';
import {useLikeAnimation} from '../../hooks';

interface PostPropsType {
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

const ITEM_WIDTH = StyleConfig.width;
const Post = ({photos}: PostPropsType) => {
  const [isSaved, setSaved] = useState(false);

  const {
    isLiked,
    animatedHeartIconStyle,
    handleDoubleTapForLikePost,
    handleLikePost,
  } = useLikeAnimation();

  const [selectedPostIndex, setSelectedPostIndex] = useState(0);

  const renderPostPhotoItem: ListRenderItem<string> = ({item}) => {
    return (
      <Image source={{uri: item}} resizeMode="cover" style={styles.postPhoto} />
    );
  };

  const handleSingleTapOnPostImage = () => {
    console.log('single tap');
  };

  const handleViewableItemsChangedRef = useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      if (info.viewableItems.length > 0) {
        const index = info.viewableItems[0].index;
        setSelectedPostIndex(index ?? 0);
      }
    },
  );
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const handleSavePost = () => {
    setSaved(prev => !prev);
  };
  return (
    <View>
      <PostHeader
        userName="vm_gojiya"
        userProfilePic={photos[0]}
        location="Hidden in the leaves"
      />
      <DoubleTap
        onDoubleTap={handleDoubleTapForLikePost}
        onSingleTap={handleSingleTapOnPostImage}>
        <FlatList
          horizontal={true}
          overScrollMode="never"
          bounces={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `postsPhotoList-${item}`}
          data={photos}
          renderItem={renderPostPhotoItem}
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={handleViewableItemsChangedRef.current}
          getItemLayout={(_, index) => ({
            length: ITEM_WIDTH,
            offset: ITEM_WIDTH * index,
            index,
          })}
        />
      </DoubleTap>
      <AnimatedHeartIcon animatedHeartIconStyle={animatedHeartIconStyle} />
      {photos.length > 1 ? (
        <Text
          style={[
            Fonts.textInterSemiBold,
            Fonts.textSmall,
            styles.currentPostNumber,
          ]}>
          {selectedPostIndex + 1}/{photos.length}
        </Text>
      ) : null}
      <PostFooter
        isLiked={isLiked}
        isSaved={isSaved}
        likePostHandler={handleLikePost}
        savePostHandler={handleSavePost}
      />
    </View>
  );
};

export default Post;
