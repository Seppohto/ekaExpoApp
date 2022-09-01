import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);

  const plusButtonPressed = () => {
    setResult(parseInt(number) + parseInt(number2));
  }
  const minusButtonPressed = () => {
    setResult(parseInt(number) - parseInt(number2));
  }
 
  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      {/* number input field to save the number to number state */}
      <TextInput type='text'
      keyboardType={"number-pad"}
      style={styles.input}
      placeholder="0" 
      onChangeText={(text) => setNumber(text)} />
      <TextInput type='text'
      keyboardType={"number-pad"}
      style={styles.input}
      placeholder="0" 
      onChangeText={(text) => setNumber2(text)} />
      <View style={styles.row}>
      <Button onPress={plusButtonPressed} title="+" />
      <Button onPress={minusButtonPressed} title="-" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }
});