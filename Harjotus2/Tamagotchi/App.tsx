import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { INITIAL_VALUE, INTERVAL_IN_MILLIS, MAX_VALUE } from './config/game,';

export default function App() {

  const [hunger, setHunger] = useState<number>(INITIAL_VALUE);
  const [energy, setEnergy] = useState<number>(INITIAL_VALUE);
  const [mood, setMood] = useState<number>(INITIAL_VALUE);
  const isDead: boolean = hunger === 0 || energy === 0 || mood === 0;
  console.log('isDead', isDead);
  useEffect(() => {
    if (isDead) return
    const timer: number = setInterval(() => {
      setHunger(current => Math.max(current -1,0));
      setEnergy(current => Math.max(current -1,0));
      setMood(current => Math.max(current -1,0));
    }, INTERVAL_IN_MILLIS)
    return () => {
      clearInterval(timer);
    }
  }, [isDead])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamagotchi</Text>
      <Text style={styles.info}>🍕Hunger: {hunger} / {MAX_VALUE}</Text>
      <Text style={styles.info}>✨Energy: {energy} / {MAX_VALUE}</Text>
      <Text style={styles.info}>💕Mood: {mood} / {MAX_VALUE}</Text>
      <Text style={styles.status}></Text>
      <View style={styles.buttons}>
        <Button title="Feed" onPress={() => setHunger(current => (current < MAX_VALUE ? current + 1 : current))} />
        <Button title="Sleep" onPress={() => setEnergy(current => (current < MAX_VALUE ? current + 1 : current))} />
        <Button title="Play" onPress={() => setMood(current => (current < MAX_VALUE ? current + 1 : current))} />
      </View>
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
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  info: {
    fontSize: 24,
    marginVertical: 10,
    color: '#333',
  },
  status: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10
  },
});

