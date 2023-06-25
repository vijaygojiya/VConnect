import React, {ReactNode} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {runOnJS} from 'react-native-reanimated';
interface DoubleTapProps {
  children: ReactNode;
  onDoubleTap?: () => void;
  onSingleTap?: () => void;
  doubleTapInterval: number;
}
const DoubleTap = ({
  children,
  onDoubleTap,
  onSingleTap,
  doubleTapInterval = 500,
}: DoubleTapProps) => {
  const singleTapHandler = Gesture.Tap().onEnd((_event, success) => {
    if (success && onSingleTap) {
      runOnJS(onSingleTap)();
    }
  });

  const doubleTapHandle = Gesture.Tap()
    .numberOfTaps(2)
    .maxDuration(doubleTapInterval)
    .onEnd((_, success) => {
      if (success && onDoubleTap) {
        runOnJS(onDoubleTap)();
      }
    });
  const taps = Gesture.Exclusive(doubleTapHandle, singleTapHandler);

  return <GestureDetector gesture={taps}>{children}</GestureDetector>;
};

export default DoubleTap;
