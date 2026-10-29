import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState<string>("");
  const isValidAge = age.trim() !== "" && !isNaN(Number(age));
  const ageAsNumber = isValidAge ? Number(age) : 0;
  const lowerLimit = isValidAge ? ((220 - ageAsNumber) * 0.65).toFixed(0) : "";
  const upperLimit = isValidAge ? ((220 - ageAsNumber) * 0.85).toFixed(0) : "";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Limits Software
      </Text>
      <TextInput style={styles.input} placeholder="Enter your age"
      keyboardType = "number-pad"
      value={age}
      onChangeText={setAge}/>
      <View>
        <Text>Lower limit:</Text>
        <TextInput style={styles.input} editable={false}  value={lowerLimit}/>
        <Text>Upper limit:</Text>
        <TextInput style={styles.input} editable={false} value={upperLimit}/>
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
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
});
