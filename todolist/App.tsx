import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Task } from './types/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoRow from './components/TodoRow';


const STORAGE_KEY = '@todo_tasks'

export default function App() {
  const [input, setInput] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    const loadTasks = async () => {
      
      const data = await AsyncStorage.getItem(STORAGE_KEY)
      if (data) {
        setTasks(JSON.parse(data))
      }
    }
    loadTasks()
  }, [])

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])
 
  const addTask = () => {
    if (!input.trim()) return
    setTasks([{ id: Date.now(), text: input, completed: false }, ...tasks])
    setInput('')
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Add a new task"
          onSubmitEditing={addTask} 
        />
        <Pressable onPress={addTask}>
          <Text style={styles.save}>Save</Text>
        </Pressable>
      </View>
      <FlatList<Task>
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <TodoRow item={item} onToggle={toggleTask} />} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  save: {
    backgroundColor: '#007AFF',
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
