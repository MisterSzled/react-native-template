import { useSharedValue, withTiming } from 'react-native-reanimated';
import { ButtonAnimationInfo } from './types';

function bounce(): ButtonAnimationInfo {
        const animating = useSharedValue(false);
        const translateY = useSharedValue(0);

        const pressIn = () => {
                if (animating.value) return;
                animating.value = true;

                translateY.value = withTiming(5, { duration: 100 }, () => {
                        translateY.value = withTiming(0, { duration: 100 })
                })
        }

        return {
                animatedStyle: { transform: [{ translateY }] },
                pressIn,
                pressOut: undefined,
                needsBackdrop: true
        }
}