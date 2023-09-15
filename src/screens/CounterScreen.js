import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

export default function CounterScreen(){

  let [counter,setCounter] = useState(0);

  return(
    <View>
      <Button onPress={() => {
        setCounter(counter++)
      }} title={'Increase'}/>
      <Button onPress={() => {
        setCounter(counter--)
      }} color={'red'} title={'Decrease'}/>
      <Text style={styles.testStyle}>Current Count:{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    fontSize:17,
    paddingVertical:8,
    backgroundColor:'blue',
    color:'white',
    marginTop:20,
    textAlign:'center',
  },
  testStyle: {
    marginVertical:20,
    textAlign:'center',
    fontSize: 30,
  }
});