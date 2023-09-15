import {Button, Linking, StyleSheet, Text, View} from 'react-native'

export default function ComponentScreen() {
  const greeting = <Text style={styles.testStyle}>Hello World from variable</Text>

  const openExternalLink = () => {
    const url = 'https://www.google.com';
    Linking.openURL(url)
      .catch((err) => console.error('An error occurred: ', err));
  };
const name = 'Auron'


  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native</Text>
      <Text style={styles.testStyle}>my name is {name}</Text>
      {greeting}
      <Button title={'press to go to google'} onPress={openExternalLink}/>
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

