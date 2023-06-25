import {FlatList, ListRenderItem, ViewToken} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';
import {reelsData} from '../../../utils/DummyData';
import {ReelItem} from '../../../components';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {useIsForeground} from '../../../hooks';
import {useIsFocused} from '@react-navigation/native';

const ReelsScreen = () => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const isFocussed = useIsFocused();
  const isForeground = useIsForeground();
  const isActive = isFocussed && isForeground;

  const {height} = useSafeAreaFrame();

  const reelListRef = useRef<FlatList | null>(null);

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
        isPaused={isActive ? index !== currentReelIndex : false}
        index={index}
        onFinishPlayingHandler={handleOnFinishPlaying}
      />
    );
  };

  const handleOnFinishPlaying = useCallback(() => {
    if (currentReelIndex !== reelsData.length - 1) {
      reelListRef?.current?.scrollToIndex({
        index: currentReelIndex + 1,
      });
    } else {
      reelListRef?.current?.scrollToIndex({
        index: 0,
      });
    }
  }, [currentReelIndex]);

  const getItemLayout = useCallback(
    (_data: any, index: number) => ({
      length: height,
      offset: height * index,
      index,
    }),
    [height],
  );

  const getKey = useCallback((item: any, index: number) => {
    return `reelList-${index}`;
  }, []);
  return (
    <FlatList
      ref={reelListRef}
      pagingEnabled
      data={reelsData}
      bounces={false}
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      renderItem={renderReelItem}
      decelerationRate={0.9}
      keyExtractor={getKey}
      getItemLayout={getItemLayout}
      onViewableItemsChanged={onViewRef.current}
      viewabilityConfig={viewConfigRef.current}
    />
  );
};

export default ReelsScreen;
