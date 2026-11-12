import { StatusBar } from 'expo-status-bar';
import { Activity, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import TextActivityIndicator from './components/TextActivityIndicator';


export default function App() {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer: number = setTimeout(()=> {
      setLoading(false)
  }, 3000)

    return () => {
      clearTimeout(timer)

    }

  }, [])





  return (
    <View style={styles.container}>
      {loading ? (
        <TextActivityIndicator
        message="Loading..."
        />
      ) : (
        <Text>Welcome to the App!</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
