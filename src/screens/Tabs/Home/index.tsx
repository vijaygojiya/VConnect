import {
  Animated,
  FlatList,
  Image,
  ListRenderItem,
  StyleSheet,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Colors, Images, Layout} from '../../../theme';
import {dummyStoriesData, postsData} from '../../../utils/DummyData';
import {MenuBar, MenuBarWithLogo, Post, Story} from '../../../components';
import {getCloser} from '../../../utils/utils';

const {diffClamp} = Animated;
const headerHeight = 2 * (20 + 32);

const ITEM_HEIGHT = 431.64;

const HomeScreen = () => {
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
        <View style={styles.userBadge}>
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

  const handleSnap = ({nativeEvent}) => {
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

  return (
    <View style={[Layout.fill, styles.container]}>
      <Animated.View style={[styles.header, {transform: [{translateY}]}]}>
        {/* <Image source={Images.text_logo}  /> */}
        <MenuBarWithLogo />
      </Animated.View>

      <Animated.FlatList
        onScroll={handleScroll}
        scrollEventThrottle={16}
        ref={homeFlatlistRef}
        data={postsData}
        ListHeaderComponent={renderStoriesList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) =>
          `homeFeedPostListItem-${item.post_id}${index}`
        }
        renderItem={renderPostImage}
        getItemLayout={(_, index) => ({
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT * index,
          index,
        })}
        contentContainerStyle={{paddingTop: headerHeight / 2}}
        onMomentumScrollEnd={handleSnap}
        bounces={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
    height: headerHeight / 2,
  },
  userContainer: {
    marginHorizontal: 5,
  },
  userImage: {
    height: 66,
    width: 66,
    borderRadius: 66 / 2,
  },
  userBadge: {
    position: 'absolute',
    right: 0,
    bottom: -4,
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 12,
  },
  badgeImage: {
    tintColor: 'white',
    height: 10,
    width: 10,
    margin: 5,
  },
  storiesListContainer: {
    padding: 10,
  },
  storiesList: {
    borderTopWidth: 0.1,
    borderColor: 'black',
    borderBottomWidth: 0.19,
  },
});

export default HomeScreen;
