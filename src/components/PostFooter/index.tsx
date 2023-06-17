import {Image, Pressable, View} from 'react-native';
import React, {useEffect} from 'react';
import {Images, Layout} from '../../theme';
import styles from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface PostFooterPropsType {
  isLiked: boolean;
  isSaved: boolean;
  likePostHandler: () => void;
  savePostHandler: () => void;
}
const PostFooter = ({
  isLiked,
  isSaved,
  likePostHandler,
  savePostHandler,
}: PostFooterPropsType) => {
  useEffect(() => {
    handleAnimate();
  }, [isLiked]);

  const handleAnimate = () => {
    scale.value = 0.8;
    scale.value = withSpring(1);
  };
  const scale = useSharedValue(1);
  const animatedHeartStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));
  return (
    <View style={[Layout.row, styles.container]}>
      <Pressable onPress={likePostHandler}>
        {({pressed}) => (
          <Animated.Image
            source={
              pressed || isLiked ? Images.like_filled : Images.like_outline
            }
            style={[
              styles.postActionsIcon,
              (isLiked || pressed) && Layout.removeTintColor,
              animatedHeartStyle,
            ]}
            resizeMode="contain"
          />
        )}
      </Pressable>
      <Image
        source={Images.comment}
        style={styles.postActionsIcon}
        resizeMode="contain"
      />
      <Image
        source={Images.share}
        style={styles.postActionsIcon}
        resizeMode="contain"
      />
      <View style={Layout.fill} />
      <Pressable onPress={savePostHandler}>
        <Image
          source={isSaved ? Images.save_filled : Images.save_outline}
          resizeMode="contain"
          style={styles.postActionsIcon}
        />
      </Pressable>
    </View>
  );
};

export default PostFooter;
