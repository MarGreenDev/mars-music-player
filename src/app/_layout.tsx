import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerShown: false,
        headerBackButtonDisplayMode: 'minimal',
      }} />;

      <Stack.Screen name="songsList" options={{
        headerBackButtonDisplayMode: 'minimal',
        title: 'Songs',

        headerStyle: {
          backgroundColor: '#593E2E',
        },
        headerTintColor: '#F2E6D8',
      }} />
    </Stack>
  )
}
