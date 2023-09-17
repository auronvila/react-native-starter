import {Button, StyleSheet, Text, View} from 'react-native';
import {useReducer} from 'react';


function reducer(state, action){
  switch (action.type) {
    case 'change_num':
      return {...state, count: state.count + action.payload}
    default:
      return state
  }
}

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, {count: 0})


  return (
    <View>
      <Button onPress={() => {
        dispatch({type: 'change_num', payload: 1 })
      }} title={'Increase'}/>
      <Button onPress={() => {
        dispatch({type: 'change_num', payload: -1 })
      }} color={'red'} title={'Decrease'}/>
      <Text style={styles.testStyle}>Current Count: {state.count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    fontSize: 17,
    paddingVertical: 8,
    backgroundColor: 'blue',
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  testStyle: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 30,
  }
});