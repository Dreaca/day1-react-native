import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [count,setCount] = useState(0);
  const list : string[] = ['Book 1', "Book 2","Book 3"]
  return (
    <View style={styles.container}>
      <Text>Count : {count}</Text>
      <Button onPress={() => setCount(count + 1)} title='Increment'/>
      <Button onPress={() => setCount(count - 1)} title='Decrement'/>
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
