
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList } from 'react-native';


export default function App() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [data, setData] = useState([]);
  const [random, setRandom] = useState((Math.floor(Math.random() * 100) + 1));
  const [guess, setGuess] = useState();
  const [guessResult, setGuessResult] = useState();
  const [guesses, setGuesses] = useState([]);

  const plusButtonPressed = () => {
    setResult(parseInt(number) + parseInt(number2));
    historyProcessPlusButtonPressed();
  }
  const minusButtonPressed = () => {
    setResult(parseInt(number) - parseInt(number2));
    historyProcessMinusButtonPressed();
  }
  const historyProcessPlusButtonPressed = () => {
    setData([...data,{ key: ((number + " + " + number2 + " = " + (parseInt(number) + parseInt(number2))))}]);
  }
  const historyProcessMinusButtonPressed = () => {
    setData([...data,{ key: ((number + " - " + number2 + " = " + (parseInt(number) - parseInt(number2))))}]);
  }
  const randomvaluebetween1and100 = () => {
    setRandom(Math.floor(Math.random() * 100) + 1);
  }
  const addGuessToGuesses = () => {
    setGuesses(guesses.concat(guess));
  }
  const checkguess = () => {
    if (guess > random) {
      setGuessResult("Guess "+guess+" is too high");
    }
    else if (guess < random) {
      setGuessResult("Guess "+guess+" is too low");
    }
    else {
      setGuessResult("You guessed the number in "+guesses.length+" guesses!");
      Alert.alert("","You guessed the number in "+guesses.length+" guesses!");
    }
  }
  const checkGuessButtonPressed = () => {
    if (random == 0) {
      randomvaluebetween1and100();
    }    
    addGuessToGuesses();
    checkguess();
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
      <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
      <Button onPress={plusButtonPressed} title="+" />
      <Button onPress={minusButtonPressed} title="-" />
      </View>
      <View style={{flex:1, flexDirection: 'column', alignItems: 'center'}}>
      <Text>Result History:</Text>
      <FlatList style={styles.list}
        data={data}
        
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
      />
      <StatusBar style="auto" />
      </View>      
      <View style={{flex:2, flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap'}}>
        <Text>Guess a Number between 1-100</Text>
        
        <Text>{guessResult}</Text>
        
        <Button id="button1" onPress={checkGuessButtonPressed} title="Make a guess" />
        <TextInput type='text'
        keyboardType={"number-pad"}
        style={styles.input}
        placeholder="Guess a Number" 
        onChangeText={(text) => setGuess(text)} />
        
       
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