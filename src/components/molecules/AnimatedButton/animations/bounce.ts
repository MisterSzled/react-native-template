import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { ButtonAnimationInfo } from './types';

export function bounce(): ButtonAnimationInfo {
        const animating = useSharedValue(false);
        const translateY = useSharedValue(0);

        const pressIn = () => {
                if (animating.value) return;
                animating.value = true;

                translateY.value = withTiming(5, { duration: 100 }, () => {
                        translateY.value = withTiming(0, { duration: 100 })
                })
        }

        const animatedStyle = useAnimatedStyle(() => ({
                transform: [{ translateY: translateY.value }],
        }));

        return {
                animatedStyle,
                pressIn,
                pressOut: undefined,
        }
}