import {Image, Pressable, View} from 'react-native';
import React, {useState} from 'react';
import {Images, Layout} from '../../theme';
import styles from './styles';

const PostFooter = () => {
  const [isLike, setIsLiked] = useState(false);

  const handleLikePost = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <View style={[Layout.row, styles.container]}>
      <Pressable onPress={handleLikePost}>
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
      <Image
        source={Images.save}
        resizeMode="contain"
        style={styles.postActionsIcon}
      />
    </View>
  );
};

export default PostFooter;
