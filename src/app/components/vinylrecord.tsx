
import { ImageBackground } from 'expo-image';
import { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    Image,
    StyleSheet,
    View,
} from 'react-native';

type VinylRecordProps = {
    isPlaying: boolean;
};

export default function VinylRecord({
    isPlaying,
}: VinylRecordProps) {
    const rotation = useRef(new Animated.Value(0)).current;
    // Keep the last angle so playback can resume where it paused.
    const currentRotation = useRef(0);

    const spin = rotation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        if (!isPlaying) return;

        let isActive = true;
        const spin = (from: number) => {
            // Scale the remaining time to keep the spin speed constant after resuming.
            const duration = 3000 * (360 - from) / 360;
            Animated.timing(rotation, {
                toValue: 360,
                duration,
                easing: Easing.linear,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (!finished || !isActive) return;

                // Start another full turn to keep spinning indefinitely.
                currentRotation.current = 0;
                rotation.setValue(0);
                spin(0);
            });
        };

        spin(currentRotation.current);

        return () => {
            isActive = false;
            // Capture the current angle before stopping so the next play resumes smoothly.
            rotation.stopAnimation((value) => {
                currentRotation.current = value;
            });
        };
    }, [isPlaying, rotation]);

    return (
        <Animated.View
            style={[
                styles.vinyl,
                { transform: [{ rotate: spin }] },
            ]}
        >
            <ImageBackground
                source={require('../../../assets/images/vinyl.png')}
                style={styles.vinylImage}
                contentFit="contain"
            >
                <View style={styles.label}>
                    <Image
                        source={require('../../../assets/images/vices-and-virtues.jpg')}
                        style={styles.cover}
                        resizeMode="cover"
                    />

                    <View style={styles.hole} />
                </View>
            </ImageBackground>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    vinyl: {
        width: 280,
        height: 280,
        borderRadius: 140,
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#383838',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 8,
    },

    vinylImage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    label: {
        width: '52%',
        height: '52%',
        borderRadius: 999,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#8C5B3E',
        borderWidth: 2,
    },

    cover: {
        width: '100%',
        height: '100%',
    },

    hole: {
        position: 'absolute',
        width: 9,
        height: 9,
        borderRadius: 5,
        backgroundColor: '#171717',
        borderWidth: 1,
        borderColor: '#888',
    },
});
