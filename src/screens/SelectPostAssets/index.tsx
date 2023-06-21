import React, {useState} from 'react';
import {View, FlatList, Image, StyleSheet, Pressable} from 'react-native';
import {Colors, Images, Layout, StyleConfig} from '../../theme';
import {useGallery} from '../../hooks';
import {MenuBar} from '../../components';

const SelectPostAssets = () => {
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);

  const {data, fetchMore, hasNextPage, isLoading, folders} = useGallery();
  console.log(
    'data, fetchMore, hasNextPage, isLoading, folders',
    data,
    // fetchMore,
    hasNextPage,
    isLoading,
    // folders,
  );

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

  console.log('data?.[selectedAssetIndex].uri', data?.[selectedAssetIndex].uri);

  return (
    <View style={[Layout.fill]}>
      <MenuBar title="create aa post" leftIcon={Images.array} />
      <Image
        source={{uri: data?.[selectedAssetIndex].uri}}
        style={styles.selectedAsset}
        resizeMode="contain"
      />
      <FlatList
        numColumns={3}
        columnWrapperStyle={{gap: 1}}
        contentContainerStyle={{gap: 1}}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchMore(12);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContent: {
    flexGrow: 1,
  },
  image: {
    width: (StyleConfig.width - 2) / 3,
    aspectRatio: 1,
  },
  selectedAsset: {
    width: StyleConfig.width,
    aspectRatio: 5 / 4,
    backgroundColor: Colors.gray,
  },
  cameraContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default SelectPostAssets;
