import {Button, StyleSheet, Text, View} from 'react-native';

export default function ColorCounter(props) {
  return (
    <View>
      <Text style={styles.testStyle}>{props.title}</Text>
      <Button onPress={props.onIncrease} title={`Increase ${props.color}`}/>
      <Button onPress={props.onDecrease} title={`Decrease ${props.color}`}/>
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