import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';

export default function ColorScreen() {
  const [colors, setColors] = useState([])
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red},${green},${blue})`
  }

  return (
    <View>
      <Button title={'Click to add a color'} onPress={() => {
        setColors([...colors, randomRgb()])
      }}/>
      <FlatList keyExtractor={(index) => index} data={colors} renderItem={(props) => {
        return <View style={{height: 100, width: 100, margin: 10, backgroundColor: props.item}}/>
      }}/>
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