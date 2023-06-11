import {
  FlatList,
  ImageBackground,
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
import {Fonts, Images, Layout, StyleConfig} from '../../theme';
import DoubleTap from '../DoubleTap';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

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
  const [isLike, setIsLiked] = useState(false);
  const [isSaved, setSaved] = useState(false);

  const [selectedPostIndex, setSelectedPostIndex] = useState(0);
  const scale = useSharedValue(0);

  const renderPostPhotoItem: ListRenderItem<string> = ({item}) => {
    return (
      <ImageBackground
        source={{uri: item}}
        resizeMode="cover"
        style={[styles.postPhoto, Layout.center]}>
        <Animated.Image
          source={Images.like_filled}
          style={[styles.heartIcon, animatedHeartIconStyle]}
        />
      </ImageBackground>
    );
  };

  const animatedHeartIconStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

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

  const handleDoubleTapForLikePost = () => {
    if (!isLike) {
      setIsLiked(true);
    }
    scale.value = 0;
    scale.value = withSpring(1, {velocity: 10}, isFinished => {
      if (isFinished) {
        scale.value = withDelay(200, withTiming(0, {duration: 200}));
      }
    });
  };

  const handleLikePost = () => {
    setIsLiked(prev => !prev);
  };

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
        isLike={isLike}
        isSaved={isSaved}
        likePostHandler={handleLikePost}
        savePostHandler={handleSavePost}
      />
    </View>
  );
};

export default Post;
