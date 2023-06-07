import {FlatList, ListRenderItem, View} from 'react-native';
import React from 'react';
import {Layout} from '../../../theme';
import styles from './styles';
import {postsData} from '../../../utils/DummyData';
import {Post} from '../../../components';

const ITEM_HEIGHT = 431.64;

const HomeScreen = () => {
  const renderPostImage: ListRenderItem<(typeof postsData)[0]> = ({item}) => {
    return <Post {...item} />;
  };
  return (
    <View style={[Layout.fill, Layout.center, styles.container]}>
      <FlatList
        data={postsData}
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
      />
    </View>
  );
};

export default HomeScreen;
