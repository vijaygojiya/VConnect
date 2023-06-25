import {
  Animated,
  FlatList,
  Image,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import {Images, Layout} from '../../../theme';
import {dummyStoriesData, postsData} from '../../../utils/DummyData';
import {MenuBarWithLogo, Post, Story} from '../../../components';
import {getCloser} from '../../../utils/utils';
import styles from './styles';
import {headerHeight} from '../../../utils/Constant';
import {useUser} from '../../../hooks';

const {diffClamp} = Animated;

export const ITEM_HEIGHT = 431.64;

const HomeScreen = () => {
  // const {storedUser,setStoredUser} = useUser();
  // console.log('_storedUser', storedUser);

  // useEffect(()=>{

  // },[])
  // const fetchUserData = ()=>{

  // }
  const renderPostImage: ListRenderItem<(typeof postsData)[number]> = ({
    item,
  }) => {
    return <Post {...item} />;
  };

  const renderStoryItem: ListRenderItem<(typeof dummyStoriesData)[number]> = ({
    item,
  }) => {
    return <Story {...item} />;
  };

  const renderCurrentLoginUser = () => {
    return (
      <View style={styles.userContainer}>
        <Image
          source={{uri: dummyStoriesData[3].profilePic}}
          style={styles.userImage}
        />
        <View
          style={[
            Layout.absolute,
            Layout.right0,
            Layout.selfCenter,
            styles.userBadge,
          ]}>
          <Image
            resizeMode="contain"
            source={Images.plus}
            style={styles.badgeImage}
          />
        </View>
      </View>
    );
  };

  const renderStoriesList = () => {
    return (
      <FlatList
        horizontal={true}
        ListHeaderComponent={renderCurrentLoginUser}
        showsHorizontalScrollIndicator={false}
        data={[...dummyStoriesData, ...dummyStoriesData, ...dummyStoriesData]}
        renderItem={renderStoryItem}
        contentContainerStyle={styles.storiesListContainer}
        style={styles.storiesList}
      />
    );
  };

  const homeFlatlistRef = useRef<FlatList | null>(null);
  // Animation
  const scrollY = useRef(new Animated.Value(0));
  const scrollYClamped = diffClamp(scrollY.current, 0, headerHeight);

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });

  const translateYNumber = useRef();

  translateY.addListener(({value}) => {
    translateYNumber.current = value;
  });

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {y: scrollY.current},
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  const handleSnap = ({
    nativeEvent,
  }: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (homeFlatlistRef.current) {
        homeFlatlistRef.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + headerHeight / 2
              : offsetY - headerHeight / 2,
        });
      }
    }
  };

  const handleGetKey = useCallback(
    (item: any, index: number) =>
      `homeFeedPostListItem-${item.post_id}${index}`,
    [],
  );

  const getItemLayout = useCallback(
    (_item: any, index: number) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );

  return (
    <View style={[Layout.fill, styles.container]}>
      <Animated.View
        style={[
          styles.header,
          Layout.absolute,
          Layout.left0,
          Layout.right0,
          Layout.fullWidth,
          {transform: [{translateY}]},
        ]}>
        <MenuBarWithLogo />
      </Animated.View>
      <Animated.FlatList
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={homeFlatlistRef}
        data={postsData}
        ListHeaderComponent={renderStoriesList}
        showsVerticalScrollIndicator={false}
        keyExtractor={handleGetKey}
        renderItem={renderPostImage}
        getItemLayout={getItemLayout}
        contentContainerStyle={styles.listContentContainerStyle}
        onMomentumScrollEnd={handleSnap}
        bounces={false}
      />
    </View>
  );
};

export default HomeScreen;
