import { Text, View } from 'react-native';
import album from '../data/vices-and-virtues.json';

export default function SongsList() {
    // Im using a json file that mocks the spotify api output, for when i eventually
    // want to integrate the actual spotify api

    return (
        <View>
            {album.tracks.map((track) => (
                <View key={track.id}>
                    <Text>
                        {track.track_number}
                    </Text>

                    <Text>
                        {track.name}
                    </Text>
                </View>
            ))}
        </View>
    );
}