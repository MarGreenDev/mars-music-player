
import { Image, StyleSheet, View } from 'react-native';

export default function VinylRecord() {
    return (
        <View style={styles.vinyl}>
            <View style={styles.groove1} />
            <View style={styles.groove2} />
            <View style={styles.groove3} />

            <View style={styles.label}>
                <Image
                    source={require('../../../assets/images/vices-and-virtues.jpg')}
                    style={styles.cover}
                    resizeMode="cover"
                />

                <View style={styles.hole} />
            </View>
        </View>
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
    },

    groove1: {
        position: 'absolute',
        width: '90%',
        height: '90%',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#303030',
    },

    groove2: {
        position: 'absolute',
        width: '78%',
        height: '78%',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#303030',
    },

    groove3: {
        position: 'absolute',
        width: '66%',
        height: '66%',
        borderRadius: 999,
        borderWidth: 1,
        borderColor: '#303030',
    },

    label: {
        width: '52%',
        height: '52%',
        borderRadius: 999,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
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
