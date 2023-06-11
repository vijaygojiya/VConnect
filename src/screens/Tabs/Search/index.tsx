import {FlatList, Image, ListRenderItem, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, Layout} from '../../../theme';
import styles from './styles';
import {postsData} from '../../../utils/DummyData';
import {PostFooter, PostGridItem} from '../../../components';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';

const SearchScreen = () => {
  const [selectedPostImage, setSelectedPostImage] = useState(null);
  const scale = useSharedValue(0);

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      hideSelectedImage();
    });

    return unsubscribe;
  }, [navigation]);

  const showSelectedImage = () => {
    scale.value = withSpring(1, {
      damping: 10,
      stiffness: 100,
    });
  };

  const hideSelectedImage = () => {
    scale.value = withSpring(
      0,
      {
        damping: 10,
        stiffness: 100,
      },
      finished => {
        if (finished) {
          runOnJS(setSelectedPostImage)(null);
        }
      },
    );
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: scale.value,
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
      // opacity: scale.value,
    };
  });

  const renderPostGridItem: ListRenderItem<(typeof postsData)[number]> = ({
    item,
    index,
  }) => {
    return (
      <PostGridItem
        {...item}
        index={index}
        setSelectedPostImage={setSelectedPostImage}
        showSelectedImage={showSelectedImage}
        hideSelectedImage={hideSelectedImage}
      />
    );
  };

  return (
    <View style={[Layout.fill]}>
      <FlatList
        numColumns={3}
        data={[...postsData, ...postsData, ...postsData, ...postsData]}
        columnWrapperStyle={styles.flColumnWrapperStyle}
        contentContainerStyle={styles.flContainerStyle}
        renderItem={renderPostGridItem}
        keyExtractor={(_, index) => `searchPostGridImage-${index}`}
        showsVerticalScrollIndicator={false}
        onMomentumScrollEnd={hideSelectedImage}
        onTouchEnd={hideSelectedImage}
      />
      {selectedPostImage ? (
        <>
          <Animated.View
            style={[
              Layout.justifyContentCenter,
              styles.selectedImageContainer,
              animatedContainerStyle,
            ]}>
            <BlurView
              style={[StyleSheet.absoluteFillObject]}
              blurType="light"
              blurAmount={10}
              overlayColor={Colors.transparent}
              reducedTransparencyFallbackColor="white"
            />
            <Animated.View style={[styles.imageContainer, animatedImageStyle]}>
              <Image
                source={{uri: selectedPostImage}}
                style={[styles.selectedImage]}
              />
              <PostFooter
                isLike={false}
                isSaved={false}
                likePostHandler={() => {}}
                savePostHandler={() => {}}
              />
            </Animated.View>
          </Animated.View>
        </>
      ) : null}
    </View>
  );
};

export default SearchScreen;
