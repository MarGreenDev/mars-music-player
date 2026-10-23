import { Image, Pressable, StyleSheet, View } from "react-native";

type MediaControlsProps = {
    isPlaying: boolean;
    onTogglePlayback: () => void;
}

export default function MediaControls({
    isPlaying,
    onTogglePlayback,
}: MediaControlsProps) {

    return (
        <View style={styles.mediaControlsContainer}>
            <Pressable onPress={() => console.log('arrow back pressed')}>
                <Image
                    source={require('../../../assets/images/icons/arrows.png')}
                />

            </Pressable>
            <Pressable onPress={onTogglePlayback}>
                <View style={styles.pauseButton}>
                    <Image
                        source={
                            isPlaying
                                ? require('../../../assets/images/icons/pause.png')
                                : require('../../../assets/images/icons/pause.png')
                        }
                        style={styles.pauseButtonIcon}
                    />
                </View>
            </Pressable>

            <Pressable onPress={() => console.log('arrow next pressed')}>
                <Image
                    source={require('../../../assets/images/icons/arrowsReverse.png')}
                />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mediaControlsContainer: {
        backgroundColor: 'rgba(140, 91, 62, 0.7)',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        gap: 30,
    },

    pauseButton: {
        backgroundColor: '#593E2E',
        borderRadius: 50,
        padding: 12,

    },

    pauseButtonIcon: {
        width: 48,
        height: 48,
    },
})