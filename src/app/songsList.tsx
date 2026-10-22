import { Image, StyleSheet, Text, View } from 'react-native';
import album from '../data/vices-and-virtues.json';

export default function SongsList() {
    // Im using a json file that mocks the spotify api output, for when i eventually
    // want to integrate the actual spotify api

    return (
        <View style={styles.container}>
            <View style={styles.currentAlbum}>
                <Image
                    source={{ uri: album.image }}
                    style={styles.albumCover}
                />
                <View style={styles.albumInfo}>
                    <Text style={styles.albumName}>
                        Vices & Virtues
                    </Text>
                    <Text style={styles.albumArtist}>
                        Panic! At The Disco
                    </Text>
                </View>
            </View>

            {album.tracks.map((track) => (
                <View key={track.id} style={styles.track}>
                    <Text style={styles.trackNumber}>
                        {track.track_number}.
                    </Text>

                    <Text style={styles.trackName}>
                        {track.name}
                    </Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#593E2E',
        flex: 1,
        padding: 16,
    },

    track: {
        flexDirection: 'row',
        gap: 16,
        alignItems: 'center',
        paddingVertical: 10,
    },

    trackNumber: {
        color: '#F2E6D8'
    },

    trackName: {
        color: '#F2E6D8',
    },

    currentAlbum: {
        flexDirection: 'row',
        gap: 16,
    },

    albumInfo: {
        justifyContent: 'center',
        gap: 10,
    },

    albumName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#F2E6D8',
    },

    albumArtist: {
        fontSize: 12,
        fontStyle: 'italic',
        color: '#F2E6D8',
    },

    albumCover: {
        width: 131,
        height: 131,
    },
})