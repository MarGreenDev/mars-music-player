import { Link, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import MediaControls from "./components/mediaControls";
import VinylRecord from "./components/vinylrecord";

export default function Index() {
  const router = useRouter;

  return (
    <View style={styles.container}>

      <View >
        <Link href="/songsList" style={styles.songListButton}>
          <Text>View songs</Text>
        </Link>

      </View>

      <VinylRecord />

      <View>
        <Text style={styles.title}>Now Playing</Text>
        <Text style={styles.artist}>Panic! At The Disco</Text>
      </View>

      <MediaControls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#593E2E',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  songListButton: {
    backgroundColor: 'rgba(140, 91, 62, 0.7)',
    color: '#F5E9D5',
    fontWeight: 'bold',
    padding: 12,
    borderRadius: 50,
    position: 'absolute',
    bottom: 80,
    right: 50,
  },
  vinyl: {
    width: 250,
    height: 250,
    marginBottom: 32,
  },
  title: {
    color: '#F5E9D5',
    fontSize: 28,
    fontWeight: 'bold',
  },
  artist: {
    color: '#D5C2A5',
    fontSize: 16,
    marginTop: 8,
  },
});
