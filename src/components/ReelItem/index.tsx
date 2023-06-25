import React, {useRef, useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Video from 'react-native-video';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {postsData} from '../../utils/DummyData';
import {Colors, Images, Layout, Margin, StyleConfig} from '../../theme';

import DoubleTap from '../DoubleTap';
import {useLikeAnimation} from '../../hooks';
import AnimatedHeartIcon from '../AnimatedHeartIcon';

interface ReelItemType {
  url: number;
  isPaused: boolean;
  index: number;
  onFinishPlayingHandler: (index: number) => void;
}

const ReelItem = ({
  url,
  isPaused,
  index,
  onFinishPlayingHandler,
}: ReelItemType) => {
  const reelVideoRef = useRef<Video | null>(null);
  const {height} = useSafeAreaFrame();

  const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);

  const {
    isLiked,
    animatedHeartIconStyle,
    handleDoubleTapForLikePost,
    handleLikePost,
  } = useLikeAnimation();

  const handleSingleTapOnPostImage = () => {
    console.log('single tap');
  };

  const handleOnVideoEnd = () => {
    onFinishPlayingHandler(index);
  };

  const handleCaptionPress = () => {
    setIsCaptionExpanded(!isCaptionExpanded);
  };

  const captionStyle = isCaptionExpanded
    ? styles.captionExpanded
    : styles.captionCollapsed;

  return (
    <DoubleTap
      onDoubleTap={handleDoubleTapForLikePost}
      onSingleTap={handleSingleTapOnPostImage}>
      <View style={[Layout.justifyContentEnd, {height: height - 46}]}>
        <Video
          repeat={true}
          ref={reelVideoRef}
          playInBackground={false}
          playWhenInactive={false}
          source={url}
          style={styles.video}
          paused={isPaused}
          resizeMode="cover"
          onLoad={() => {
            reelVideoRef?.current?.seek(1);
          }}
          onEnd={handleOnVideoEnd}
        />

        <AnimatedHeartIcon animatedHeartIconStyle={animatedHeartIconStyle} />
        <View
          style={[Layout.row, Layout.alignItemsEnd, styles.footerContainer]}>
          <View style={styles.reelInfoContainer}>
            <View style={Layout.rowHCenter}>
              <Image
                source={{uri: postsData[index].photos[0]}}
                style={styles.profilePic}
              />
              <Text style={styles.userName}>vm_gojiya</Text>
              <Text style={styles.followText}>Follow</Text>
            </View>
            <TouchableWithoutFeedback onPress={handleCaptionPress}>
              <Text
                style={[styles.caption, captionStyle]}
                numberOfLines={isCaptionExpanded ? undefined : 1}>
                {postsData[index].caption}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View>
            <Pressable
              onPress={handleLikePost}
              style={[Layout.alignItemsCenter, styles.reelActionContainer]}>
              <Image
                source={isLiked ? Images.like_filled : Images.like_outline}
                style={[
                  styles.reelActionIcon,
                  isLiked && {tintColor: undefined},
                ]}
              />
              <Text style={styles.reelActionText}>44.4K</Text>
            </Pressable>
            <Pressable
              style={[Layout.alignItemsCenter, styles.reelActionContainer]}>
              <Image source={Images.comment} style={styles.reelActionIcon} />
              <Text style={styles.reelActionText}>44.4K</Text>
            </Pressable>
            <Pressable
              style={[Layout.alignItemsCenter, styles.reelActionContainer]}>
              <Image source={Images.share} style={styles.reelActionIcon} />
            </Pressable>
            <Pressable
              style={[Layout.alignItemsCenter, styles.reelActionContainer]}>
              <Image
                source={Images.dot}
                style={[Layout.rotate90, styles.reelActionIcon]}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </DoubleTap>
  );
};

export default ReelItem;

const styles = StyleSheet.create({
  video: {
    ...Layout.absolute,
    height: '100%',
    width: '100%',
  },
  reelActionContainer: {
    marginVertical: Margin.small,
  },
  footerContainer: {
    paddingHorizontal: 10,
  },
  profilePic: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  userName: {
    marginHorizontal: 8,
    color: Colors.white,
  },
  followText: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.lightGrey,
    paddingVertical: 4,
    paddingHorizontal: 12,
    color: Colors.white,
  },
  reelActionIcon: {
    tintColor: Colors.white,
  },
  reelActionText: {
    color: Colors.white,
  },
  reelInfoContainer: {
    marginHorizontal: 5,
    flex: 1,
  },
  caption: {
    color: Colors.white,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: Margin.small,
  },
  captionCollapsed: {
    maxHeight: 20,
    overflow: 'hidden',
  },
  captionExpanded: {
    flex: 1,
  },
});
