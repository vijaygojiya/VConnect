import {FlatList, ListRenderItem, View, ViewToken} from 'react-native';
import React, {useRef, useState} from 'react';
import {Layout} from '../../../theme';
import {reelsData} from '../../../utils/DummyData';
import {ReelItem} from '../../../components';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

const ReelsScreen = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const {height} = useSafeAreaFrame();

  const FlatlistRef = useRef<FlatList | null>(null);

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 70});

  const onViewRef = useRef(
    (info: {viewableItems: ViewToken[]; changed: ViewToken[]}) => {
      if (info.viewableItems.length > 0) {
        const index = info.viewableItems[0].index;
        setCurrentReelIndex(index ?? 0);
      }
    },
  );

  const renderReelItem: ListRenderItem<(typeof reelsData)[number]> = ({
    item,
    index,
  }) => {
    return (
      <ReelItem
        {...item}
        isPaused={index !== currentReelIndex}
        index={index}
        onFinishPlayingHandler={handleOnFinishPlaying}
      />
    );
  };

  const handleOnFinishPlaying = () => {
    if (currentReelIndex !== reelsData.length - 1) {
      FlatlistRef?.current?.scrollToIndex({
        index: currentReelIndex + 1,
      });
    } else {
      FlatlistRef?.current?.scrollToIndex({
        index: 0,
      });
    }
  };

  return (
    <FlatList
      ref={FlatlistRef}
      pagingEnabled
      data={reelsData}
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      renderItem={renderReelItem}
      decelerationRate={0.9}
      getItemLayout={(_data, index) => ({
        length: height,
        offset: height * index,
        index,
      })}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default ReelsScreen;
