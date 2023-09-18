import {Button, Linking, StyleSheet, Text, View} from 'react-native'

export default function ComponentScreen() {
  const greeting = <Text style={styles.testStyle}>Hello World from variable</Text>

const name = 'Auron'


  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native</Text>
      <Text style={styles.testStyle}>my name is {name}</Text>
      {greeting}
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign:'center',
    marginHorizontal: 5,
    padding: 5,
    fontSize: 20,
  },
  testStyle: {
    marginVertical:10,
    marginBottom:10,
    textAlign:'center',
    fontSize: 25,
  }
})

