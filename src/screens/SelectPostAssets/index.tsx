import React, {useState} from 'react';
import {View, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import {Colors, Images, Layout, StyleConfig} from '../../theme';
import {useGallery} from '../../hooks';
import {MenuBar} from '../../components';
import {Routes} from '../../navigators/routes';

const SelectPostAssets = ({navigation}) => {
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);

  const {data, fetchMore, hasNextPage} = useGallery();

  const renderItem = ({item, index}) => {
    return (
      <Pressable
        onPress={() => {
          setSelectedAssetIndex(index);
        }}>
        <Image source={{uri: item.uri}} style={styles.image} />
      </Pressable>
    );
  };

  const handleFetchMorePhotos = () => {
    if (!hasNextPage) {
      return;
    }
    fetchMore(12);
  };

  return (
    <View style={[Layout.fill]}>
      <MenuBar
        title="All"
        leftIcon={Images.close}
        onLeftClickListener={navigation.goBack}
        rightIcon={Images.arrow}
        rightIconStyle={[Layout.mirror, styles.arrowIcon]}
        onRightClickListener={() => {
          navigation.navigate(Routes.NewPostScreen, {
            selectedAssetData: data[selectedAssetIndex],
          });
        }}
      />
      <Image
        source={{uri: data?.[selectedAssetIndex]?.uri}}
        style={styles.selectedAsset}
      />
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.gap}
        contentContainerStyle={styles.gap}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={handleFetchMorePhotos}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: (StyleConfig.width - 2) / 3,
    aspectRatio: 1,
  },
  selectedAsset: {
    width: StyleConfig.width,
    aspectRatio: 4 / 5,
    backgroundColor: Colors.gray,
  },
  gap: {
    gap: 1,
  },
  arrowIcon: {
    tintColor: Colors.blue,
  },
});

export default SelectPostAssets;
