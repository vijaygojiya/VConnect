import {useState} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

const useLikeAnimation = () => {
  const [isLiked, setIsLiked] = useState(false);
  const scale = useSharedValue(0);

  const animatedHeartIconStyle = useAnimatedStyle(() => ({
    transform: [{scale: Math.max(scale.value, 0)}],
  }));

  const handleDoubleTapForLikePost = () => {
    if (!isLiked) {
      setIsLiked(true);
    }
    scale.value = 0;
    scale.value = withSpring(1, {velocity: 10}, isFinished => {
      if (isFinished) {
        scale.value = withDelay(200, withTiming(0, {duration: 200}));
      }
    });
  };

  const handleLikePost = () => {
    setIsLiked(prev => !prev);
  };

  return {
    isLiked,
    animatedHeartIconStyle,
    handleDoubleTapForLikePost,
    handleLikePost,
  };
};

export default useLikeAnimation;
