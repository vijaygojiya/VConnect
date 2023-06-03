import React, {ReactNode, useRef} from 'react';
import {
  HandlerStateChangeEvent,
  State,
  TapGestureHandler,
} from 'react-native-gesture-handler';
interface DoubleTapProps {
  children: ReactNode;
  onDoubleTap?: () => void;
  onSingleTap?: () => void;
}
const DoubleTap = ({children, onDoubleTap, onSingleTap}: DoubleTapProps) => {
  const doubleTapRef = useRef<TapGestureHandler>(null);

  const onSingleTapEvent = (event: HandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onSingleTap?.();
    }
  };

  const onDoubleTapEvent = (event: HandlerStateChangeEvent) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      onDoubleTap?.();
    }
  };

  return (
    <TapGestureHandler onActivated={onSingleTapEvent} waitFor={doubleTapRef}>
      <TapGestureHandler
        maxDelayMs={250}
        ref={doubleTapRef}
        onActivated={onDoubleTapEvent}
        numberOfTaps={2}>
        {children}
      </TapGestureHandler>
    </TapGestureHandler>
  );
};

export default DoubleTap;
