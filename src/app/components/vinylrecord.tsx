
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
    const animation = useRef<Animated.CompositeAnimation | null>(null);

    const spin = rotation.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg'],
    });

    useEffect(() => {
        if (isPlaying) {
            animation.current?.stop();

            animation.current = Animated.loop(
                Animated.timing(rotation, {
                    toValue: 360,
                    duration: 3000,
                    easing: Easing.linear,
                    useNativeDriver: true,
                })
            );

            animation.current.start();
        } else {
            animation.current?.stop();
        }

        return () => {
            animation.current?.stop();
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
