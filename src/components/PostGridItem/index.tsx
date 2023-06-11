import {Image, Pressable, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import {postsData} from '../../utils/DummyData';
import styles from './styles';
import {Images, Layout} from '../../theme';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const PostGridItem = ({
  photos,
  setSelectedPostImage,
  showSelectedImage,
}: (typeof postsData)[number]) => {
  const opacity = useSharedValue(0);

  const isMultiplePosts = photos.length > 1;

  const isVideo = false;

  const renderIcon = useCallback(() => {
    if (isVideo) {
      return (
        <Image
          style={[Layout.absolute, styles.multiPagesIcon]}
          source={Images.reel_filled}
        />
      );
    }
    if (isMultiplePosts) {
      return (
        <Image
          style={[Layout.absolute, styles.multiPagesIcon]}
          source={Images.multi_pages}
        />
      );
    }
    return null;
  }, [isVideo, isMultiplePosts]);
  const handleLongPress = () => {
    setSelectedPostImage(photos[0]);
    opacity.value = withTiming(0.5, {duration: 150});
    showSelectedImage();
  };

  const handlePressOut = () => {
    opacity.value = withTiming(0, {duration: 150});
  };

  const animatedOpacityStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <Pressable
      delayLongPress={100}
      onLongPress={handleLongPress}
      onPressOut={handlePressOut}>
      <Image source={{uri: photos[0]}} style={styles.gridImage} />
      {renderIcon()}
      <Animated.View
        style={[
          styles.gridImage,
          Layout.absolute,
          StyleSheet.absoluteFill,
          animatedOpacityStyle,
          {backgroundColor: 'black'},
        ]}
      />
    </Pressable>
  );
};

export default PostGridItem;
