import {FlatList, Text, View} from 'react-native';
import React from 'react';
import {Layout} from '../../../theme';
import styles from './styles';
import {postsData} from '../../../utils/DummyData';
import {Post} from '../../../components';

const HomeScreen = () => {
  const renderPostImage = ({item, index}) => {
    return <Post {...item} />;
  };
  return (
    <View style={[Layout.fill, Layout.center, styles.container]}>
      <FlatList data={postsData} renderItem={renderPostImage} />
    </View>
  );
};

export default HomeScreen;
