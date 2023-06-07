import {Image, Pressable, View} from 'react-native';
import React from 'react';
import {Images, Layout} from '../../theme';
import styles from './styles';

interface PostFooterPropsType {
  isLike: boolean;
  isSaved: boolean;
  likePostHandler: () => void;
  savePostHandler: () => void;
}
const PostFooter = ({
  isLike,
  isSaved,
  likePostHandler,
  savePostHandler,
}: PostFooterPropsType) => {
  return (
    <View style={[Layout.row, styles.container]}>
      <Pressable onPress={likePostHandler}>
        <Image
          source={isLike ? Images.like_filled : Images.like_outline}
          style={[styles.postActionsIcon, isLike && Layout.removeTintColor]}
          resizeMode="contain"
        />
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
