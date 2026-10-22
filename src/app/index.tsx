import { StyleSheet, Text, View } from "react-native";
import VinylRecord from "./components/vinylrecord";

export default function Index() {
  return (
    <View style={styles.container}>

      <VinylRecord />

      <View>
        <Text style={styles.title}>Now Playing</Text>
        <Text style={styles.artist}>Panic! At The Disco</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B2922',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
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
